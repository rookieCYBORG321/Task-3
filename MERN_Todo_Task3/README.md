# MERN Stack To-Do List Application

## Project Description
A responsive, full-stack Web Application designed to handle dynamic task management using the MERN stack ecosystem. This application leverages a decoupled architecture where a React.js client interfaces asynchronously with a Node.js/Express REST API. The backend manages state persistence globally using a cloud-hosted MongoDB Atlas database cluster, processing structural queries via Object Data Modeling (ODM) middleware.

This project was built to satisfy full CRUD operations—enabling a user to seamlessly add new tasks, read active listings, update task data dynamically, and delete records over secure cross-origin pipelines.

---

## Author & Developer Profile
* **Lead Engineer:** Parth Jani
* **Role:** Software Engineering Intern
* **Organization:** Maincrafts Technology
* **Project Context:** Internship Task 2 - Full Stack Web Implementation

---

## Technical Architecture & Core Components

### 1. Database Layer (MongoDB Atlas)
* Hosted fully on an AWS cloud cluster.
* Implements Mongoose schemas to safely structure task records before writing documents to collections.
* Configured using specialized firewall network access rules (`0.0.0.0/0`) to process secure remote traffic queries.

### 2. Server Pipeline (Node.js & Express)
* Deployed on network port `5001` to isolate application handling from localized network resource locks.
* Integrated with localized Express JSON parsing middleware.
* Explicitly implements structural CORS (Cross-Origin Resource Sharing) middleware to safely process cross-origin data headers.

### 3. User Interface Layer (React.js)
* Deployed on local port `3000`.
* Leverages Axios HTTP client wrapper instances to dispatch asynchronous requests cleanly to backend controllers.
* Handles instant UI DOM mutations natively via React Hooks state management without needing browser tab reloads.

---

## Directory Architecture
```text
MERN_Todo_Task2/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   └── App.js
    └── package.json