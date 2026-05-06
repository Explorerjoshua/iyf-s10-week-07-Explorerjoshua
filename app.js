import { state, setState } from "./src/state.js";
import { render, bindUI } from "./src/ui.js";

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const clearBtn = document.getElementById("clear-completed");

function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };

    setState({
        todos: [...state.todos, newTodo]
    });

    render();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) return;

    addTodo(value);
    input.value = "";
});

clearBtn.addEventListener("click", () => {
    setState({
        todos: state.todos.filter(t => !t.completed)
    });

    render();
});

// init
render();
bindUI();
