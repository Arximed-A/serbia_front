import { createRouter, createWebHashHistory } from "vue-router";
import HomeBot from "../views/HomeBot.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeBot,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
