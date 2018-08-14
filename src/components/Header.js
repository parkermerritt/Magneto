import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.section`
  background: papayawhip;
`;

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Background>
    <header>
      <h1>Kervens Calixte</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  </Background>
);

export default Header;
