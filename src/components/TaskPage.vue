<template>
  <div class="wrapper">
    <PointsCounter
      ref="counter"
      :initial="10"
      :increment="10"
      :decrement="1"
      :interval="1000"
      :color="'#C502A8'"
      @stop="stop"
    />
    <QuestionText
      :text="question.text"
      :color="'#000'"
    />
    <AnswerInput
      ref="answerInput"
      v-model="input"
      :type="'number'"
      :color="'#000'"
      :width="150"
      :height="50"
      :is-correct="isCorrect"
      :correct-color="'#1CB08C'"
    />
    <ClickButton
      v-show="isCorrect"
      :text="'Ещё'"
      :color="'#000'"
      :bg-color="'#FFD900'"
      :width="150"
      :height="50"
      @click="next"
    />
    <ClickButton
      v-show="isCorrect"
      :text="'Всё'"
      :color="'#000'"
      :bg-color="'#2696E8'"
      :width="150"
      :height="50"
      @click="end"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getTaskByName } from '../tasks/simple';
import { getQuestion } from "../tasks/questions";
import PointsCounter from "./PointsCounter.vue";
import QuestionText from "./QuestionText.vue";
import AnswerInput from "./AnswerInput.vue";
import ClickButton from "./ClickButton.vue";

const route = useRoute();
const { given } = getTaskByName(route.params.name as string);

const question = reactive(getQuestion(given))

const counter = ref();
const answerInput = ref();
onMounted(() => {
  answerInput.value.focus();
  counter.value.start();
})

const input = ref();
const isCorrect = computed(() => input.value === question.answer);

const next = () => {
  Object.assign(question, getQuestion(given));
  answerInput.value.clear();
  answerInput.value.focus();
  counter.value.update();
}

const router = useRouter();
const end = () => {
  answerInput.value.clear();
  counter.value.stop();
}
// TODO bad idea
const stop = (result: number) => {
  router.push({ name: 'math', query: { result }});
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
</style>