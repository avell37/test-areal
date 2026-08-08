import { createArticle, getArticles } from "@/api/articles";
import { createStore } from "vuex";

export default createStore({
    state: {
        articles: [],
    },
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles;
        },
        ADD_ARTICLE(state, article) {
            state.articles = [...state.articles, article];
        },
    },
    actions: {
        async fetchArticles({ commit }) {
            try {
                const { data } = await getArticles();
                commit("SET_ARTICLES", data);
            } catch (err) {
                console.error(err);
            }
        },
        async createArticle({ commit }, payload) {
            try {
                const { data } = await createArticle(payload);
                commit("ADD_ARTICLE", data);
            } catch (err) {
                console.error(err);
            }
        },
    },
});
