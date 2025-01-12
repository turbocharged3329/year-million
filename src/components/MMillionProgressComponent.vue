<template>
<div class="m-million-progress">
  <div class="m-flex m-column m-centered">
    <div class="m-million-progress-value">
      1000000
      <p class="m-million-progress-value__filler" :style="progressStyle">1000000</p>
    </div>

    <div class="m-million-progress-info">Earned: 1000 / {{progressPercents}}<span class="m-million-progress-info__percent-sign">%</span></div>
  </div>
</div>
</template>

<script setup>
import { ref} from 'vue'

const progressValue = ref(15);
const progressPercents = progressValue.value / 100
const progressStyle = `clip-path: inset(0% ${100 - progressValue.value}% 0% 0%);`
</script>

<style scoped lang="scss">
.m-million-progress {
  width: 100%;
  text-align: center;
  margin-bottom: calc($m-spacer-lg * 2);
}

.m-million-progress-value {
  font-size: 100px;
  margin: 0;
  color: $m-purple;
  position: relative;
  width: fit-content;
  z-index: 1;

  &__filler {
    margin: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
    color: #47ffff;
    z-index: 2;
  }
}

.m-million-progress-info {
  font-size: 20px;

  &__percent-sign {
    font-size: 15px;
  }
}
</style>
