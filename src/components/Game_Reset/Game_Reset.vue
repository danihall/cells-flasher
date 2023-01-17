<script setup>
import Game_Button from "../Game_Button/Game_Button.vue";
import { gameStore } from "../../stores/game-store";
const { reset } = gameStore();
</script>

<template>
  <Game_Button @on-click="reset()" text="reset" />
</template>
