<template>
  <div class="wrapper">
    <PointsCounter
      ref="counter"
      :initial="10"
      :increment="10"
      :decrement="1"
      :interval="1000"
      :color="'#93037D'"
    />
    <QuestionText
      :text="question"
      :color="'#000'"
    />
    <AnswerInput
      ref="answerInput"
      v-model="answer"
      :type="'number'"
      :color="'#000'"
      :width="150"
      :height="50"
      :is-correct="isCorrect"
      :correct-color="'#1CB08C'"
      @input="input"
    />
    <CheckButton
      :show="checkButton"
      :disabled="!hasAnswer"
      :text="'Проверить'"
      :color="'#000'"
      :bg-color="'#ADD8E6'"
      :width="150"
      :height="50"
      @check="check"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getTaskByName } from '../tasks/simple';
import { getQuestion } from "../tasks/questions";
import PointsCounter from "./PointsCounter.vue";
import QuestionText from "./QuestionText.vue";
import AnswerInput from "./AnswerInput.vue";
import CheckButton from "./CheckButton.vue";

const route = useRoute();
const { given } = getTaskByName(route.params.name as string);
const { text: questionText, answer: correctAnswer } = getQuestion(given)
console.log(correctAnswer)

const question = ref<string>()
question.value = questionText;

const counter = ref();
const answerInput = ref();
onMounted(() => {
  counter.value.start();
  answerInput.value.focus();
})

const answer = ref();
const hasAnswer = computed(() => !!answer.value || answer.value === 0);

const checkButton = ref(true);
const resultText = ref(false);
const isCorrect = computed(() => answer.value === correctAnswer);
const check = () => {
  if (!hasAnswer.value) return;
  checkButton.value = false;
  resultText.value = true;
}
const input = () => {
  checkButton.value = true;
  resultText.value = false;
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