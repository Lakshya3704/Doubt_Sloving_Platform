import axios from "axios";

const BASE = import.meta.env.VITE_API_BASE_URL || "";

const api = axios.create({
  baseURL: `${BASE}/api/v1/userArticle`,
  withCredentials: true,
});

export const addProblem = (data) => {
  return api.post("/article", data, {
    headers: { "Content-Type": "application/json" },
  });
};

export const getAllProblem = () => {
  return api.get("/getAllArticles");
};

export const deleteProblem = (articleId) => {
  return api.delete(`/${articleId}`);
};

export const getMyProblems = () => {
  return api.get("/getMyArticles");
};
