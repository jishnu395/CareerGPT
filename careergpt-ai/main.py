from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
from dotenv import load_dotenv
import google.generativeai as genai
import os

from prompts import SYSTEM_PROMPT

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")

# FastAPI app
app = FastAPI(
    title="CareerGPT AI Service",
    version="1.0.0"
)


class ChatRequest(BaseModel):
    messages: List[Dict[str, str]]
    questionCount: int


@app.get("/")
def home():
    return {
        "status": "CareerGPT AI service is running"
    }


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
- Ask exactly ONE question.
- Do NOT generate the report.

If the student has answered 10 or more questions:
- Return ONLY valid JSON.
- Do NOT ask another question.
- Do NOT wrap the JSON inside markdown.
- Do NOT include ```json.
- Do NOT include explanations.
"""

        response = model.generate_content(conversation)

        return {
            "reply": response.text
        }

    except Exception as e:
        print(e)
        return {
            "error": str(e)
        }