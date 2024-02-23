import axios from "axios";

const BASE_URL = "http://localhost:8000/books";
const booksAPI = axios.create({
  baseURL: BASE_URL,
});

async function getBooks() {
  const response = await booksAPI.get("/");
  return response.data;
}

async function getBookByID(id) {
  const response = await booksAPI.get(`/${id}`);
  return response.data;
}

export { getBooks, getBookByID };
