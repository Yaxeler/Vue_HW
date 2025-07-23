<script setup>
definePageMeta({ layout: "posts" });

const route = useRoute();
const { data: post } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);
</script>

<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <NuxtLink to="/posts">Назад к списку</NuxtLink>
  </div>
</template>
