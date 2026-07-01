# 🎓 CareerGPT - AI Powered Career Guidance Platform

CareerGPT is an AI-powered career guidance platform that helps students discover suitable career paths through an adaptive conversation. It uses a **Spring Boot backend**, a **Python FastAPI AI microservice**, **Google Gemini AI**, and **PostgreSQL** to generate personalized career reports.

---

## 🚀 Features

- 🔐 JWT Authentication (Register & Login)
- 👤 Student Session Management
- 💬 Adaptive AI Conversation
- 🤖 AI-powered Career Guidance using Google Gemini
- 📊 Personalized Career Report Generation
- 💾 Persistent Storage using PostgreSQL
- 🌐 REST APIs built with Spring Boot
- ⚡ FastAPI AI Microservice
- 📄 JSON-based Report Retrieval

---

# 🏗️ System Architecture

```text
                +----------------------+
                |      Client          |
                | (Postman / React UI) |
                +----------+-----------+
                           |
                           |
                           ▼
               Spring Boot Backend
        (Authentication + Business Logic)
                           |
             REST API (RestTemplate)
                           |
                           ▼
               Python FastAPI Service
                   (Prompt Builder)
                           |
                           ▼
                  Google Gemini API
                           |
                           ▼
                  AI Career Guidance
                           |
                           ▼
                    PostgreSQL Database
```

---

# 🛠️ Tech Stack

## Backend

- Java 22
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven

## AI Microservice

- Python
- FastAPI
- Google Gemini API
- Prompt Engineering

## Database

- PostgreSQL

## Tools

- IntelliJ IDEA
- VS Code
- Postman
- Git & GitHub

---

# 📂 Project Structure

```
CareerGPT
│
├── careergpt-backend
│   ├── config
│   ├── controller
│   ├── dto
│   ├── model
│   ├── repository
│   ├── security
│   ├── service
│   └── ...
│
├── careergpt-ai
│   ├── main.py
│   ├── prompts.py
│   ├── requirements.txt
│   └── .env
│
└── README.md
```

---

# 🔄 Workflow

1. Student registers and logs in.
2. JWT token is generated.
3. Student starts a career guidance session.
4. Spring Boot stores conversation history.
5. Spring Boot sends conversation to FastAPI.
6. FastAPI calls Google Gemini.
7. Gemini asks adaptive questions.
8. After 10 answers, Gemini generates a personalized career report.
9. Spring Boot stores the report in PostgreSQL.
10. Report can be retrieved anytime using the Report API.

---

# 📡 REST API Endpoints

## Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

---

## Session

### Start Session

```
POST /api/session/start
```

---

## AI

### Send Student Answer

```
POST /api/ai/answer
```

---

## Report

### Get Career Report

```
GET /api/report/{sessionId}
```

---

# 📋 Sample Career Report

The AI generates a personalized report containing:

- Summary
- Top Career Recommendations
- Why Those Careers
- Recommended Courses
- Skills to Develop
- Relevant Exams
- Recommended Colleges
- Career Roadmap
- Immediate Next Step
- Motivation & Encouragement

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/jishnu395/CareerGPT.git
```

---

## 2. Configure PostgreSQL

Create a PostgreSQL database and update the Spring Boot configuration.

---

## 3. Configure Gemini API

Create a `.env` file inside the `careergpt-ai` folder.

```
GEMINI_API_KEY=YOUR_API_KEY
```

---

## 4. Start Python AI Service

```bash
cd careergpt-ai

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
```

---

## 5. Start Spring Boot

Run the Spring Boot application from IntelliJ IDEA.

---

## 🎯 Future Improvements

- React Frontend
- Chat UI
- PDF Career Report Export
- Resume Analysis
- Career Dashboard
- Deployment on Railway/Render
- Docker Support
- Admin Dashboard

---

# 👨‍💻 Author

**Jishnu V**

- GitHub: https://github.com/jishnu395
- LinkedIn: https://www.linkedin.com/in/jishnu-v-3119462a4/

---

# ⭐ If you found this project useful, consider giving it a Star!