<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.png" alt="pinia logo" class="logo" />
      <h1>Task Manager</h1>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">
        All Tasks
      </button>
      <button @click="filter = 'favs'" :class="{ active: filter === 'favs' }">
        Fav Tasks
      </button>
    </nav>

    <div v-if="loading" class="loading">Loading tasks...</div>

    <div class="task-list" v-if="filter === 'all'">
      <p class="task-count">You have {{ totalCount }} tasks left to do</p>
      <div class="tasks">
        <TaskDetails v-for="task in tasks" :key="task.id" :task="task" />
      </div>
    </div>

    <div class="task-list" v-else-if="filter === 'favs'">
      <p class="task-count">You have {{ favCount }} favs left to do</p>
      <div class="tasks">
        <TaskDetails v-for="task in favs" :key="task.id" :task="task" />
      </div>
    </div>

    <button class="reset-btn" @click="taskStore.$reset">Reset the store</button>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TaskForm from "./components/TaskForm.vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";
import "./assets/main.css";
import { storeToRefs } from "pinia";

const filter = ref("all");
const taskStore = useTaskStore();
const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore);

onMounted(() => {
  taskStore.getTasks();
});
</script>

<style>
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.logo {
  height: 50px;
  width: auto;
}

header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

header h1 {
  margin: 0;
  color: #2c3e50;
  font-size: 2.5rem;
}

.new-task-form {
  margin-bottom: 2rem;
}

.filter {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.filter button {
  flex: 1 1 120px;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #495057;
  background-color: #e9ecef;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.filter button:hover {
  background-color: #dee2e6;
}

.filter button.active {
  background-color: #4dabf7;
  color: #ffffff;
}

.task-list {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-count {
  color: #6c757d;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reset-btn {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #fa5252;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.reset-btn:hover {
  background-color: #e03131;
}

.reset-btn:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  main {
    padding: 1rem;
  }

  header h1 {
    font-size: 2rem;
  }

  .filter button {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  main {
    padding: 0.8rem;
  }

  header {
    justify-content: center;
    text-align: center;
  }

  header h1 {
    font-size: 1.8rem;
  }

  .filter {
    flex-direction: column;
  }

  .filter button {
    width: 100%;
  }

  .task-list {
    padding: 1rem;
  }
}
</style>
