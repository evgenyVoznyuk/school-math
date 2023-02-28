<template>
  <div class="wrapper">
    <PointsResult
      :result="+$route.query.result"
      :color="'#61059f'"
    />
    <LinkButton
      v-for="{ name } in tasks"
      :key="name"
      route-name="task"
      :param-name="name"
      :width="100"
      :height="100"
      :bg-color="'#73EF36'"
      color="#000000"
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
}
</style>
