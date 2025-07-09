# 📊 ProdTracker – Productivity Tracking Chrome Extension

COMPANY :- CODTECH IT SOLUTIONS

NAME :- RAGANI KUMARI

INTERN ID :- CT06DF640

DOMAIN :- MERN STACK WEB DEVELOPMENT

DURATION :- 6 WEEKS

MENTOR :- NEELA SANTOSH KUMAR

---
*ProdTracker* is a lightweight productivity tracking tool built as a Chrome extension. It helps users monitor how much time they spend on different websites or apps daily, and presents this information in a clean, easy-to-read format using a dashboard.

---

## 🚀 Features

- 🔍 Tracks website usage time automatically.
- 📅 Generates daily reports with detailed breakdowns.
- 📦 Chrome Extension frontend built with React.
- 🔐 User authentication using JWT.
- 🧠 Daily summary generated and stored via Node.js + MongoDB backend.
- 📁 Clean separation of client (popup) and server folders.
- 📈 Displays data visually inside the popup interface.

---

## 🛠 Tech Stack

- *Frontend*: React (Vite), HTML, CSS
- *Backend*: Node.js, Express.js
- *Database*: MongoDB (with Mongoose)
- *Chrome APIs*: declarativeNetRequest, storage, and tabs
- *Other Tools*: JWT for authentication, dotenv for environment config

---

## 📂 Folder Structure

prodtracker/
│
├── extension/
│ ├── manifest.json
│ ├── icons/
│ └── popup-react/ → React frontend for popup
│
├── server/
│ ├── config/ → MongoDB connection setup
│ ├── models/ → Mongoose schemas (User, Report, etc.)
│ ├── routes/ → Express routes (auth, time, report)
│ ├── middleware/ → JWT auth middleware
│ ├── jobs/ → Daily report generation logic
│ └── server.js → Main Express app

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/RaganiKumari9798/CROME-EXTENSION-prodtracker-/prodtracker.git
cd prodtracker

### 2.Install dependencies

## Backend:
```bash
cd server

## Frontend:
```bash
cd popup-react
npm start

### 3.Start the app

## Backend:
```bash
cd server
npm start

## Build frontend:
```bash
cd popup-react
npm run build

