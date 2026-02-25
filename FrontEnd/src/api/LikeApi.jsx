import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "";

const api = axios.create({
  baseURL: `${BASE}/api/v1/userLike`,
  withCredentials: true,
});

export const toggleCommentLike = async (commentId) => {
  try {
    const response = await api.post(`/comments/${commentId}/like`);
    return response.data;
  } catch (error) {
    console.error("Error liking comment:", error);
    throw error;
  }
};
