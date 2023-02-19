<template>
  <input
    ref="input"
    v-model.trim="answer"
    class="answer-input"
    :type="type"
    @input="emits('input', answer)"
  >
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { TColor } from './types/colors';
import type { TInput, TInputType } from './types/answer';

defineProps<{
  type: TInputType,
  color: TColor,
  width: number,
  height: number,
}>();

const emits = defineEmits<{
  ( e: 'input', value: TInput ): void,
}>();

const input = ref();
const focus = () => input.value.focus();

const answer = ref<TInput>()
const clear = () => answer.value = '';

defineExpose<{
  focus: () => void,
  clear: () => void,
}>({
  focus,
  clear,
})
</script>

<style scoped>
.answer-input {
  width: calc(v-bind(width + 'px') - 20px - 4px);
  height:  calc(v-bind(height + 'px') - 10px - 4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 24px;
  color: v-bind(color);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>