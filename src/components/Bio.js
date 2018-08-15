import React from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

const InlineFlex = styled(Flex)`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    flex-flow: column wrap;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: 500px) {
    width: 90%;
    flex-direction: column;
  }
`;

const Bio = () => (
  <InlineFlex>
    <StyledBox width={[1 / 2]} p={20} ml={15} pt={20}>
      Kervens Calixte provides brand management services to the most elite
      athletes in the country.
    </StyledBox>
    <StyledBox width={[1 / 2]} p={20} ml={15} pt={20}>
      Half width
    </StyledBox>
  </InlineFlex>
);

export default Bio;
