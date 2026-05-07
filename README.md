# Week 7: JavaScript Best Practices - Persistent To-Do App

## Author

- **Name:** Joshua Wandera Oniala
- **GitHub:** [@Explorerjoshua](https://github.com/Explorerjoshua)
- **Date:** May 7, 2026

---

## Project Description

This project is a modular and persistent To-Do List application developed as part of Week 7 of the IYF Weekend Academy Season 10 program.

The application demonstrates JavaScript best practices including:

- Local storage persistence
- State management
- Modular code organization
- DOM manipulation
- Event handling
- Clean and maintainable code structure

Todos remain saved even after refreshing the browser, and users can filter, complete, and remove tasks efficiently.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- LocalStorage API

---

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Filter todos:
  - All
  - Active
  - Completed
- Persistent data using localStorage
- Clear completed tasks
- Modular JavaScript architecture
- Clean and responsive UI

---

## Project Structure

```bash
iyf-s10-week-07-Explorerjoshua/
│
├── index.html
├── styles.css
├── app.js
│
└── src/
    ├── storage.js
    ├── state.js
    ├── ui.js
    └── utils.js
````

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/Explorerjoshua/iyf-s10-week-07-Explorerjoshua.git
```

2. Open the project folder:

```bash
cd iyf-s10-week-07-Explorerjoshua
```

3. Open `index.html` in your browser.

---

## Lessons Learned

During this project, I learned:

* How to persist application data using localStorage
* The importance of centralized state management
* How to organize JavaScript into reusable modules
* How to separate UI logic from business logic
* Best practices for writing maintainable JavaScript code
* How to use ES6 module imports and exports

---

## Challenges Faced

### 1. Managing Persistent State

Initially, todos disappeared after refreshing the page. This was solved by implementing localStorage save/load functions.

### 2. Organizing Code into Modules

Separating the application into multiple files required understanding imports and exports correctly.

### 3. UI Re-rendering

Keeping the interface synchronized with application state required re-rendering the UI after every update.

---

## Screenshots (Optional)

Add screenshots here if available.

```md
![Todo App Screenshot](assets/screenshot.png)
```

---

## Future Improvements

* Dark mode theme persistence
* Edit existing todos
* Drag-and-drop task sorting
* Due dates and priorities
* Mobile-first responsive improvements

---

## Live Demo

Not deployed yet.

---

## License

This project is for educational purposes under the IYF Weekend Academy Season 10 program.

```
```
