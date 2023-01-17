<script setup>
import { storeToRefs } from "pinia";
import { gameStore, MIN_CELLS_PER_LINE } from "../../stores/game-store";
import { ref, watch } from "vue";
import { restartAnimation } from "../../helpers/restartAnimation";

const store = gameStore();
const { round_is_active, cells_per_line, cells_filled, result } =
  storeToRefs(store);
const circle = ref();
const styles = ref();
const player_lose = ref(false);

const handler = {
  handleEvent() {
    round_is_active.value = false;
    player_lose.value = true;
  },
};

watch(
  [round_is_active, () => result.value.winner, cells_filled],
  (
    [new_round_is_active, winner_count, new_cells_filled],
    [, old_cells_filled]
  ) => {
    if (
      !new_round_is_active ||
      (winner_count > 0 && cells_per_line.value === MIN_CELLS_PER_LINE)
    ) {
      styles.value = {
        visibility: "hidden",
      };
      return;
    }

    if (new_round_is_active || new_cells_filled !== old_cells_filled) {
      styles.value = {
        visibility: "visible",
        "--countdown-duration": `${cells_per_line.value}s`,
      };

      player_lose.value = false;
      circle.value.addEventListener("animationend", handler);
      restartAnimation(circle.value);
    }
  }
);
</script>
<template>
  <div v-if="player_lose" class="player-lose">
    <p>You're out of time! Hit the Reset button.</p>
    <p>(You can also Reset while the game is playing)</p>
  </div>
  <svg
    width="60px"
    height="60px"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      ref="circle"
      :style="styles"
      cx="30"
      cy="30"
      r="28"
      pathLength="1"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="4px"
      stroke-dasharray="1"
      stroke-dashoffset="1"
      fill="none"
    />
  </svg>
</template>
<style scoped>
@import "./styles.css";
</style>
