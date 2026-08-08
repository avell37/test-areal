import baseAxios from "./api";

export const getArticlesApi = () => baseAxios.get("/articles/");
export const createArticleApi = (payload) =>
    baseAxios.post("/article/", payload);
export const getArticleApi = (id) => baseAxios.get(`/article/${id}`);
export const updateArticleApi = (id, payload) =>
    baseAxios.patch(`/article/${id}`, payload);
export const deleteArticleApi = (id) => baseAxios.delete(`/article/${id}`);
