<template>
  <div>
    <h2>Posts</h2>
    <div v-if="loading">Загрузка...</div>
    <PostItem v-for="post in displayedPosts" :key="post.id" :post="post" />
    <button @click="toggleShowAll">
      {{ showAll ? 'Показать первые 10' : 'Показать все' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PostItem from './PostItem.vue'
import type { Post } from '../types'

const posts = ref<Post[]>([])
const loading = ref<boolean>(true)
const showAll = ref<boolean>(false)

const displayedPosts = computed(() => (showAll.value ? posts.value : posts.value.slice(0, 10)))

async function fetchPosts() {
  loading.value = true
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  posts.value = data as Post[]
  loading.value = false
}

function toggleShowAll() {
  showAll.value = !showAll.value
}

onMounted(fetchPosts)
</script>
