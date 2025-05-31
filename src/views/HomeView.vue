<template>
  <main class="m-flex m-column m-pb-lg">
    <m-million-progress-component />

    <section class="m-months-grid m-grow-1">
      <m-month-component
        v-for="(month, index) in Object.keys(dates2025)"
        :key="index"
        :dates="dates2025[month]"
        :month-title="month"
        @show-modal="showModalHandler"
      />
    </section>

    <Teleport to="body">
      <m-modal-component v-model="isModalOpened" :data="selectedDate" />
    </Teleport>

    <m-menu-component />
  </main>
</template>

<script setup>
import { ref } from "vue";
import { getDaysOfYear } from "@/utils/getYearDates.js";
import MMonthComponent from "@/components/MMonthComponent.vue";
import MModalComponent from "@/components/MModalComponent.vue";
import MMillionProgressComponent from "@/components/MMillionProgressComponent.vue";
import MMenuComponent from "@/components/MMenuComponent.vue";
import ApiService from "@/services/apiService.js";
import { UserService } from "@/services/user.js";
import { useRouter } from "vue-router";

const router = useRouter();

const dates2025 = ref({});
const isModalOpened = ref(false);
const selectedDate = ref(null);

function showModalHandler(date) {
  selectedDate.value = date;
  isModalOpened.value = true;
}

async function getAllDatesData() {
  try {
    const { data: items } = await ApiService.getAllDatesData();

    if (items.length) {
      items.forEach((date) => {
        const dateWithEarns = dates2025.value[
          Object.keys(dates2025.value)[date.month - 1]
        ].find((item) => item.id === date.date);

        if (dateWithEarns) {
          dateWithEarns.incomes = date.income;
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
}

async function logout() {
  await UserService.logoutRequest();

  router.push("/login");
}

dates2025.value = { ...getDaysOfYear(2025) };

getAllDatesData();
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}

.m-months-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
