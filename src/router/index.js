import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import FirstTask from "../views/FirstTask/FirstTask.vue";
import SecondTask from "../views/SecondTask/SecondTask.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/first-task",
    name: "FirstTask",
    component: FirstTask,
  },
  {
    path: "/second-task",
    name: "SecondTask",
    component: SecondTask,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
