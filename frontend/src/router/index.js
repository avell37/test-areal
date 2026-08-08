import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArticlesView from "../views/ArticlesView.vue";
import ArticleView from "../views/ArticleView.vue";
import ArticleFormView from "../views/ArticleFormView.vue";

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
            component: ArticlesView,
        },
        {
            path: "/articles/new",
            name: "article-create",
            component: ArticleFormView,
        },
        {
            path: "/articles/:id/edit",
            name: "article-edit",
            component: ArticleFormView,
        },
        {
            path: "/articles/:id",
            name: "article",
            component: ArticleView,
        },
        {
            path: "/analytics",
            name: "analytics",
            component: HomeView,
        },
    ],
});

export default router;
