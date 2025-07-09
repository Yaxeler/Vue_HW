<template>
  <div>
    <h1>Главная страница</h1>

    <div v-if="showSuccess" class="success-message">
      ✅ Успешная авторизация
    </div>

    <button @click="goToLogin" class="auth-btn">Перейти к авторизации</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showSuccess = ref(false);

const goToLogin = () => {
  router.push("/login");
};

onMounted(() => {
  const wasAuthorized = localStorage.getItem("authSuccess") === "true";

  if (wasAuthorized) {
    showSuccess.value = true;
    localStorage.removeItem("authSuccess");

    setTimeout(() => {
      showSuccess.value = false;
    }, 3000); // скрыть через 3 секунды
  }
});
</script>

<style scoped>
.auth-btn {
  background-color: var(--button-bg);
  color: var(--button-text);
  padding: 10px 20px;
  border-radius: 6px;
  border: 2px solid var(--text-color);
  cursor: pointer;
}

.success-message {
  margin-bottom: 20px;
  padding: 12px;
  color: var(--button-text);
  background-color: var(--button-bg);
  border-radius: 8px;
  font-weight: bold;
}
</style>
