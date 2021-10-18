import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export default api;
