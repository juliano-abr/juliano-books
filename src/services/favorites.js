import axios from "axios";

const BASE_URL = "http://localhost:8000/favorites";
const favoritesAPI = axios.create({
  baseURL: BASE_URL,
});

async function getFavorites() {
  const response = await favoritesAPI.get("/");
  return response.data;
}

async function getFavoriteByID(id) {
  const response = await favoritesAPI.get(`/${id}`);
  return response.data;
}

async function addFavorite(id) {
  await favoritesAPI.post(`/${id}`);
}

async function removeFavorite(id) {
  await favoritesAPI.delete(`/${id}`);
}

export { getFavorites, getFavoriteByID, addFavorite, removeFavorite };
