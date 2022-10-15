import { createRouter, createWebHistory } from "vue-router";
import HomeBot from "../views/HomeBot.vue";
import TestPage from "../views/testPage";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeBot,
  },
  {
    path: "/test",
    name: "test",
    component: TestPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
