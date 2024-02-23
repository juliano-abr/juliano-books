import { useEffect, useState } from "react";
import styled from "styled-components";
import { getBooks } from "../../services/books";
import { addFavorite } from "../../services/favorites";
import Title from "../Title";

const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const SearchInput = styled.input`
  margin: 20px;
  padding: 10px;
  width: 50%;
  border-radius: 5px;
`;

const BookList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 50%;
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

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const [booksSearched, setBooksSearched] = useState([]);
  const [availableBooks, setAvailableBooks] = useState([]);

  const getBooksAPI = async () => {
    const books = await getBooks();
    setAvailableBooks(books);
  };

  useEffect(() => {
    getBooksAPI();
  }, []);

  async function insertFavorite(id) {
    await addFavorite(id);
    alert("Book added to favorites");
  }

  useEffect(() => {
    const filteredBooks = availableBooks.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooksSearched(filteredBooks);
  }, [searchTerm, availableBooks]);

  return (
    <SearchPageContainer>
      <Title>Search your books here!</Title>
      <SearchInput
        type="text"
        placeholder="Type here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookList>
        {booksSearched.length > 0 &&
          booksSearched.map((book) => (
            <BookListItem key={book.id} onClick={() => insertFavorite(book.id)}>
              {book.name}
            </BookListItem>
          ))}
      </BookList>
    </SearchPageContainer>
  );
}
