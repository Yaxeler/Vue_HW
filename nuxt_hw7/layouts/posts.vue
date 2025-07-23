<template>
  <div class="layout">
    <header>
      <div class="container">
        <h1>Посты</h1>
        <nav>
          <NuxtLink to="/">На главную</NuxtLink>
        </nav>
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

nav {
  margin-top: 0.5rem;
}

nav a {
  color: #0070f3;
  text-decoration: none;
  margin-right: 1rem;
}
</style>
