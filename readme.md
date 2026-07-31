<div align="center">

# 🚀 CareerGPT
### AI-Powered Career Intelligence Platform

<img src="https://img.shields.io/badge/Java-21-orange?style=for-the-badge&logo=openjdk"/>
<img src="https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?style=for-the-badge&logo=springboot"/>
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi"/>
<img src="https://img.shields.io/badge/Gemini-AI-blue?style=for-the-badge&logo=google"/>
<img src="https://img.shields.io/badge/PostgreSQL-16-336791?style=for-the-badge&logo=postgresql"/>

### **Empowering students with AI-driven career guidance, personalized roadmaps, and professional development insights.**

</div>

---

# 📖 Overview

CareerGPT is an AI-powered Career Intelligence Platform designed to help students discover suitable career paths based on their skills, interests, strengths, and aspirations.

Instead of generic career recommendations, CareerGPT conducts an intelligent AI conversation, understands the student's profile, and generates a comprehensive personalized career report.

The application combines:

- 🤖 Generative AI (Google Gemini)
- ☕ Spring Boot REST APIs
- ⚛️ React Frontend
- ⚡ FastAPI AI Microservice
- 🐘 PostgreSQL Database

to deliver an end-to-end career guidance experience.

---

# ✨ Features

## 👨‍🎓 Student Assessment

- Student profile registration
- AI-powered career interview
- Dynamic question generation
- Session-based assessment
- Personalized interaction

---

## 🤖 AI Intelligence

- Powered by Google Gemini
- Context-aware conversations
- Multi-turn assessment
- Career analysis
- Skill extraction
- Learning recommendation
- Career path prediction

---

## 📄 Personalized Career Report

CareerGPT generates a professional report including:

- Candidate Snapshot
- Executive Summary
- Top Career Matches
- Technical Skills
- Professional Skills
- Recommended Courses
- Certifications
- Career Roadmap
- Colleges
- Competitive Exams
- Immediate Action Plan
- Long-Term Growth Strategy

---

## 📊 Interactive Dashboard

- Beautiful Material UI
- Modern responsive design
- Smooth workflow
- PDF report generation
- Mobile-friendly interface

---

# 🏗️ System Architecture

```text
                React + Vite
                     │
                     ▼
            Spring Boot Backend
                     │
                     ▼
            FastAPI AI Service
                     │
                     ▼
          Google Gemini API
                     │
                     ▼
               PostgreSQL
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Material UI
- Axios
- React Router

---

## Backend

- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Maven

---

## AI Service

- Python
- FastAPI
- Google Gemini API

---

## Database

- PostgreSQL

---

# 📂 Project Structure

```text
CareerGPT
│
├── careergpt-frontend
│      ├── pages
│      ├── components
│      ├── services
│      └── assets
│
├── careergpt-backend
│      ├── controller
│      ├── service
│      ├── repository
│      ├── model
│      ├── dto
│      └── config
│
├── careergpt-ai
│      ├── main.py
│      ├── prompts.py
│      └── requirements.txt
│
└── README.md
```

---

# ⚙️ Workflow

```text
Student Details
        │
        ▼
AI Assessment
        │
        ▼
Conversation Analysis
        │
        ▼
Career Intelligence
        │
        ▼
Personalized Report
        │
        ▼
Download PDF
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/<your-username>/CareerGPT.git
```

```bash
cd CareerGPT
```

---

# Backend Setup

```bash
cd careergpt-backend
```

Configure PostgreSQL in

```properties
application.properties
```

Run

```bash
mvn spring-boot:run
```

Runs on

```
http://localhost:8080
```

---

# AI Service Setup

```bash
cd careergpt-ai
```

Create

```
.env
```

Add

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run

```bash
uvicorn main:app --reload --port 8000
```

Runs on

```
http://localhost:8000
```

---

# Frontend Setup

```bash
cd careergpt-frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

Runs on

```
http://localhost:5173
```

---

# Environment Variables

## Backend

```properties
SPRING_DATASOURCE_URL=
SPRING_DATASOURCE_USERNAME=
SPRING_DATASOURCE_PASSWORD=
AI_SERVICE_URL=http://localhost:8000
```

---

## AI Service

```env
GEMINI_API_KEY=
```

---

# REST APIs

## Student

| Method | Endpoint |
|---------|----------|
| POST | `/api/student` |
| GET | `/api/student/{id}` |

---

## Session

| Method | Endpoint |
|---------|----------|
| POST | `/api/session/start/{studentId}` |

---

## AI

| Method | Endpoint |
|---------|----------|
| POST | `/api/ai/answer` |

---

## Report

| Method | Endpoint |
|---------|----------|
| GET | `/api/report/{sessionId}` |

---

# AI Assessment Flow

```text
Student Registration
          │
          ▼
Create Session
          │
          ▼
AI asks Questions
          │
          ▼
Student Answers
          │
          ▼
Conversation Analysis
          │
          ▼
Generate Career Report
          │
          ▼
Store Report
          │
          ▼
Generate PDF
```

---

# Future Enhancements

- Resume Analysis
- ATS Resume Scoring
- Resume Builder
- Interview Preparation
- Mock Interviews
- Company Recommendations
- Job Matching
- Skill Gap Analysis
- Learning Tracker
- AI Voice Interview
- Multi-language Support
- Authentication & User Accounts
- Admin Dashboard
- Cloud Deployment

---

# Screenshots

> Add screenshots here

```
Landing Page

Student Details

Assessment

Processing

Career Report

Generated PDF
```

---

# Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| AI Service | Render |
| Database | Neon PostgreSQL |

---

# Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

## **Jishnu V**

**Computer Science Engineering**

Sir M Visvesvaraya Institute of Technology

GitHub: https://github.com/jishnu395

LinkedIn: https://linkedin.com/in/v-jishnu

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a star!

**CareerGPT — Guiding Careers with the Power of AI.**

</div>
