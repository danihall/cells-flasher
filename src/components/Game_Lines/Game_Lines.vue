<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { gameStore } from "../../stores/game-store";

const { cells_per_line } = storeToRefs(gameStore());
const linesCount = computed(() => (cells_per_line.value - 1) * 2);
</script>

<template>
  <div
    v-for="line in linesCount"
    :key="line"
    class="line"
    role="presentation"
  ></div>
</template>

<style scoped>
@import "./styles.css";
</style>
