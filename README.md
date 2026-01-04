StudyOS — Adaptive Study Planner + Accountability Dashboard

StudyOS is a full-stack web app that generates a weekly study plan from deadlines + availability, tracks study sessions, and adapts future plans based on your completion patterns.

Features
MVP

Auth: Register / Login / Logout + “Get current user”

Courses: Create, edit, delete, list (difficulty 1–5, target hours/week)

Deadlines: Create, edit, delete, list (due date + importance 1–5)

Availability: Weekly time blocks saved to DB

Plan Generator: Creates a 7-day study plan (learn/practice/review) based on urgency, difficulty, targets, and availability

Study Sessions: Start/end sessions with outcomes + focus/difficulty scores + failure reason

Analytics: Weekly minutes per course, completion rate, best study times, and a coach summary

Phase 2 (Planned)

Adaptive engine (shorter blocks if completion is low, more scheduling in best time windows, shift “too hard” to review/practice)

Optional daily check-ins (mood/energy/sleep) used only for patterns (no medical claims)

Tech Stack

Frontend: React + Vite, React Router, Axios, Charts

Backend: Node.js + Express, Zod validation, JWT auth, bcrypt

Database: PostgreSQL (pg) + pgAdmin

Repo Structure

client/ — React frontend

server/ — Express backend + DB schema/migrations

Local Setup (Windows)
1) Prereqs

Node.js (LTS recommended)

PostgreSQL + pgAdmin

2) Database

Create a database named: studyos

Run the schema in: server/src/db/schema.sql

3) Backend (server)

Create server/.env (based on .env.example):

PORT=4000

DATABASE_URL=postgres://<user>:<pass>@localhost:5432/studyos

JWT_SECRET=your_dev_secret

CLIENT_URL=http://localhost:5173

Install + run:

cd server

npm install

npm run dev

4) Frontend (client)

Create client/.env:

VITE_API_URL=http://localhost:4000

Install + run:

cd client

npm install

npm run dev

Frontend should run at: http://localhost:5173

API Overview

Auth:

POST /auth/register

POST /auth/login

POST /auth/logout

GET /auth/me

Courses:

GET /courses

POST /courses

PATCH /courses/:id

DELETE /courses/:id

Deadlines:

GET /deadlines

POST /deadlines

PATCH /deadlines/:id

DELETE /deadlines/:id

Availability:

GET /availability

POST /availability (replace all blocks)

Plan:

POST /plan/generate

GET /plan?from=...&to=...

PATCH /plan/:blockId

Sessions:

POST /sessions/start

POST /sessions/:id/end

GET /sessions?from=...&to=...

Analytics:

GET /analytics/weekly?weekStart=...

GET /analytics/patterns?from=...&to=...

GET /analytics/course/:courseId?from=...&to=...

Demo Script (for recruiters)

Register + login

Add a course + deadline

Set availability

Generate a 7-day plan

Start/end a session

Show analytics + coach summary

Roadmap

 Backend routes/controllers for MVP

 Plan generator MVP

 Analytics dashboard

 Adaptive engine rules

 Deployment (frontend + backend)
