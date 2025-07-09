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

git clone https://github.com/your-username/prodtracker.git
cd prodtracker

### 2.Install dependencies

## Backend:

cd server<br>
npm install

## Frontend:

cd popup-react<br>
npm install

### 3.Start the app

## Backend:

cd server<br>
npm start

## Build frontend:

cd popup-react<br>
npm run build

---

## 🧩 Load the Extension in Chrome

- Go to chrome://extensions/<br>
- Enable Developer mode (top right)<br>
- Click Load unpacked<br>
- Select the /extension folder

## 🧪 Future Enhancements<br>
- 📊 Add chart visualizations (pie/bar)<br>
- ☁Sync across devices<br>
- 🔔 Daily reminders/alerts

---

## output:
<img width="1915" height="1013" alt="Image" src="https://github.com/user-attachments/assets/10be1ebd-7231-449f-a66b-c2983b5edff9" />


👤 Author<br> 
Name: Ragani Kumari<br>
Project: ProdTracker<br>
License: MIT

## 🙌 Contributions<br>
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

