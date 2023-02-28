<template>
  <div
    v-if="result >= 0"
    class="points-result"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import type { TColor } from './types/colors';
import { computed } from "vue";
const props = defineProps<{
  result: number,
  color: TColor,
}>();
const text = computed<string>(() => {
  if (Number.isNaN(props.result)) return '';
  const points = props.result;
  const words = ['очко', 'очка', 'очков'];
  const index = (points % 100 > 4 && points % 100 < 20)
      ? 2
      : [2, 0, 1, 1, 1, 2][(points % 10 < 5) ? points % 10 : 5]
  return `У тебя ${points} ${words[index]}!`
});
</script>

<style scoped>
.points-result {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 700;
  color: v-bind(color);
  max-height: 0.75em;
  margin: 24px 0;
}
</style>