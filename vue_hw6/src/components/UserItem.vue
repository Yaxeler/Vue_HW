<template>
  <div>{{ user.name }}</div>
</template>

<script setup lang="ts">
import type { User } from '../types'

defineProps<{
  user: User
}>()
</script>
