<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <input
      type="text"
      placeholder="I need to..."
      v-model="newTask"
      class="task-input"
    />
    <button class="add-button">Add</button>
  </form>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";

export default {
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 10000),
        });
        newTask.value = "";
      }
    };
    return { handleSubmit, newTask };
  },
};
</script>

<style scoped>
.task-form {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.task-input:focus {
  outline: none;
  border-color: #4dabf7;
}

.add-button {
  padding: 12px 24px;
  background: #4dabf7;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-button:hover {
  background: #339af0;
}

.add-button:active {
  transform: scale(0.98);
}
</style>
