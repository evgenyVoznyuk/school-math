<script setup lang="ts">
import { useRoute } from "vue-router";
import type { TTask } from '../tasks/types/simple';
import { getTaskByName } from '../tasks/simple';
import { getNumber } from '../tasks/generators'

const route = useRoute();
const { numbers } : TTask = getTaskByName(route.params.name as string);
const firstNumber = getNumber(numbers.first, 20, 99);
const secondMax = numbers.sign === '-' ? firstNumber - 1 :  100 - firstNumber;
const secondNumber = getNumber(numbers.second, 1, secondMax);
</script>

<template>
  <div class="wrapper">
    <h3>
      {{ firstNumber }} {{ numbers.sign }} {{ secondNumber }}
    </h3>
  </div>
</template>
