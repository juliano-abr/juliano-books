import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { getBooks } from "../services/books";

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

function Bookcase() {
  const [availableBooks, setAvailableBooks] = useState([]);

  const getBooksAPI = async () => {
    const books = await getBooks();
    setAvailableBooks(books);
  };

  useEffect(() => {
    getBooksAPI();
  }, []);

  return (
    <MainContainer>
      <Title>All books we have!</Title>

      <BookContainer>
        <BookList>
          {availableBooks.length > 0 &&
            availableBooks.map((book) => (
              <BookListItem key={book.id}>{book.name}</BookListItem>
            ))}
        </BookList>
      </BookContainer>
    </MainContainer>
  );
}

export default Bookcase;
