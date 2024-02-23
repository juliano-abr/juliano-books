import { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../services/favorites";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import styled from "styled-components";

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const BookList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const BookListItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8); // Slightly transparent white
  border-radius: 5px;
  text-align: center;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: rgba(
      221,
      221,
      221,
      0.8
    ); // Slightly transparent light gray
  }
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    const response = await getFavorites();
    setFavorites(response);
  }

  async function deleteFavorite(id) {
    await removeFavorite(id);
    await fetchFavorites();
    fetchFavorites();
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <MainContainer>
      <Title fontSize="40px">Your favorites</Title>
      <BookContainer>
        <BookList>
          {favorites.map((favorite) => (
            <BookListItem
              key={favorite.id}
              onClick={() => deleteFavorite(favorite.id)}
            >
              {favorite.name}
            </BookListItem>
          ))}
        </BookList>
      </BookContainer>
    </MainContainer>
  );
}

export default Favorites;
