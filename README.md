# 🚀 VibeSaver AI

An AI-powered productivity companion that transforms messy thoughts into structured, actionable plans with priorities, deadlines, and smart scheduling using **Gemini AI**.

---

## 🧠 Problem Statement

People often miss deadlines, assignments, and important tasks due to poor planning. Traditional reminder apps are passive and do not help users take action.

VibeSaver AI solves this by:
- Understanding user input
- Breaking tasks into actionable steps
- Prioritizing work intelligently
- Generating a full productivity plan

---

## ✨ Features

- 🧠 AI-powered task analysis (Gemini API)
- 📅 Smart deadline detection
- ⚡ Intelligent task prioritization (HIGH / MEDIUM / LOW)
- 📊 Productivity score & stress analysis
- 🚀 Daily AI-generated schedule
- 🧾 Action steps breakdown (micro tasks)
- ⏳ Countdown timer for deadlines
- 🚨 AI rescue plan for urgent tasks
- 💾 MongoDB data persistence
- 🎨 Modern responsive UI

---

## 🏗️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Gemini AI (@google/genai)
- CORS + dotenv

---

## 🤖 Google Technologies Used

- Gemini 2.5 Flash Model
- Google AI Studio (for prompt design & testing)
- Google Cloud (for deployment - planned/used)

---

## 📁 Project Structure
vibesaver-ai/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── prompts/
│ ├── utils/
│ ├── server.js
│ └── app.js
│
├── frontend/
│ ├── src/
│ ├── components/
│ └── App.jsx


---

## ⚙️ Setup Instructions

### 1. Clone Repo
```bash
git clone https://github.com/ranjay17/vibesaver-ai.git
cd vibesaver-ai

2. Backend Setup
cd backend
npm install

Create .env file:

MONGO_URI=your_mongodb_uri
GEMINI_API_KEY=your_gemini_api_key
PORT=5000

Run backend:

node server.js
3. Frontend Setup
cd frontend
npm install
npm run dev
🚀 API Endpoint
POST /api/tasks/analyze

Request:

{
  "rawText": "Finish project tomorrow, pay bill today"
}
📊 Evaluation Focus
Problem Solving & Impact
AI Agentic Depth
Innovation & Creativity
Google AI Usage
UI/UX Experience
Technical Implementation
🎯 Future Improvements
Google Calendar Integration
Voice assistant input
Notifications system
Mobile app version
Smart habit tracking

Built with ❤️ for Hackathon Submission