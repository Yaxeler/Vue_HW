import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import UsersPage from "@/pages/UsersPage.vue";
import { useAuthStore } from "@/stores/auth";

const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  {
    path: "/users",
    component: UsersPage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
