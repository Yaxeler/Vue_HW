<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '../types'

defineProps<{
  post: Post
}>()
</script>
