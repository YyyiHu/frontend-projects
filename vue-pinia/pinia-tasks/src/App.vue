<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.png" alt="pinia logo" class="logo" />
      <h1>Task Manager</h1>
    </header>

    <!-- new task form -->
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

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p class="task-count">
        You have {{ taskStore.totalCount }} tasks left to do
      </p>
      <div class="tasks">
        <TaskDetails
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task"
        />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p class="task-count">
        You have {{ taskStore.favCount }} favs left to do
      </p>
      <div class="tasks">
        <TaskDetails
          v-for="task in taskStore.favs"
          :key="task.id"
          :task="task"
        />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { useTaskStore } from "./stores/TaskStore";
import "./assets/main.css";

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();

    const filter = ref("all");

    return { taskStore, filter };
  },
};
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

.filter {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.filter button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  background: #e9ecef;
  color: #495057;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 120px;
}

.filter button:hover {
  background: #dee2e6;
}

.filter button.active {
  background: #4dabf7;
  color: white;
}

.task-list {
  background: white;
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

.new-task-form {
  margin-bottom: 2rem;
}

/* Responsive styles */
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
