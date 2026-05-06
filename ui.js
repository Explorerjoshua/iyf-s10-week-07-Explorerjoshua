import { state, setState } from "./state.js";

const list = document.getElementById("todo-list");

export function render() {
    let todos = state.todos;

    if (state.filter === "active") {
        todos = todos.filter(t => !t.completed);
    }

    if (state.filter === "completed") {
        todos = todos.filter(t => t.completed);
    }

    list.innerHTML = todos.map(todo => `
        <li>
            <span class="${todo.completed ? "completed" : ""}"
                  data-id="${todo.id}">
                ${todo.text}
            </span>
            <button data-delete="${todo.id}">X</button>
        </li>
    `).join("");
}

export function bindUI() {
    const list = document.getElementById("todo-list");

    list.addEventListener("click", (e) => {
        const id = Number(e.target.dataset.id);
        const deleteId = Number(e.target.dataset.delete);

        if (id) toggleTodo(id);
        if (deleteId) deleteTodo(deleteId);
    });

    document.querySelectorAll("[data-filter]").forEach(btn => {
        btn.addEventListener("click", () => {
            state.filter = btn.dataset.filter;
            render();
        });
    });
}

function toggleTodo(id) {
    const updated = state.todos.map(todo =>
        todo.id === id
            ? { ...todo, completed: !todo.completed }
            : todo
    );

    setState({ todos: updated });
    render();
}

function deleteTodo(id) {
    const updated = state.todos.filter(todo => todo.id !== id);

    setState({ todos: updated });
    render();
}
