<template>
  <div class="m-million-progress m-pt-lg">
    <div class="m-flex m-column m-centered">
      <div class="m-million-progress-value">
        {{ EARN_TARGET_VALUE }}
        <p class="m-million-progress-value__filler" :style="progressStyle">
          {{ EARN_TARGET_VALUE }}
        </p>
      </div>

      <div class="m-million-progress-info">
        Earned: {{ earned }} / {{ progressPercents
        }}<span class="m-million-progress-info__percent-sign">%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ApiService from "@/services/apiService.js";

const EARN_TARGET_VALUE = 1000000;
const earned = ref(0);
const progressPercents = computed(() =>
  ((earned.value / EARN_TARGET_VALUE) * 100).toFixed(2)
);
const progressStyle = computed(
  () => `clip-path: inset(-10% ${100 - progressPercents.value}% 0% 0%);`
);

const getEarnedValue = async () => {
  try {
    const { data: value } = await ApiService.getEarnedTotal();

    if (value) {
      earned.value = Math.floor(value);
    }
  } catch (e) {
    console.log(e);
  }
};

getEarnedValue();
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

  @media (max-width: 900px) {
    font-size: 60px;
  }

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
