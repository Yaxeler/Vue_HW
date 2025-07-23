<script setup>
definePageMeta({ layout: "posts" });

const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
  <div>
    <h2>Список постов</h2>
    <div v-for="post in posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>
