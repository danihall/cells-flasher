<script setup>
import { ref } from "vue";
import {
  gameStore,
  MIN_CELLS_PER_LINE,
  MAX_CELLS_PER_LINE,
} from "../../stores/game-store";

const { changeCellsPerLine } = gameStore();
const value = ref(MIN_CELLS_PER_LINE);
const onChange = (event) => void changeCellsPerLine(event.target.value);
</script>

<template>
  <input
    type="range"
    :min="MIN_CELLS_PER_LINE"
    :max="MAX_CELLS_PER_LINE"
    id="count_setter"
    name="count_setter"
    v-model="value"
    @change="onChange"
  />
  <label for="count_setter">
    <span>{{ value }}</span>
    <span>cells per row</span>
  </label>
</template>

<style scoped>
@import "./styles.css";
</style>
