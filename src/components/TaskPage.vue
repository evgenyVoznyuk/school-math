<script setup lang="ts">
import { useRoute } from "vue-router";
import type {TTaskNumbers} from "@/types/tasks";
import { getTaskByName } from "@/tasks/simple";
import { getNumber } from '@/tasks/generator'

const route = useRoute();
const { numbers } : TTaskNumbers = getTaskByName(route.params.name);
const firstNumber = getNumber(numbers.first, 20, 99);
const secondMax = numbers.sign === '-' ? firstNumber :  100 - firstNumber;
const secondNumber = getNumber(numbers.second, 1, secondMax);
</script>

<template>
  <div class="wrapper">
    <h3>
      {{ firstNumber }} {{ numbers.sign }} {{ secondNumber }}
    </h3>
  </div>
</template>
