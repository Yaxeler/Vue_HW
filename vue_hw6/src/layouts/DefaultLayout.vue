<template>
  <div class="layout">
    <button class="theme-btn" @click="toggleTheme">Сменить тему</button>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "../composables/useTheme";
const { toggleTheme } = useTheme();
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
}

.theme-btn {
  background-color: var(--button-bg);
  color: var(--button-text);
  border: 2px solid var(--text-color);
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
