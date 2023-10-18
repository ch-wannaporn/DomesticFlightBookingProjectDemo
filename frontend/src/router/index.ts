import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookingView from "../views/BookingView.vue";
import PayView from "../views/PayView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/booking/:flightId",
    name: "booking",
    component: BookingView,
  },
  {
    path: "/pay",
    name: "pay",
    component: PayView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
