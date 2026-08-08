import {
    createArticle,
    deleteArticle,
    getArticle,
    getArticles,
    updateArticle,
} from "@/api/articles";
import { createStore } from "vuex";

export default createStore({
    state: {
        articles: [],
        currentArticle: null,
    },
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles;
        },
        ADD_ARTICLE(state, article) {
            state.articles = [...state.articles, article];
        },
        SET_CURRENT_ARTICLE(state, article) {
            state.currentArticle = article;
        },
        UPDATE_ARTICLE(state, article) {
            state.articles = state.articles.map((art) =>
                art.id === article.id ? article : art,
            );
        },
        REMOVE_ARTICLE(state, id) {
            state.articles = state.articles.filter((art) => art.id !== id);
            if (state.currentArticle?.id === id) {
                state.currentArticle = null;
            }
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
        async fetchArticle({ commit }, id) {
            try {
                const { data } = await getArticle(id);
                commit("SET_CURRENT_ARTICLE", data);
            } catch (err) {
                console.error(err);
            }
        },
        async updateArticle({ commit }, { id, payload }) {
            try {
                const { data } = await updateArticle(id, payload);
                commit("UPDATE_ARTICLE", data);
            } catch (err) {
                console.error(err);
            }
        },
        async deleteArticle({ commit }, id) {
            try {
                await deleteArticle(id);
                commit("REMOVE_ARTICLE", id);
            } catch (err) {
                console.error(err);
            }
        },
    },
});
