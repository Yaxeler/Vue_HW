<template>
  <aside class="aside">
    <h3>Sidebar</h3>
    <p>Текущая тема: {{ currentTheme }}</p>
  </aside>
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
.aside {
  width: 250px;
  background-color: var(--content-bg);
  padding: 20px;
  color: var(--text-color);
  border-right: 1px solid var(--text-color);
}
</style>
