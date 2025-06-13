import React from "react";
import styled from "styled-components";
import InnerRing from "./inner-ring";
import OuterRing from "./outer-ring";

const RingsOfLights = () => {
  return (
    <RingsOfLightsWrapper className="lights-background">
      {/* <InnerCircle />
      <InnerRing />
      <OuterRing /> */}
    </RingsOfLightsWrapper>
  );
};

export default RingsOfLights;

const RingsOfLightsWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.2;
  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  margin: auto auto;
  width: 200px;
  height: 200px;
  filter: blur(100px);
  background-color: black;
  /* @keyframes colorTransition {
    0% {
      background-color: 
    }
  } */
`;
