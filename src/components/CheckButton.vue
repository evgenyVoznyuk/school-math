<template>
  <div
    v-if="show"
    class="check-button"
    :class="{'disabled': disabled}"
    @click="click"
  >
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import type { TColor } from './types/colors';
const props = defineProps<{
  show: boolean,
  disabled: boolean,
  text: string,
  width: number,
  height: number,
  bgColor: TColor,
  color: TColor,
}>()
const emits = defineEmits<{
  ( e: 'check' ): void,
}>();

const click = () => {
  if (props.disabled) return;
  emits('check');
}
</script>

<style>
.check-button {
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
.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>