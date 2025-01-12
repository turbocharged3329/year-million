<template>
  <section>
    <table class="m-earnings-table">
      <tbody>
      <tr>
        <td class="m-earnings-table__description-col">Description</td>
        <td>1000</td>
      </tr>

      <template v-if="isAddMode">
        <tr>
          <td class="m-earnings-table__description-col">
            <input placeholder="Description"/>
          </td>
          <td class="m-earnings-table__sum-col">
            <input placeholder="Sum" type="number"/>
          </td>
        </tr>
      </template>
      </tbody>
    </table>

    <div class="m-earnings-table__btns-row m-flex m-mt-sm">
      <button v-if="!isAddMode" @click="isAddMode = true">Add+</button>

      <template v-if="isAddMode">
          <button @click="isAddMode = false">Save</button>
          <button @click="isAddMode = false">Cancel</button>
      </template>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue'

const isAddMode = ref(false)
</script>

<style scoped lang="scss">
.m-earnings-table {
  width: 100%;

  &__description-col {
    width: 75%;
  }

  &__sum-col {
    width: 25%;
  }

  &__btns-row {
    justify-content: flex-start;
  }
}
</style>
