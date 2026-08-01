from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Dict
from dotenv import load_dotenv
import google.generativeai as genai
import traceback
import os

from prompts import SYSTEM_PROMPT

# -----------------------------
# Load Environment Variables
# -----------------------------
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

print("=" * 50)
print("API Key Loaded:", GEMINI_API_KEY is not None)
print("Key Length:", len(GEMINI_API_KEY) if GEMINI_API_KEY else 0)
print("=" * 50)

if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY is missing.")

# -----------------------------
# Configure Gemini
# -----------------------------
genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-flash-latest")

# -----------------------------
# FastAPI App
# -----------------------------
app = FastAPI(
    title="CareerGPT AI Service",
    version="1.0.0"
)

# -----------------------------
# Request Model
# -----------------------------
class ChatRequest(BaseModel):
    messages: List[Dict[str, str]]
    questionCount: int

# -----------------------------
# Health Check
# -----------------------------
@app.get("/")
def home():
    return {
        "status": "CareerGPT AI Service is running"
    }

# -----------------------------
# Chat Endpoint
# -----------------------------
@app.post("/chat")
def chat(request: ChatRequest):

    try:

        conversation = SYSTEM_PROMPT + "\n\nConversation:\n"

        for message in request.messages:
            role = message.get("role", "user").capitalize()
            content = message.get("content", "")
            conversation += f"{role}: {content}\n"

        conversation += f"""

SYSTEM INSTRUCTION:

The student has already answered {request.questionCount} questions.

If the student has answered fewer than 10 questions:
- Ask exactly ONE relevant follow-up question.
- Do NOT generate the report.
- Ask only one question.

If the student has answered 10 or more questions:
- Generate the COMPLETE career report.
- Return ONLY valid JSON.
- Do NOT ask another question.
- Do NOT include explanations.
- Do NOT wrap the JSON in markdown.
- Do NOT include ```json.
"""

        response = model.generate_content(conversation)

        if response is None:
            raise HTTPException(
                status_code=502,
                detail="Gemini returned no response."
            )

        if not getattr(response, "text", None):
            raise HTTPException(
                status_code=502,
                detail="Gemini returned an empty response."
            )

        return {
            "reply": response.text
        }

    except HTTPException:
        raise

    except Exception as e:

        print("\n========== GEMINI ERROR ==========")
        traceback.print_exc()
        print("==================================\n")

        raise HTTPException(
            status_code=503,
            detail=str(e)
        )