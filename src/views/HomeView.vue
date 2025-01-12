<template>
  <main>
    <m-million-progress-component />

    <section class="m-months-grid">
      <m-month-component
        v-for="(month, index) in dates2025"
        :key="index" :dates="month"
        :month-title="month[0].monthTitle"
        @show-modal="showModalHandler"
      />
    </section>

    <Teleport to="body">
      <m-modal-component v-model="isModalOpened" :data="selectedDate"/>
    </Teleport>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { dates2025 } from '@/constants/dates.js'
import MMonthComponent from '@/components/MMonthComponent.vue'
import MModalComponent from '@/components/MModalComponent.vue'
import MMillionProgressComponent from '@/components/MMillionProgressComponent.vue'

const isModalOpened = ref(false)
const selectedDate = ref(null)

function showModalHandler() {
  isModalOpened.value = true
}
</script>

<style lang="scss" scoped>
.m-months-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 5%;
  justify-items: center;
}
</style>
