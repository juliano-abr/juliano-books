import { Link } from "react-router-dom";
import HeaderIcons from "../HeaderIcons";
import HeaderOptions from "../HeaderOptions";
import Logo from "../Logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  );
}
