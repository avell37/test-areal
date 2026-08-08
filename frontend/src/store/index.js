import { getCommentsAnalytics } from "@/api/analytics";
import {
    createArticleApi,
    deleteArticleApi,
    getArticleApi,
    getArticlesApi,
    updateArticleApi,
} from "@/api/articles";
import {
    createCommentApi,
    deleteCommentApi,
    getCommentsApi,
    updateCommentApi,
} from "@/api/comments";
import { createStore } from "vuex";

export default createStore({
    state: {
        articles: [],
        currentArticle: null,
        comments: [],
        analytics: [],
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
        SET_COMMENTS(state, comments) {
            state.comments = comments;
        },
        ADD_COMMENT(state, comment) {
            state.comments = [...state.comments, comment];
        },
        UPDATE_COMMENT(state, comment) {
            state.comments = state.comments.map((com) =>
                com.id === comment.id ? comment : com,
            );
        },
        REMOVE_COMMENT(state, id) {
            state.comments = state.comments.filter((com) => com.id !== id);
        },
        SET_ANALYTICS(state, analytics) {
            state.analytics = analytics;
        },
    },
    actions: {
        async fetchArticles({ commit }) {
            try {
                const { data } = await getArticlesApi();
                commit("SET_ARTICLES", data);
            } catch (err) {
                console.error(err);
            }
        },
        async createArticle({ commit }, payload) {
            try {
                const { data } = await createArticleApi(payload);
                commit("ADD_ARTICLE", data);
            } catch (err) {
                console.error(err);
            }
        },
        async fetchArticle({ commit }, id) {
            try {
                const { data } = await getArticleApi(id);
                commit("SET_CURRENT_ARTICLE", data);
            } catch (err) {
                console.error(err);
            }
        },
        async updateArticle({ commit }, { id, payload }) {
            try {
                const { data } = await updateArticleApi(id, payload);
                commit("UPDATE_ARTICLE", data);
            } catch (err) {
                console.error(err);
            }
        },
        async deleteArticle({ commit }, id) {
            try {
                await deleteArticleApi(id);
                commit("REMOVE_ARTICLE", id);
            } catch (err) {
                console.error(err);
            }
        },
        async fetchComments({ commit }, articleId) {
            try {
                const { data } = await getCommentsApi(articleId);
                commit("SET_COMMENTS", data);
            } catch (err) {
                console.error(err);
            }
        },
        async createComment({ commit }, { articleId, text }) {
            try {
                const { data } = await createCommentApi(articleId, text);
                commit("ADD_COMMENT", data);
            } catch (err) {
                console.error(err);
            }
        },
        async updateComment({ commit }, { articleId, commentId, text }) {
            try {
                const { data } = await updateCommentApi(
                    articleId,
                    commentId,
                    text,
                );
                commit("UPDATE_COMMENT", data);
            } catch (err) {
                console.error(err);
            }
        },
        async deleteComment({ commit }, { articleId, commentId }) {
            try {
                await deleteCommentApi(articleId, commentId);
                commit("REMOVE_COMMENT", commentId);
            } catch (err) {
                console.error(err);
            }
        },
        async fetchAnalytics({ commit }, { dateFrom, dateTo }) {
            try {
                const { data } = await getCommentsAnalytics(dateFrom, dateTo);
                commit("SET_ANALYTICS", data);
            } catch (err) {
                console.error(err);
            }
        },
    },
});
