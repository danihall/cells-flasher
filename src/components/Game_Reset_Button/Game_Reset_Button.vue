<script setup>
import { gameStore } from "../../stores/game-store";
const { reset } = gameStore();
</script>

<template>
  <button class="button" @click="reset()">reset</button>
</template>

<style scoped>
@import "./styles.css";
</style>
