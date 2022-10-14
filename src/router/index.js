import { createRouter, createWebHistory } from "vue-router";
import HomeBot from "../views/HomeBot.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeBot,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
