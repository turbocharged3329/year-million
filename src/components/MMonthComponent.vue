<template>
  <div class="m-mb-lg">
    <h3 class="m-month__title">{{ monthTitle }}</h3>

    <div class="m-month__content">
      <span
        class="m-month__weekday m-flex m-centered"
        v-for="(day, index) in DAYS_OF_WEEK"
        :key="index"
        >{{ day }}</span
      >

      <template v-for="n in getFirstDayOffset" :key="`empty-${n}`">
        <div class="m-date-empty"></div>
      </template>

      <template v-for="(date, index) in dates" :key="index">
        <m-date-component :date="date" @show-modal="emit('show-modal', date)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import MDateComponent from "@/components/MDateComponent.vue";
import { computed } from "vue";

const DAYS_OF_WEEK = ["Mn", "Tu", "Wd", "Th", "Fr", "St", "Sn"];

const props = defineProps({
  monthTitle: String,
  dates: Array,
});

const emit = defineEmits(["show-modal"]);

// Возвращает количество пустых ячеек, необходимых перед первым днем месяца,
// чтобы выровнять дни календаря с соответствующими днями недели (0-6, где 0 - понедельник)
const getFirstDayOffset = computed(() => {
  if (!props.dates?.length) return 0;
  
  const firstDate = new Date(props.dates[0].year, props.dates[0].month - 1, props.dates[0].day);
  return (firstDate.getDay() || 7) - 1;
});
</script>

<style lang="scss" scoped>
.m-month {
  &__title {
    color: $m-purple;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 40px);
    gap: $m-spacer-sm;
  }

  &__weekday {
    font-weight: 700;
    font-size: 15px;

    @media (max-width: 900px) {
      font-size: 12px;
    }
  }
}

.m-date-empty {
  width: 100%;
  height: 100%;
}
</style>
