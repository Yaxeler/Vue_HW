// stores/auth.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref(false);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const login = async (login: string, password: string): Promise<boolean> => {
    loading.value = true;
    error.value = null;

    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          login,
          password,
        }
      );

      if (res.status === 201 || res.status === 200) {
        isAuthenticated.value = true;
        return true;
      } else {
        return false;
      }
    } catch (e) {
      error.value = "Ошибка при авторизации";
      return false;
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated,
    login,
    logout,
    loading,
    error,
  };
});
