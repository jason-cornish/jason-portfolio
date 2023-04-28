import React from "react";
import styled from "styled-components";
import { VerticalWrapper } from "./reusable/styled-components";

const NavigationOrbs = () => {
  return (
    <NavigationOrbsWrapper>
      <Orb />
      <Orb />
      <Orb />
    </NavigationOrbsWrapper>
  );
};

export default NavigationOrbs;

const NavigationOrbsWrapper = styled(VerticalWrapper)`
  row-gap: 15px;
`;

const Orb = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 15px;
  height: 15px;
`;
