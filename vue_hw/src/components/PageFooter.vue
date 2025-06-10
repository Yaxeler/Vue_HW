<template>
  <footer class="footer">Footer - Текущая тема: {{ currentTheme }}</footer>
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
    currentTheme() {
      return this.isDarkTheme ? 'Тёмная' : 'Светлая';
    },
  },
});
</script>

<style scoped>
.footer {
  background-color: var(--header-bg);
  color: white;
  padding: 20px;
  text-align: center;
}
</style>
