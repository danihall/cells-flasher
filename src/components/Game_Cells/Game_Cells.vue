<script setup>
import { storeToRefs } from "pinia";
import { gameStore } from "../../stores/game-store";
import { computed } from "vue";

const store = gameStore();
const { cells_per_line, cells, cells_filled, result, round_is_active } =
  storeToRefs(store);
const { update } = store;

const css_cells_per_line = computed(() => ({
  "--cells-per-line": cells_per_line.value,
}));

const can_click = computed(() => {
  if (
    cells_filled.value === Math.pow(cells_per_line.value, 2) ||
    !round_is_active.value
  ) {
    return null;
  }
  return "click";
});

const moves = computed(() => result.value.coordinates.flat());
</script>

<template>
  <div class="grid" :style="css_cells_per_line">
    <div
      v-for="(cell, index) in cells"
      :key="index"
      @[can_click]="update(index)"
      class="cell"
      :class="{
        'is--winner-move': moves.includes(index),
        [`player-${cell?.toLowerCase()}`]: cell,
      }"
    >
      {{ cell }}
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
