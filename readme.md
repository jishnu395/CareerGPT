# 🚀 CareerGPT – AI Career Intelligence Platform

CareerGPT is a full-stack AI-powered career guidance platform that conducts an adaptive conversation with students, understands their interests, skills, goals, and academic background, and generates a personalized career roadmap using Generative AI.

---

## 📌 Features

- 🔐 Secure JWT Authentication
- 👤 Student Registration & Login
- 💬 AI-powered adaptive career assessment
- 🧠 Dynamic conversation using FastAPI + OpenAI
- 📊 Personalized Career Report
- 🎯 Career Recommendations
- 📚 Recommended Courses
- 🛠 Skills Gap Analysis
- 🗺 Career Roadmap
- 🏛 Suggested Colleges
- 📄 Downloadable Report
- 🎨 Modern Responsive UI built with React + Material UI

---

# 🏗 Architecture

```
                React (Vite)
                      │
                  REST APIs
                      │
             Spring Boot Backend
         (Authentication + Business Logic)
             │                   │
             │                   │
      PostgreSQL            FastAPI AI Service
                                  │
                             OpenAI GPT API
```

---

# 🛠 Tech Stack

## Frontend

- React (Vite)
- Material UI
- Axios
- React Router

## Backend

- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- Hibernate

## AI Service

- FastAPI
- OpenAI API
- Python

## Database

- PostgreSQL

---

# 📂 Project Structure

```
CareerGPT/

├── careergpt-frontend
│      ├── src
│      ├── components
│      ├── pages
│      ├── services
│      └── theme
│
├── careergpt-backend
│      ├── controller
│      ├── service
│      ├── repository
│      ├── model
│      ├── dto
│      ├── security
│      └── config
│
└── careergpt-ai
       ├── main.py
       ├── prompts.py
       └── requirements.txt
```

---

# ⚙️ How It Works

### Step 1

Student registers and logs in.

↓

### Step 2

Backend creates a new assessment session.

↓

### Step 3

Student answers AI-generated questions.

↓

### Step 4

Spring Boot stores every conversation.

↓

### Step 5

Conversation history is sent to the FastAPI AI service.

↓

### Step 6

OpenAI analyzes the responses.

↓

### Step 7

AI generates a structured JSON career report.

↓

### Step 8

Backend stores the report in PostgreSQL.

↓

### Step 9

Frontend displays the personalized career report.

---

# 📊 Generated Report Includes

- Career Summary
- Top Career Recommendations
- Why These Careers
- Recommended Courses
- Skills to Develop
- Suggested Colleges
- Roadmap
- Immediate Next Steps
- Personalized Encouragement

---

# 🔐 Authentication

CareerGPT uses JWT Authentication.

Workflow:

```
Register
    ↓
Generate JWT
    ↓
Login
    ↓
Receive Token
    ↓
Token stored in Local Storage
    ↓
Authenticated API Requests
```

---

# 🚀 Running Locally

## 1. Clone Repository

```bash
git clone https://github.com/<your-username>/CareerGPT.git
```

---

## 2. Backend

```bash
cd careergpt-backend

mvn spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

## 3. AI Service

```bash
cd careergpt-ai

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
```

Runs on:

```
http://localhost:8000
```

---

## 4. Frontend

```bash
cd careergpt-frontend

npm install

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 📸 Screenshots

> Add screenshots after deployment.

- Landing Page
- Student Registration
- AI Assessment
- Processing Screen
- Career Report

---

# 🌟 Future Enhancements

- PDF Report Export
- Email Career Report
- Resume Analysis
- ATS Resume Score
- LinkedIn Profile Analysis
- Personality Assessment
- Career Matching using Embeddings
- Voice-based Assessment
- Multi-language Support
- Admin Dashboard
- Analytics

---

# 📚 Learning Outcomes

This project demonstrates knowledge of:

- Full Stack Development
- Spring Boot REST APIs
- JWT Authentication
- React State Management
- FastAPI
- OpenAI Integration
- PostgreSQL
- REST Communication
- AI Prompt Engineering
- Full Project Deployment

---

# 👨‍💻 Author

**Jishnu V**

Computer Science Engineering Student

Interested in:

- Artificial Intelligence
- Machine Learning
- Generative AI
- Full Stack Development

GitHub:
https://github.com/jishnu395

LinkedIn:
https://www.linkedin.com/in/jishnu-v-3119462a4/

---

# ⭐ If you like this project

Give the repository a ⭐ on GitHub.