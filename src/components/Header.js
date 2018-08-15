import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  float: left;
  margin: -12px -5px 30px;
  font-size: 32px;
`;

const Background = styled.section`
  background: black;
  height: 30px;
  padding: 25px;
`;

const NavList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(
  styled(Link)`
    text-decoration: none;
    float: left;
    color: white;
    font-weight: 300;
    display: inline;
    margin: auto 16px;
    font-family: Helvetica, Arial, sans-serif;
    @media (max-width: 765px) {
      display: none;
    }
    &:hover {
      text-decoration: none;
      color: cyan;
    }
  `,
  "active"
)`
  color: white;
`;

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Background>
    <header>
      <Title>KERVENS CALIXTE</Title>
      <nav>
        <NavList>
          <li>
            <StyledLink to="/">HOME</StyledLink>
          </li>
          <li>
            <StyledLink to="/services">SERVICES</StyledLink>
          </li>
          <li>
            <StyledLink to="/clients">CLIENTS</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">CONTACT</StyledLink>
          </li>
        </NavList>
      </nav>
    </header>
  </Background>
);

export default Header;
