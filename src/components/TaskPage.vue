<template>
  <div class="wrapper">
    <PointsCounter
      ref="counter"
      :initial="10"
      :increment="10"
      :decrement="1"
      :interval="1000"
      :color="'#808080'"
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
      :width="120"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getTaskByName } from '../tasks/simple';
import PointsCounter from "./PointsCounter.vue";
import QuestionText from "./QuestionText.vue";
import AnswerInput from "./AnswerInput.vue";
import { getQuestion } from "../tasks/questions";

const route = useRoute();
const { given } = getTaskByName(route.params.name as string);
const { text: questionText, answer: answerValue } = getQuestion(given)
console.log(answerValue)

const question = ref<string>()
question.value = questionText;

const counter = ref();
const answerInput = ref();
onMounted(() => {
  counter.value.start();
  answerInput.value.focus();
})

const answer = ref();
</script>
