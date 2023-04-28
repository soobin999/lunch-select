import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/roulette",
    name: "룰렛",
    component: () => import("../views/Roulette.vue"),
  },
  {
    path: "/ladder",
    name: "사다리타기게임",
    component: () => import("../views/LadderGame.vue"),
  },
  {
    path: "/bingo",
    name: "빙고",
    component: () => import("../views/Bingo.vue"),
  },
  {
    path: "/",
    name: "메인",
    component: () => import("../views/MainPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
