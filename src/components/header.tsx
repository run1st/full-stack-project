import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 10px;
  Link {
    text-style: none;
  }
`;
interface spanProps {
  name: string;
}

const StyledMenu = styled.div<spanProps>`
  padding: 5px;
  margin: 25px;
  border-radius: 5px;
  border: 1px solid;
  color: white;
  &:hover {
    background-color: purple;
    transform: scale(1.4);
    transform: translate(-20px);
    cursor: pointer;
  }
`;
const Header: React.FC = () => (
  <>
    {" "}
    <StyledDiv>
      {" "}
      <Link to={"/"}>
        {" "}
        <StyledMenu name="Home">Home</StyledMenu>
      </Link>
      <Link to={"/songs"}>
        <StyledMenu name="Songs">Songs</StyledMenu>
      </Link>
      <Link to={"/about"}>
        {" "}
        <StyledMenu name="home">name</StyledMenu>
      </Link>
      <Link to={"/about"}>
        {" "}
        <StyledMenu name="home">name</StyledMenu>
      </Link>
    </StyledDiv>
  </>
);

export default Header;
