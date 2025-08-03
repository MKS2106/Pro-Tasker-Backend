# Protasker API – Backend Service for ProjectGuru-App
This backend project provides a simple and secure user authentication system using **Node.js**, **Express**, **MongoDB**, **bcrypt**, and **JWT**. It allows users to register and log in to the app and manage projects and tasks.

---

## 📌 Overview:

The **Protasker API** powers the backend of **ProjectGuru**, a full-stack productivity and project management platform. It provides secure authentication, project ownership validation, and complete CRUD functionalities for managing both projects and their associated tasks.

Built using **Node.js**, **Express**, **MongoDB**, and **JWT**, this RESTful API is designed for scalability, maintainability, and security.

## 🎯 Core Objectives:

- 🔐 Secure **user registration and login** with hashed passwords
- 📁 Create, read, update, and delete **user-owned projects**
- ✅ Full **task CRUD functionality** nested under each project
- 🛡 Project and task **ownership validation**
- 🗂 Data persistence using **MongoDB Atlas**
- 🧩 Modular architecture using controllers, models, middleware, and routes

---

## 📁 Project Preview:
<pre?>
protasker/backend
├── config/ # db connection
├── controllers/ # Business logic
├── middleware/ # Auth 
├── models/ # Mongoose schemas
├── routes/ # API route handlers
├── utils/ # Token and helper functions
├── server.js # Entry point
└── .env # Environment config </pre>

## ⚙️ Technologies Used:

- Node.js & Express.js (backend framework)
- MongoDB & Mongoose (database and ODM)
- JSON Web Token (authentication)
- bcrypt (password hashing)
- dotenv (environment config)
- nodemon (dev dependency)

## Prerequisites:

- Node.js installed on your machine  
- nodemon Installed(npm i -D nodemon)
- dotenv Installed(npm i dotenv)
- mongoose Installed(npm i mongoose)
- express installed (npm i express)
- Postman installed
- install bcrypt library (npm install bcrypt)
- install jsonwebtoken (npm install jsonwebtoken)

## Steps to run:

- Clone the repository 
- Navigate to project directory(cd to directory)
- Install dependencies npm init y 
- Update pakage.json file as per requirement
- Add and update .env file and add the DB connection key
- Run the server (npm run dev)

## Environment Setup:

- PORT=3000
- MONGO_URI=your_uri
- JWT_SECRET=your_secret_key

## Start the development server:

npm run dev

## API End points for Users:

- POST : 
1. `/api/users/register`
2. `/api/users/login`

## API end pounts for Projects:

- POST
1. `api/projects/`
2. GET
`api/projects/:projectid`
3. PUT
`api/projects/:projectid`
4. DELETE
`api/projects/:projectid`
5. GET
`api/projects/:projected

## API end points for Tasks:

- POST
1. `api/tasks/`
2. GET
`api/tasks/:projectID`
3. PUT
`api/tasks/:taskid`
4. DELETE
`api/tasks/:tasktid`

🧠 Development Process:

- Setup Express.js with modular route/controller pattern
- Connect MongoDB Atlas and define User, Project, and Task schemas
- Configure JWT token generation and validation
- Protect all routes using custom auth middleware
- Test all routes via Postman

📌 Future Enhancements:

🧑‍🤝‍🧑 Collaborative projects with team invites
🗓 Task deadlines, priority levels, and reminders
📎 File attachment support per task
🔍 Search, filters, and pagination for large datasets
🐛 Bug/issue tracking per project
📊 Admin dashboard for usage analytics and moderation
