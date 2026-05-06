import { load, save } from "./storage.js";

const STORAGE_KEY = "todos";

export const state = {
    todos: load(STORAGE_KEY, []),
    filter: "all"
};

export function setState(updates) {
    Object.assign(state, updates);
    save(STORAGE_KEY, state.todos);
}
