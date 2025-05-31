<template>
  <div class="m-modal-overlay" v-if="isShown">
    <div class="m-modal-overlay__wrapper" @click="closeModal">
      <div class="m-modal-window" @click.stop>
        <section class="m-modal-window__header m-p-md">123</section>
        <m-earnings-table :earningsData="earningsData" />

        <button class="m-modal-window__close-btn" @click="closeModal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import MEarningsTable from "@/components/MEarningsTable.vue";
import ApiService from "@/services/apiService.js";

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const isShown = defineModel({ type: Boolean, default: false });
const earningsData = ref([]);

const getDateData = async () => {
  const selectedDateString = new Date(
    `${props.data?.month}-${props.data?.day}-${props.data?.year}`
  );
  const date = selectedDateString.getDate();
  const month = selectedDateString.getMonth() + 1;
  const year = selectedDateString.getFullYear();

  const dateId = `${date < 10 ? "0" + date : date}-${month < 10 ? "0" + month : month}-${year}`;

  try {
    const { data } = await ApiService.getDateData(dateId);

    if (data && data.length) {
      earningsData.value = data;
    }
  } catch (e) {
    console.log(e);
  }
};

const closeModal = () => {
  isShown.value = false;
};

watch(isShown, (value) => {
  if (value) {
    getDateData();
  } else {
    earningsData.value = null;
  }
});
</script>

<style scoped lang="scss">
.m-modal-overlay {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  &__wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
}

.m-modal-window {
  width: 40vw;
  height: 30vh;
  border: 1px solid gray;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%) translateY(-50%);
  background-color: white;
  padding-top: 50px;

  @media (max-width: 900px) {
    width: 90vw;
    height: 50vh;
  }

  &__header {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    max-width: 70%;
  }

  &__wrapper {
    position: relative;
  }

  &__close-btn {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    background-image: url("/icons/close.png");
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    background-color: transparent;
  }
}
</style>
