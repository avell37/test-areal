import baseAxios from "./api";

export const createCommentApi = (articleId, text) =>
    baseAxios.post(`/article/${articleId}/comment/`, { text });
export const getCommentsApi = (articleId) =>
    baseAxios.get(`/article/${articleId}/comments/`);
export const updateCommentApi = (articleId, commentId, text) =>
    baseAxios.patch(`/article/${articleId}/comment/${commentId}`, { text });
export const deleteCommentApi = (articleId, commentId) =>
    baseAxios.delete(`/article/${articleId}/comment/${commentId}`);
