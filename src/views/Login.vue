<template>
  <div class="m-login">
    <div class="m-login-form">
      <h2 class="m-text-center">Login</h2>
      <section class="m-mb-lg m-p-md">
        <div class="m-flex m-column m-mb-md">
          <label class="m-mb-sm" for="email">Email</label>
          <input id="email" v-model="email" @keydown.enter="onLogin" />
        </div>

        <div class="m-flex m-column">
          <label class="m-mb-sm" for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            @keydown.enter="onLogin"
          />
        </div>
      </section>

      <div class="m-flex m-centered">
        <button class="m-login-form__submit" type="button" @click="onLogin">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { UserService } from "@/services/user.js";
import { useUserStore } from "@/stores/user.js";

const router = useRouter();

const userStore = useUserStore();
const { setUser } = userStore;

const email = ref("");
const password = ref("");

async function onLogin() {
  const payload = {
    email: email.value,
    password: password.value,
  };

  const response = await UserService.loginRequest(payload);

  if (response.status == 200 && response.data) {
    const { username } = response.data;

    setUser({
      username,
    });
    
    router.push("/");
  }

  router.push("/");
}
</script>

<style scoped lang="scss">
.m-login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.m-login-form {
  width: 30%;
  height: 350px;
  border-radius: $bdrs-default;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid $white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__submit {
    background-color: $m-purple;
    color: $white;
    padding: $m-spacer-xs $m-spacer-md;
  }
}
</style>
