import { defineStore } from "pinia";
import axios from "axios";
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  // computed fields
  getters: {
    favs() {
      // this refers to the state object
      return this.tasks.filter((t) => t.isFav);
    },
    favCount() {
      // accumulator (p): The running total or intermediate result.
      // currentValue (c): The current element being processed
      return this.tasks.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTasks() {
      this.loading = true;
      try {
        const res = await axios.get("http://localhost:3000/tasks");
        this.tasks = res.data;
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      } finally {
        this.loading = false;
      }
    },

    async addTask(task) {
      try {
        const taskWithStringId = { ...task, id: String(task.id) };
        this.tasks.push(taskWithStringId);
        await axios.post("http://localhost:3000/tasks", taskWithStringId);
      } catch (err) {
        console.error("Failed to add task:", err);
      }
    },

    async deleteTask(id) {
      try {
        this.tasks = this.tasks.filter((t) => t.id !== id);
        await axios.delete("http://localhost:3000/tasks/" + String(id));
      } catch (err) {
        console.error("Failed to delete task:", err);
      }
    },

    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (!task) return;
      task.isFav = !task.isFav;

      try {
        await axios.patch("http://localhost:3000/tasks/" + String(id), {
          isFav: task.isFav,
        });
      } catch (err) {
        console.error("Failed to toggle favorite:", err);
      }
    },
  },
});
