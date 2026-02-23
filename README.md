📝 Todo App
A multi-project Todo application built with Vanilla JavaScript, focusing on clean state management, modular architecture, and persistent storage using localStorage.
This project was built as part of The Odin Project curriculum, with emphasis on:
State-driven rendering
Event delegation
Modular JS structure
Data persistence
Async-ready architecture

🚀 Live Demo
👉 [https://to-do-app-flax-tau-79.vercel.app/]

📌 Features
📁 Project Management
Create new projects
Switch between projects
Delete projects
Automatically handles active project changes

✅ Task Management
Add tasks with:
Title
Description
Due Date
Priority
Edit existing tasks
Delete tasks
Mark tasks as completed
Toggle completed tasks back to active

📅 Smart Due Dates
Uses date-fns to:
Format dates
Show relative time (e.g., "3 days left", "Due today", "Overdue by 2 days")

💾 Persistent Storage
Saves:
Projects
Tasks
Active project
Data survives page refresh using localStorage

🧠 Key Concepts Implemented
This project focuses heavily on architecture and core JavaScript concepts:
Single Source of Truth (central state in logic.js)
ID-based data management (no index-based bugs)
Event delegation for dynamic elements
Separation of concerns:
logic.js → state management
render.js → UI rendering
storage.js → persistence
State → Render pattern
Defensive programming for edge cases

🛠 Tech Stack
HTML5
CSS3
JavaScript (ES6 Modules)
Webpack
date-fns
localStorage API
