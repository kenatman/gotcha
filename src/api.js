import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "554b6cc28b5c520e4001c4f32336fd25", language: "en-US" },
});

export default api;
