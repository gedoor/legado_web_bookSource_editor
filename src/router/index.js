import sourceEditor from "../views/sourceEditor.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/bookSource",
    name: "book-home",
    component: sourceEditor,
  },
  {
    path: "/rssSource",
    name: "rss-home",
    component: sourceEditor,
  },
];

const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  // @ts-ignore
  routes,
});

export default router;
