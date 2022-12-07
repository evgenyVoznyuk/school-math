<template>
  <div class="wrapper">
    <router-link
      v-for="{ name } in tasks"
      :key="name"
      class="to-task-button"
      :to="{ name: 'task', params: { name }}"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { tasks } from "@/tasks/simple";
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
  margin: 6px;
  border-radius: 24px;
  background-color: #FFDE03;
  text-decoration: none;
  color: black;
}
</style>
