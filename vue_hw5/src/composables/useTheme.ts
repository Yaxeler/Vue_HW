import { ref, computed, watchEffect } from "vue";

const currentTheme = ref<"light" | "dark">("light");

export function useTheme() {
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  };

  const theme = computed(() => currentTheme.value);

  // Apply CSS vars
  watchEffect(() => {
    const root = document.documentElement;
    if (currentTheme.value === "dark") {
      root.style.setProperty("--bg-color", "#222");
      root.style.setProperty("--text-color", "#fff");
      root.style.setProperty("--button-bg", "#444");
      root.style.setProperty("--button-text", "#fff");
    } else {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--text-color", "#000");
      root.style.setProperty("--button-bg", "#eee");
      root.style.setProperty("--button-text", "#000");
    }
  });

  return {
    theme,
    toggleTheme,
  };
}
