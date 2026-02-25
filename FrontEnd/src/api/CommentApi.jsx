import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "";

const api = axios.create({
  baseURL: `${BASE}/api/v1/comments`,
  withCredentials: true,
});
export const addComment = (articleId, content, parentCommentId = null) => {
  const payload = parentCommentId ? { content, parentCommentId } : { content };
  return api.post(`/${articleId}`, payload);
};

export const getCommentsForArticle = (articleId) => {
  return api.get(`/${articleId}`);
};

export const updateComment = (commentId, data) => {
  return api.put(`/${commentId}`, data);
};

export const deleteComment = (commentId) => {
  return api.delete(`/${commentId}`);
};

export const toggleCommentLike = (commentId) => {
  return api.post(`/${commentId}/like`);
};
