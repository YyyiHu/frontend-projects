<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i
        class="material-icons"
        @click="taskStore.toggleFav(task.id)"
        :class="{ active: task.isFav }"
        >favorite</i
      >
      <i class="material-icons delete" @click="taskStore.deleteTask(task.id)"
        >delete</i
      >
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/TaskStore";

export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
