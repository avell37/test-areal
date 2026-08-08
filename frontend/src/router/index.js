import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/articles",
            name: "articles",
            component: HomeView,
        },
        {
            path: "/articles/new",
            name: "article-create",
            component: HomeView,
        },
        {
            path: "/analytics",
            name: "analytics",
            component: HomeView,
        },
    ],
});

export default router;
