# DO-to-DOO


## 🧠 ProjectFlow – Modular Todo Application

A multi-project task management application built using Vanilla JavaScript (ES6 Modules) with a strong focus on state-driven architecture, clean separation of concerns, and persistent storage.

This project was built to deeply understand how modern frontend applications manage:

- State
- Rendering
- Event delegation
- Data persistence
- Async-ready structure
---
🚀 Live Demo: [Do-to-Doo](https://to-do-app-flax-tau-79.vercel.app/)
📷 Preview: ![Screenshot of the Website]()
---


## ✨ Core Features
### 📁 Project Management

- Create multiple projects
- Switch between active projects
- Delete projects safely
- Automatically reassign active project when deleted
- table ID-based project handling (no index bugs)

### 📝 Task Management

- Add tasks with:
  - Title
  - Description
  - Due Date
  - Priority
- Edit tasks
- Delete tasks
- Toggle completion status
- Move tasks between active and completed sections dynamically

### 📅 Smart Due Dates (Powered by date-fns)

- Human-readable formatting (e.g., Feb 21, 2026)
- Relative time display:
  - “3 days left”
  - “Due today”
  - “Overdue by 2 days”

### 💾 Persistent State (localStorage)

- Projects
- Tasks
- Active project
- Project counter

State survives page refresh.

Execution order carefully handled to prevent data overwriting on initialization.

## 🏗 Architecture Overview

This project intentionally avoids frameworks to deeply understand core frontend principles.

🔹 Single Source of Truth

All application state is centralized in `logic.js`.

```js
projects
activeProjectId
projectCounter
```
The DOM is never treated as the source of truth.


🔹 State → Render Pattern

Every state mutation triggers a re-render:

- addProject()
- deleteProject()
- addTask()
- editTask()
- toggleTask()
- deleteTask()
Rendering is deterministic and based purely on current state.


🔹 ID-Based Data Linking

- Projects use incremental numeric IDs
- Tasks use crypto.randomUUID()
- DOM elements link to state via data-* attributes
- No reliance on array indices

This prevents common reordering bugs.


🔹 Event Delegation

Instead of attaching multiple listeners:

- Project switching uses delegated listeners
- Task toggling uses delegated listeners
- Delete and edit buttons handled dynamically

This ensures stability even after full re-renders.


🔹 Separation of Concerns

``` Plain text
src/
│
├── logic.js              → State management
├── renderProjects.js     → Project UI rendering
├── renderTasks.js        → Task UI rendering
├── storage.js            → localStorage persistence
├── projectSwitchLogic.js → Project event handling
├── taskComplete.js       → Completion logic
├── deleteTask.js         → Task deletion
├── editForm.js           → Task editing logic
├── index.js              → App entry point
└── style.css
```
Each module has a single responsibility.

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Webpack
- date-fns
- localStorage API

## ⚙️ Installation

```Bash
git clone <your-repo-url>
cd todo-app
npm install
npm run build
```
For development:
```Bash
npm run start
```


## 🧠 Key Learnings

- Designing modular frontend architecture without frameworks
- Managing application state cleanly
- Handling dynamic DOM updates safely
- Understanding execution order in app initialization
- Avoiding stale state bugs
- Working with third-party libraries (date-fns)
- Implementing persistent state with localStorage

## 🧪 Edge Cases Handled

- Deleting active project safely
- Preventing orphaned activeProjectId
- Ensuring state loads before rendering
- Avoiding duplicated event listeners
- Maintaining data integrity after refresh


## 📌 Why This Project Matters

This application was built to understand how frontend frameworks like React internally manage:

- State
- Re-renders
- Data flow
- Component updates

Before using abstractions, I wanted to understand the mechanics underneath.
