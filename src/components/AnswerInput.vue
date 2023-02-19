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
import {computed, ref} from "vue";
import type { TColor } from './types/colors';
import type { TInput, TInputType } from './types/answer';

const props = defineProps<{
  type: TInputType,
  color: TColor,
  width: number,
  height: number,
  isCorrect: boolean,
  correctColor: TColor,
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
}>({ focus, clear })

const bgColor = computed(() => props.isCorrect ? props.correctColor : '#FFF')
</script>

<style scoped>
/*TODO css vars*/
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
  border: none;
  background-color: v-bind(bgColor);
  color: v-bind(color);
}
.answer-input:focus{
  outline: none;
  border: none;
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