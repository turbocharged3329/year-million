<template>
  <main>
    <m-million-progress-component />

    <section class="m-months-grid">
      <m-month-component
        v-for="(month, index) in Object.keys(dates2025)"
        :key="index"
        :dates="dates2025[month]"
        :month-title="month"
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
import { getDaysOfYear} from '@/utils/getYearDates.js'
import MMonthComponent from '@/components/MMonthComponent.vue'
import MModalComponent from '@/components/MModalComponent.vue'
import MMillionProgressComponent from '@/components/MMillionProgressComponent.vue'
import ApiService from '@/services/apiService.js'

const dates2025 = ref({})
const isModalOpened = ref(false)
const selectedDate = ref(null)

function showModalHandler(date) {
  selectedDate.value = date
  isModalOpened.value = true
}

async function getAllDatesData() {
  try {
    const data = await ApiService.getAllDatesData()
    const response = await data.json()

    if (response) {
      response.forEach(date => {
        const dateWithEarns = dates2025.value[Object.keys(dates2025.value)[date.month -  1]]
          .find(item => item.id === date.date)

        if (dateWithEarns) {
          dateWithEarns.incomes = date.income
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}

dates2025.value = {...getDaysOfYear(2025)}

getAllDatesData()
</script>

<style lang="scss" scoped>
.m-months-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 5%;
  justify-items: center;

  @media (max-width:900px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 1%;
  }
}
</style>
