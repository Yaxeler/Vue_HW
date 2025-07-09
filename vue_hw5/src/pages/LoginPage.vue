<template>
  <form @submit.prevent="submit">
    <input v-model="login" placeholder="Login" />
    <input v-model="password" type="password" placeholder="Password" />

    <button type="submit" :disabled="isLoading">
      <span v-if="isLoading" class="spinner"></span>
      <span v-else>Войти</span>
    </button>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const login = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);
const router = useRouter();

const submit = async () => {
  errorMessage.value = "";
  isLoading.value = true;

  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        login: login.value,
        password: password.value,
      }
    );

    if (response.status === 201) {
      localStorage.setItem("authSuccess", "true");
      router.push("/");
    } else {
      errorMessage.value = "Ошибка авторизации: неверный статус ответа";
    }
  } catch (error) {
    errorMessage.value = "Ошибка сети или сервера. Попробуйте позже.";
    console.error("Ошибка при входе:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
  border-radius: 8px;
}

input,
button {
  padding: 10px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  background-color: var(--button-bg);
  color: var(--button-text);
  border: 2px solid var(--text-color);
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

button[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 3px solid transparent;
  border-top-color: var(--text-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
