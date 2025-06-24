<template>
  <div>
    <h2>Users</h2>
    <UserItem v-for="user in displayedUsers" :key="user.id" :user="user" />
    <button @click="toggleShowAll">
      {{ showAll ? 'Показать первые 10' : 'Показать все' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import usersData from '../mock/users.json'
import UserItem from './UserItem.vue'
import type { User } from '../types'

const showAll = ref(false)
const users = usersData as User[]

const displayedUsers = computed(() => (showAll.value ? users : users.slice(0, 10)))

function toggleShowAll() {
  showAll.value = !showAll.value
}
</script>
