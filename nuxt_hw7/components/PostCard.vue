<template>
  <div class="post-card">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body.substring(0, 100) }}...</p>
    <NuxtLink :to="`/posts/${post.id}`">Читать далее</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  post: Object,
});
</script>
