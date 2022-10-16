import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import СitizensPage from "../views/СitizensPage.vue";
import ResidentCardPage from "../views/ResidentCardPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/citizens",
    name: "citizens",
    component: СitizensPage,
  },
  {
    path: "/resident",
    name: "resident",
    component: ResidentCardPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
