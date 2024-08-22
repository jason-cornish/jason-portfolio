import React from "react";
import styled from "styled-components";

const OuterRing = () => {
  return (
    <OuterRingWrapper className="inner-ring-wrapper">
      {Array.from({ length: 12 }).map((circle, i) => {
        return (
          <div className="circle" key={`circle-${i}`}>
            {/* <div className="circle-inner" /> */}
            {/* <div className="circle-glow" /> */}
            <svg width="100" height="100" className="circle-glow">
              <circle cx="50" cy="50" r="40" stroke-width="0" />
            </svg>
          </div>
        );
      })}
      {/* <div className="glow-wrapper">
        {Array.from({ length: 12 }).map((circle, i) => {
          return (
            <div className="circle" key={`circle-glow-${i}`}>
              <div className="circle-glow" />
            </div>
          );
        })}
      </div>
      <div className="circle-wrapper">
        {Array.from({ length: 12 }).map((circle, i) => {
          return (
            <div className="circle" key={`circle-inner-${i}`}>
              <div className="circle-inner" />
            </div>
          );
        })}
      </div> */}
    </OuterRingWrapper>
  );
};

export default OuterRing;

const OuterRingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate 35s linear infinite;
  animation-direction: reverse;

  /* .glow-wrapper {
    filter: blur(80px);
  }
  .circle-wrapper {
    filter: blur(20px);
  } */

  .circle {
    position: absolute;
    border-radius: 50%;
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
    border-radius: 50%;
    filter: blur(20px);
    opacity: 1;
  }

  .circle:nth-child(1) {
    transform: translateX(700px);

    .circle-glow,
    .circle-inner {
      /* background-color: #b72b0a; */
    }
  }

  .circle:nth-child(2) {
    transform: rotate(30deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #0567ad;
    }
  }

  .circle:nth-child(3) {
    transform: rotate(60deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #b28dcb;
    }
  }

  .circle:nth-child(4) {
    transform: rotate(90deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #743f9d;
    }
  }

  .circle:nth-child(5) {
    transform: rotate(120deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #b28dcb;
    }
  }
  .circle:nth-child(6) {
    transform: rotate(150deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #3145b6;
    }
  }
  .circle:nth-child(7) {
    transform: rotate(180deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #0567ad;
    }
  }
  .circle:nth-child(8) {
    transform: rotate(220deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #b28dcb;
    }
  }
  .circle:nth-child(9) {
    transform: rotate(250deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #743f9d;
    }
  }
  .circle:nth-child(10) {
    transform: rotate(280deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #3145b6;
    }
  }
  .circle:nth-child(11) {
    transform: rotate(310deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #b28dcb;
    }
  }
  .circle:nth-child(12) {
    transform: rotate(340deg) translateX(700px);
    .circle-glow,
    .circle-inner {
      background-color: #0567ad;
    }
  }
`;
