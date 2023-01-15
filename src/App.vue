<script setup>
import Game_Cells from "./components/Game_Cells/Game_Cells.vue";
import Game_Lines from "./components/Game_Lines/Game_Lines.vue";
import Game_Input_Count_Setter from "./components/Game_Input_Count_Setter/Game_Input_Count_Setter.vue";
import Game_Reset_Button from "./components/Game_Reset_Button/Game_Reset_Button.vue";
</script>

<template>
  <header>Tic-tac-toe</header>

  <main>
    <Game_Cells />

    <div class="footer">
      <Game_Input_Count_Setter />
      <Game_Reset_Button />
    </div>
  </main>
</template>

<style scoped>
@import "./game.css";
</style>
