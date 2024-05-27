import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import ArticlePage from "@/pages/ArticlePage.vue";
import About from "@/pages/About.vue";
import ArticleModal from "@/pages/ArticleModal.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/articles",
    component: ArticlePage,
  },
  {
    path: "/about",
    component: About,
  },
  //   {
  //     path: "/articles/:id",
  //     component: ArticleModal,
  //   },
];

const router = createRouter({ routes, history: createWebHistory() });

export default router;
