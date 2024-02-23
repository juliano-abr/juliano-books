import styled from "styled-components";

const Title = styled.h2`
  padding: 20px 0;
  font-size: ${(props) => props.fontSize || "26px"};
  width: 100%;
  color: ${(props) => props.color || "#333"}; // Dark text color
  text-align: center;
  margin: 0;
`;

export default Title;
