<template>
  <router-view />
</template>

<script setup>
import { UserService } from "@/services/user.js";

UserService.authRoutine();
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}

html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "NewLed", sans-serif;
  font-size: 32px;
}

body {
  background: url("/img/background.jpg");
  background-size: cover;
  margin: 0 !important;
  width: 100%;
  height: 100%;
}

div,
section {
  box-sizing: border-box;
}

button {
  cursor: pointer;
  font-family: "NewLed", sans-serif;
  border: none;
  border-radius: $m-border-radius;
}

input {
  font-family: "NewLed", sans-serif;
  padding: $m-spacer-xs $m-spacer-sm;
}

.m-flex {
  display: flex;
}

.m-row {
  flex-direction: row;
}

.m-column {
  flex-direction: column;
}

.m-grow-1 {
  flex-grow: 1;
}

.m-centered {
  justify-content: center;
  align-items: center;
}

.m-text-center {
  text-align: center;
}

::-webkit-scrollbar {
  width: 10px; /* ширина scrollbar */
}
::-webkit-scrollbar-track {
  background: transparent; /* цвет дорожки */
}
::-webkit-scrollbar-thumb {
  background-color: rgba(gray, 0.5); /* цвет плашки */
  border-radius: 20px; /* закругления плашки */
}
</style>
