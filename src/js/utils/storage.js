export default {
  load(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  },

  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};
