import React, { Fragment } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

const InlineFlex = styled(Flex)`
  display: inline-flex;
  padding-top: 5px;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    flex-flow: column wrap;
  }
`;

const Subtitle = styled.h2`
  padding-top: 4px;
  margin-left: 30px;
  margin-bottom: -2px;
  font-size: 50px;
`;

const StyledBox = styled(Box)`
  max-width: 550px;
  @media (max-width: 500px) {
    width: 92%;
    flex-direction: column;
  }
`;

const Clients = () => (
  <Fragment>
    <Subtitle>CLIENTS</Subtitle>
    <InlineFlex>
      <StyledBox width={[1 / 2]} p={20} ml={25} mr={15} pt={20}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. <br />
        <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </StyledBox>
      <StyledBox width={[1 / 2]} p={20} ml={15} mr={15} pt={20}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore. <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        deserunt mollit anim. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore.
      </StyledBox>
    </InlineFlex>
  </Fragment>
);

export default Clients;
