import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BookingView from "@/views/BookingView.vue";
import PayView from "@/views/PayView.vue";
import MailView from "@/views/MailView.vue";
import TicketsView from "@/views/TicketsView.vue";

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
    path: "/pay/:bookingId",
    name: "pay",
    component: PayView,
  },
  {
    path: "/mail",
    name: "mail",
    component: MailView,
  },
  {
    path: "/tickets/:bookingId",
    name: "tickets",
    component: TicketsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
