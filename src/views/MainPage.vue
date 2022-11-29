<template>
  <div class="wrapper">
    <router-link
      v-for="task in tasks"
      :key="task.name"
      class="to-task-button"
      :to="{name: 'task', params: { name: task.routeName}}"
    >
      {{ task.routeName }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {tasks} from "@/utils/tasks";
defineProps<{
  msg: string
}>()
</script>

<style>
.wrapper {
  max-width: 300px;
  display: flex;
  flex: 1 1 50%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.to-task-button {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 6px;
  border-radius: 24px;
  text-decoration: none;
  color: black;
}
</style>
