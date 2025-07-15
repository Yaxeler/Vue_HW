import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

export const useUserStore = defineStore("users", () => {
  const users = ref<User[]>([]);

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    users.value = res.data;
  };

  return { users, fetchUsers };
});
