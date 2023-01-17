<script setup>
import Game_Header from "./components/Game_Header/Game_Header.vue";
import Game_Cells from "./components/Game_Cells/Game_Cells.vue";
import Game_Lines from "./components/Game_Lines/Game_Lines.vue";
import Game_Timer from "./components/Game_Timer/Game_Timer.vue";
import Game_Input_Count_Setter from "./components/Game_Input_Count_Setter/Game_Input_Count_Setter.vue";
import Game_Reset from "./components/Game_Reset/Game_Reset.vue";
import { gameStore } from "./stores/game-store";
const store = gameStore();
</script>

<template>
  <Game_Header />

  <template v-if="store.game_started">
    <main>
      <Game_Cells>
        <Game_Lines />
      </Game_Cells>
    </main>

    <footer>
      <Game_Input_Count_Setter />
      <Game_Reset />
    </footer>

    <Game_Timer />
  </template>
</template>

<style scoped>
@import "./game.css";
</style>
