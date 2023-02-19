<template>
  <div class="wrapper">
    <link-button
      v-for="{ name } in tasks"
      :key="name"
      route-name="task"
      :param-name="name"
      :width="100"
      :height="100"
      :bg-color="'#FFD900'"
      color="#000000"
    />
  </div>
</template>

<script setup lang="ts">
import { tasks } from '../tasks/simple';
import LinkButton from "../components/LinkButton.vue";
</script>

<style scoped>
.wrapper {
  max-width: 300px;
  display: flex;
  flex: 1 1 50%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
