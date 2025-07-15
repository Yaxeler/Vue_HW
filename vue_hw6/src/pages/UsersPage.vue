<script setup lang="ts">
import { onMounted } from "vue";
import { useUserStore } from "@/stores/users";

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
});
</script>

<template>
  <div>
    <h1>Пользователи</h1>
    <ul>
      <li v-for="user in userStore.users" :key="user.id">
        {{ user.name }} ({{ user.email }})
      </li>
    </ul>
  </div>
</template>
