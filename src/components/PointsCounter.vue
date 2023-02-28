<template>
  <div class="pointer-counter">
    {{ points }}
  </div>
</template>

<script setup lang="ts">
import type { TColor } from './types/colors';
import { ref } from "vue";
const props = defineProps<{
  initial: number,
  increment: number,
  decrement: number,
  interval: number,
  color: TColor,
}>();

const emits = defineEmits<{
  ( e: 'stop', value: number ): void,
}>();

let timer: ReturnType<typeof setInterval> | undefined;
let points = ref<number>(0);

const init = () => { points.value = props.initial };
const add = () => { points.value += props.increment };
const subtract = () => { points.value -= props.decrement };
const reset = () => { points.value = 0 };

const runTimer = () => {
  timer = setInterval(() => {
    if (points.value === 0) stopTimer();
    else subtract();
  }, props.interval)
}

const stopTimer = () => {
  clearInterval(timer)
  timer = undefined;
}

const start = () => {
  if (timer) stopTimer();
  init();
  runTimer();
}

const update = () => {
  add();
  if(!timer) runTimer();
}

const stop = () => {
  if (timer) stopTimer();
  //TODO need store
  emits('stop', points.value)
  reset();
}

defineExpose<{
  start: () => void,
  update: () => void,
  stop: () => void,
}>({
  start, update, stop,
})
</script>

<style scoped>
.pointer-counter {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
  color: v-bind(color);
}
</style>