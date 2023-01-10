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
      :text="questionText"
      :color="'#000'"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { TTask } from '../tasks/types/simple';
import { getTaskByName } from '../tasks/simple';
import { getNumber } from '../tasks/generators'
import PointsCounter from "./PointsCounter.vue";
import QuestionText from "./QuestionText.vue";

const route = useRoute();
const { numbers } : TTask = getTaskByName(route.params.name as string);
const firstNumber = getNumber(numbers.first, 20, 99);
const secondMax = numbers.sign === '-' ? firstNumber - 1 :  100 - firstNumber;
const secondNumber = getNumber(numbers.second, 1, secondMax);

const questionText = ref<string>()
questionText.value = `${firstNumber} ${numbers.sign} ${secondNumber} = ?`

const counter = ref()
onMounted(() => {
  counter.value?.start();
})
</script>
