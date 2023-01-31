import { createRouter, createWebHashHistory } from "vue-router";

import sourceEditor from "@/views/sourceEditor";

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
  routes,
});

export default router;
