<template>
  <header class="header">
    <h1>Header</h1>
    <button @click="$emit('toggle-theme')" class="theme-toggle">
      {{ themeButtonText }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isDarkTheme: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    themeButtonText() {
      return this.isDarkTheme ? '🌞 Светлая тема' : '🌙 Тёмная тема';
    },
  },
  emits: ['toggle-theme'],
});
</script>

<style scoped>
.header {
  height: 150px;
  background-color: var(--header-bg);
  font-size: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: white;
}

.theme-toggle {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
