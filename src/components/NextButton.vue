<template>
  <div
    v-if="show"
    class="next-button"
    @click="emits('next')"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import type { TColor } from './types/colors';
defineProps<{
  show: boolean,
  text: string,
  width: number,
  height: number,
  bgColor: TColor,
  color: TColor,
}>()
const emits = defineEmits<{
  ( e: 'next' ): void,
}>();
</script>

<style scoped>
.next-button {
  /*TODO css vars*/
  width: calc(v-bind(width + 'px') - 24px);
  height: calc(v-bind(height + 'px') - 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: v-bind(bgColor);
  text-decoration: none;
  color: v-bind(color);
  font-size: 0.8em;
  padding: 4px 12px;
  cursor: pointer;
  line-height: 0;
}
</style>