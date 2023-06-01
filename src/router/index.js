import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import WaitingPage from "../components/WaitingPage.vue";
import QuestionPage from "../components/QuestionPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/waiting",
      name: "waitingpage",
      component: WaitingPage,
    },
    {
      path: "/question",
      name: "questionpage",
      component: QuestionPage,
    },
  ],
});

export default router;
