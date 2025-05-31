<template>
    <div class="m-dropdown">
        <div class="m-dropdown-button" @click="isOpen = !isOpen">
            <slot name="button-content" />
        </div>

        <div class="m-dropdown-modal" v-if="isOpen">
            <slot name="dropdown-content" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

</script>

<style lang="scss" scoped>
.m-dropdown {
    position: relative;
    z-index: 1;
}

.m-dropdown-modal {
    position: absolute;
    top: 100%;
    right: $m-spacer-sm;
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    z-index: 2;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        width: 200px;
        height: fit-content;
    }
}
</style>