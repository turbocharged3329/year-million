<template>
  <div>
    <h3 class="m-month-title">{{monthTitle}}</h3>

    <div class="m-month">
      <span class="m-month__weekday m-flex m-centered" v-for="(day, index) in DAYS_OF_WEEK" :key="index">{{day}}</span>

      <template v-for="(date, index) in dates" :key="index">
        <m-date-component :date="date" @show-modal="emit('show-modal')"/>
      </template>
    </div>
  </div>
</template>

<script setup>
import MDateComponent from '@/components/MDateComponent.vue'

const DAYS_OF_WEEK = ['Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St', 'Sn']

defineProps({
  monthTitle: String,
  dates: Array
})

const emit = defineEmits(['show-modal'])
</script>

<style lang="scss" scoped>
.m-month-title {
  color: $m-purple;
}

.m-month {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 40px);
  gap: $m-spacer-sm;

  &__weekday {
    font-weight: 700;
    font-size: 15px;
  }
}
</style>
