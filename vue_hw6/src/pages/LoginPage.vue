<template>
  <div class="login-container">
    <h2>Авторизация</h2>

    <form @submit.prevent="submit" class="login-form">
      <input v-model="login" placeholder="Логин" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const login = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();
const authStore = useAuthStore();

const submit = async () => {
  error.value = "";
  const success = await authStore.login(login.value, password.value);
  if (success) {
    router.push("/users");
  } else {
    error.value = "Неверные данные";
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: var(--background-color);
  border-radius: 12px;
  border: 1px solid #ffffff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

.login-form input {
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 10px;
  font-size: 16px;
}

.login-form button {
  padding: 10px;
  font-weight: bold;
  background: var(--primary-color, #333);
  color: white;
  border: 1px solid #222;
  cursor: pointer;
  width: 100%;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
