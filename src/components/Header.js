import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";
import Bio from "./Bio";

const Title = styled.h1`
  color: white;
  float: left;
  margin: -8px -5px 30px;
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
    font-size: 17px;

    float: left;
    color: white;
    font-weight: 370;
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
            <StyledLink to="/bio">HOME</StyledLink>
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

      <Switch>
        <Route exact path="/Bio" component={Bio} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Clients" component={Clients} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </header>
  </Background>
);

export default Header;
