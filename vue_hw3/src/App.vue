<template>
  <main>
    <UserList />
    <hr />
    <PostList />
  </main>
</template>

<script setup lang="ts">
import UserList from './components/UserList.vue'
import PostList from './components/PostList.vue'
</script>

<style scoped>
main {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
</style>
