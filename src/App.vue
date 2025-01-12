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
  background-color: #FFCF40;
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
</style>
