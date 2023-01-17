<script setup>
import { ref, computed, onMounted, onUpdated, watch } from "vue";
import { storeToRefs } from "pinia";
import { gameStore } from "../../stores/game-store";
import { restartAnimation } from "../../helpers/restartAnimation";

const store = gameStore();
const { cells_per_line, round_is_active } = storeToRefs(store);
const lines_count = computed(() => (cells_per_line.value - 1) * 2);
const lines_vertical = ref();
const lines_horizontal = ref();

round_is_active.value = false;

const handler = {
  handleEvent() {
    round_is_active.value = true;
  },
};

const animateLines = () => {
  const newLines = [...lines_vertical.value, ...lines_horizontal.value];

  newLines.forEach((line, index) => {
    line.removeEventListener("animationend", handler);
    if (index === newLines.length - 1) {
      line.addEventListener("animationend", handler);
    }
    line.style.cssText = `animation-delay: ${index * 0.05}s`;
    restartAnimation(line);
  });
};

watch(cells_per_line, () => void (round_is_active.value = false));
onMounted(animateLines);
onUpdated(animateLines);
</script>

<template>
  <div class="lines are--vertical">
    <div
      v-for="line in lines_count / 2"
      :key="line"
      ref="lines_vertical"
      role="presentation"
    ></div>
  </div>
  <div class="lines are--horizontal">
    <div
      v-for="line in lines_count / 2"
      :key="line"
      ref="lines_horizontal"
      role="presentation"
    ></div>
  </div>
</template>

<style scoped>
@import "./styles.css";
</style>
