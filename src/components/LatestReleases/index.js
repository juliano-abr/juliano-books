import RecomendationsCard from "../RecomendationsCard";
import Title from "../Title";
import latestReleases from "./latestReleasesData";
import styled from "styled-components";

const BookList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #333; // Dark text color
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.8); // Slightly transparent white
  border-radius: 5px;
  padding: 10px;
  width: 80%;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
`;

const ItemTitle = styled.p`
  font-size: 16px;
  color: #333; // Dark text color
`;

export default function LatestReleases() {
  return (
    <section>
      <Title color="#333" fontSize="30px">
        Latest Releases
      </Title>

      <BookList>
        {latestReleases.map((book) => (
          <ListItem>
            <ItemImage src={book.src} alt={book.name} />
            <ItemTitle>{book.name}</ItemTitle>
          </ListItem>
        ))}
      </BookList>
      <RecomendationsCard
        title={"Maybe you can also like...."}
        description={"Know more about humans!"}
        img={
          "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg"
        }
        subtitle={"Sapiens: A Brief History of Humankind"}
      />
    </section>
  );
}
