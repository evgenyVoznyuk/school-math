<template>
  <div class="wrapper">
    <PointsResult
      :result="Number($route.query.result)"
      :color="'#7B1FA2'"
    />
    <LinkButton
      v-for="{ name } in tasks"
      :key="name"
      route-name="task"
      :param-name="name"
      :width="100"
      :height="100"
      :bg-color="'#FFCDD2'"
      color="#7B1FA2"
    />
  </div>
</template>

<script setup lang="ts">
import { tasks } from '../tasks/simple';
import LinkButton from "../components/LinkButton.vue";
import PointsResult from "../components/PointsResult.vue";
</script>

<style scoped>
.wrapper {
  max-width: 300px;
  display: flex;
  flex: 1 1 50%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
