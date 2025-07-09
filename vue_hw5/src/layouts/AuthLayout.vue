<template>
  <div class="auth-layout">
    <slot />
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--bg-color);
}
</style>
