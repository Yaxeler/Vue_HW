import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    meta: { layout: "default" },
  },
  {
    path: "/login",
    component: LoginPage,
    meta: { layout: "auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
