<template>
  <div class="m-menu">
    <!--    <m-dropdown>-->
    <!--        <template #button-content>-->
    <!--            <button>-->
    <!--                Menu-->
    <!--            </button>-->
    <!--        </template>-->

    <!--        <template #dropdown-content>-->
    <!--            <div>-->
    <!--        <div class="m-menu-avatar">-->
    <!--            <label>-->
    <!--                <input class="m-menu-avatar__input" type="file" />-->
    <!--                <div>123</div> -->
    <!--            </label>-->
    <!--        </div>-->
    <!--        <p>{{ user?.username }}</p>-->
    <!--    </div>        -->
    <!--        </template>-->
    <!--    </m-dropdown>-->

    <button class="m-logout-btn" @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { UserService } from "@/services/user.js";
import { useUserStore } from "@/stores/user.js";
import { storeToRefs } from "pinia";
import MDropdown from "@/components/MDropdown.vue";

const router = useRouter();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

async function logout() {
  await UserService.logoutRequest();

  router.push("/login");
}
</script>

<style lang="scss" scoped>
.m-menu {
  position: absolute;
  top: 10px;
  right: 10px;
}

.m-menu-avatar {
  &__input {
    display: none;
  }
}

.m-logout-btn {
}
</style>
