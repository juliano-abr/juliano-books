import styled from "styled-components";
import Title from "../Title";

const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto; // Centers the card if it's the only element on the page
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5; // Light grey background
  width: 70%; // Take up 70% of the container width
  text-align: center; // Center the text
  transition: transform 0.3s ease-in-out; // Smooth scaling transition

  &:hover {
    transform: scale(1.05); // Scale up slightly when hovered over
  }
`;

const Image = styled.img`
  width: 90px; // Smaller image
  margin-bottom: 15px; // Less space below the image
  cursor: pointer;
`;

const Subtitle = styled.h4`
  font-size: 24px; // Smaller font size
  color: #333; // Dark text color
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px; // Smaller font size
  color: #333; // Dark text color
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #644117; // Dark wood color
  color: white;
  font-size: 14px; // Smaller font size
  cursor: pointer;
  border: none;
`;

export default function RecomendationsCard({
  title,
  subtitle,
  description,
  img,
}) {
  return (
    <ParentContainer>
      <CardContainer>
        <Image src={img} alt="photoRecomendations" />
        <Title color="#333" fontSize="20px">
          {title}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <Button>Discover More</Button>
      </CardContainer>
    </ParentContainer>
  );
}
