<template>
  <div class="question-text">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import type { TColor } from './types/colors';
defineProps<{
  text: string,
  color: TColor,
}>();
</script>

<style scoped>
.question-text {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 700;
  color: v-bind(color);
  max-height: 0.75em;
}
</style>