<script setup>
import { storeToRefs } from "pinia";
import { gameStore, MIN_CELLS_PER_LINE } from "../../stores/game-store";
import { computed } from "vue";

const store = gameStore();
const { cells_per_line, cells, all_cells_filled, result } = storeToRefs(store);
const { update } = store;

const custom_css_prop = computed(() => ({
  "--cells-per-row": cells_per_line.value,
}));

const can_click = computed(() => {
  if (
    all_cells_filled.value ||
    (result.value.length && cells_per_line.value === MIN_CELLS_PER_LINE)
  ) {
    console.log(result.value.length);
    return null;
  }
  return "click";
});

const moves = computed(() => result.value.flat());
</script>

<template>
  <div class="grid" :style="custom_css_prop">
    <div
      v-for="(cell, index) in cells"
      :key="index"
      @[can_click]="update(index)"
      class="cell"
      :class="{ 'is--winner-move': moves.includes(index) }"
    >
      {{ cell }}
    </div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
