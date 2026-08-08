import baseAxios from "./api";

export const getArticles = () => baseAxios.get("/articles/");
export const createArticle = (payload) => baseAxios.post("/article/", payload);
export const getArticle = (id) => baseAxios.get(`/article/${id}`);
export const updateArticle = (id, payload) =>
    baseAxios.patch(`/article/${id}`, payload);
export const deleteArticle = (id) => baseAxios.delete(`/article/${id}`);
