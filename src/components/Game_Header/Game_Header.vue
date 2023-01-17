<script setup>
import Game_Button from "../Game_Button/Game_Button.vue";
import { gameStore } from "../../stores/game-store";
const store = gameStore();
const { startGame } = store;
</script>

<template>
  <header>
    <h1>Tic-tac-toe variable</h1>
    <p>
      You can modify the number of cells per row. Rather than winning, try to
      create beautiful flashing shapes.
    </p>
    <p>Except for a 3 by 3 grid, there can be multiple winners for a game.</p>
    <div v-if="!store.game_started" class="button-container">
      <Game_Button @on-click.once="startGame" text="start" />
    </div>
  </header>
</template>

<style scoped>
@import "./styles.css";
</style>
