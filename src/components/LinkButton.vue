<template>
  <router-link
    class="link-button"
    :to="{ name: routeName, params: { name: paramName }}"
  >
    {{ paramName }}
  </router-link>
</template>

<script setup lang="ts">
import type { TColor } from './types/colors';
defineProps<{
  routeName: string,
  paramName: string,
  width: number,
  height: number,
  bgColor: TColor,
  color: TColor,
}>()
</script>

<style scoped>
.link-button {
  width: v-bind(width + 'px');
  height: v-bind(height + 'px');
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;
  border-radius: 24px;
  background-color: v-bind(bgColor);
  text-decoration: none;
  color: v-bind(color);
}
</style>