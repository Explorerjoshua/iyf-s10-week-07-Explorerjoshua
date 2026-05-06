const PREFIX = "week7_";

export function save(key, data) {
    localStorage.setItem(PREFIX + key, JSON.stringify(data));
}

export function load(key, fallback = []) {
    const data = localStorage.getItem(PREFIX + key);
    return data ? JSON.parse(data) : fallback;
}
