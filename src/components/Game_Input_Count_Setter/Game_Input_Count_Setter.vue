<script setup>
import {
  gameStore,
  MIN_CELLS_PER_LINE,
  MAX_CELLS_PER_LINE,
} from "../../stores/game-store";

const { changeCellsPerLine } = gameStore();
const onChange = (event) => void changeCellsPerLine(event.target.value);
</script>

<template>
  <input
    type="range"
    :min="MIN_CELLS_PER_LINE"
    :max="MAX_CELLS_PER_LINE"
    value="3"
    id="count_setter"
    name="count_setter"
    @change="onChange"
  />
  <label for="count_setter"></label>
</template>

<style scoped>
@import "./styles.css";
</style>
