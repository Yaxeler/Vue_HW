<template>
  <div class="layout">
    <header>
      <div class="container">
        <h1>Главная</h1>
      </div>
    </header>
    <main class="container">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  background-color: #f5f5f5;
  min-height: 100vh;
}

header {
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
