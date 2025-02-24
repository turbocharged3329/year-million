<template>
  <router-view />
</template>

<script setup>
</script>

<style lang="scss">
html {
  font-family: 'NewLed', sans-serif;
}

body {
  //background-color: #FFCF40;
  background: url('/img/background.jpg');
  background-size: cover;
  padding-bottom: 50px;
}

div, section {
  box-sizing: border-box;
}

button {
  cursor: pointer;
  font-family: 'NewLed', sans-serif;
}

input {
  font-family: 'NewLed', sans-serif;
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

.m-centered {
  justify-content: center;
  align-items: center;
}

::-webkit-scrollbar {
  width: 10px;               /* ширина scrollbar */
}
::-webkit-scrollbar-track {
  background: transparent;        /* цвет дорожки */
}
::-webkit-scrollbar-thumb {
  background-color: rgba(gray, 0.5);    /* цвет плашки */
  border-radius: 20px;       /* закругления плашки */
}
</style>
