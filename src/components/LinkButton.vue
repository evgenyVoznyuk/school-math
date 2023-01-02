<template>
  <router-link
    class="link-button"
    :to="{ name: routeName, params: { name: props.paramName }}"
  >
    {{ props.paramName }}
  </router-link>
</template>

<script setup lang="ts">
const props = defineProps<{
  routeName: string,
  paramName: string,
  width: number,
  height: number,
  bgColor: string,
  color: string,
}>()
</script>

<style>
.link-button {
  width: v-bind(width + 'px');
  height: v-bind(height + 'px');
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px;
  border-radius: 24px;
  background-color: v-bind(bgColor);
  text-decoration: none;
  color: v-bind(color);
}
</style>