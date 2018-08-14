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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/roster">Roster</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
    </header>
  </Background>
);

export default Header;
