import baseAxios from "./api";

export const getArticles = () => baseAxios.get("/articles/");
export const createArticle = (payload) => baseAxios.post("/article/", payload);
