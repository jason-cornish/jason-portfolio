import React from "react";
import styled from "styled-components";

const InnerRing = () => {
  return (
    <InnerRingWrapper className="inner-ring-wrapper">
      {Array.from({ length: 8 }).map((circle, i) => {
        return (
          <div className="circle" key={`circle-${i}`}>
            <div className="circle-glow" />
            <div className="circle-inner" />
          </div>
        );
      })}
    </InnerRingWrapper>
  );
};

export default InnerRing;

const InnerRingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: rotate 25s linear infinite; */

  .circle {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    left: calc(35% - 25px);
    top: calc(20% - 25px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circle-glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(180px);
    opacity: 1;
  }
  .circle-inner {
    position: absolute;
    width: 20px;
    height: 20px;
    z-index: 2;
    border-radius: 50%;
    filter: blur(20px);
    opacity: 1;
  }

  .circle:nth-child(1) {
    transform: translateX(400px);
    animation-duration: 5s;
    .circle-glow,
    .circle-inner {
      background-color: #743f9d;
    }
  }

  .circle:nth-child(2) {
    transform: rotate(45deg) translateX(400px);
    animation-duration: 5s;
    .circle-glow,
    .circle-inner {
      background-color: #b28dcb;
    }
  }

  .circle:nth-child(3) {
    transform: rotate(90deg) translateX(400px);
    animation-duration: 2s;
    .circle-glow,
    .circle-inner {
      background-color: #3145b6;
    }
  }

  .circle:nth-child(4) {
    animation-duration: 3s;
    transform: rotate(135deg) translateX(400px);
    .circle-glow,
    .circle-inner {
      background-color: #743f9d;
    }
  }

  .circle:nth-child(5) {
    animation-duration: 1s;
    transform: rotate(180deg) translateX(400px);
    .circle-glow,
    .circle-inner {
      background-color: #3145b6;
    }
  }
  .circle:nth-child(6) {
    animation-duration: 5s;
    transform: rotate(225deg) translateX(400px);
    .circle-glow,
    .circle-inner {
      background-color: #b28dcb;
    }
  }
  .circle:nth-child(7) {
    animation-duration: 3s;
    transform: rotate(270deg) translateX(400px);
    .circle-glow,
    .circle-inner {
      background-color: #3145b6;
    }
  }
  .circle:nth-child(8) {
    animation-duration: 2s;
    transform: rotate(315deg) translateX(400px);
    .circle-glow,
    .circle-inner {
      background-color: #743f9d;
    }
  }
`;
