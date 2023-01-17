<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <button class="button" @click="$emit('onClick')">{{ text }}</button>
</template>

<style scoped>
@import "./styles.css";
</style>
