import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "554b6cc28b5c520e4001c4f32336fd25", language: "en-US" },
});

export default api;

export const movieApi = {
  nowPlaying: () => api.get(`movie/now_playing`),
  upcoming: () => api.get(`movie/upcoming`),
  popular: () => api.get(`movie/popular`),
  searching: (term) => api.get(`search/movie`, { params: { query: term } }),
  detail: (id) =>
    api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
};

export const tvApi = {
  topRated: () => api.get(`tv/top_rated`),
  popular: () => api.get(`tv/popular`),
  airingToday: () => api.get(`tv/airing_today`),
  searching: (term) => api.get(`search/tv`, { params: { query: term } }),
  detail: (id) =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
};
