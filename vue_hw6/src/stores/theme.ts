import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isDark = ref(false);

  watchEffect(() => {
    document.documentElement.style.setProperty(
      "--bg-color",
      isDark.value ? "#121212" : "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      isDark.value ? "#ffffff" : "#121212"
    );
    document.documentElement.style.setProperty(
      "--button-bg",
      isDark.value ? "#1f1f1f" : "#e0e0e0"
    );
    document.documentElement.style.setProperty(
      "--button-text",
      isDark.value ? "#ffffff" : "#121212"
    );
  });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return { isDark, toggleTheme };
});
