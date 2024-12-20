import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import InnerRing from "./inner-ring";
import InnerRingReverse from "./inner-ring-reverse";
import OuterRing from "./outer-ring";
import { ReactComponent as InnerRingSVG } from "../../svg/inner-ring.svg";

const RingsOfLights = () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (canvas) {
  //     const context = canvas.getContext("2d");
  //     //Our first draw
  //     if (context) {
  //       const image = new Image();
  //       image.src = require("../../svg/inner-ring.svg");

  //       // image.src = <InnerRing/>
  //       image.onload = () => {
  //         context.drawImage(image, 0, 0, 500, 500);
  //       };
  //     }
  //   }
  // }, [canvasRef]);

  return (
    <RingsOfLightsWrapper className="lights-background">
      {/* <canvas id="background-canvas" ref={canvasRef}>
        <InnerRing />
      </canvas> */}
      {/* <InnerCircle /> */}
      <InnerRing />
      <InnerRingReverse />
      {/* <OuterRing />*/}
    </RingsOfLightsWrapper>
  );
};

export default RingsOfLights;

const RingsOfLightsWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  #background-canvas {
    width: 100vw;
    height: 100vh;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-reverse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

const InnerCircle = styled.div`
  position: absolute;
  margin: auto auto;
  width: 200px;
  height: 200px;
  /* filter: blur(100px); */
  border-radius: 50%;
  background-color: black;
  /* @keyframes colorTransition {
    0% {
      background-color: 
    }
  } */
`;
