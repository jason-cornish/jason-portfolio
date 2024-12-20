import React from "react";
import styled from "styled-components";
import { ReactComponent as InnerRingReverseSVG } from "../../svg/inner-ring.svg";

const InnerRingReverse = () => {
  const colors = [
    "#4057d8",
    "#b28dcb",
    "#3145b6",
    "#743f9d",
    "#3145b6",
    "#b28dcb",
    "#4057d8",
    "#743f9d",
  ];

  return (
    <InnerRingWrapper className="outer-ring-wrapper">
      {/* <InnerRingReverseSVG /> */}

      {/* {Array.from({ length: 8 }).map((circle, i) => {
        return (
          <div className="circle" key={`circle-${i}`}>
            <div className="circle-glow" />
            <div className="circle-inner" />
          </div>
        );
      })} */}
    </InnerRingWrapper>
  );
};

export default InnerRingReverse;

const InnerRingWrapper = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: rotate-reverse 25s linear infinite;
  opacity: 0.4;
  // filter: blur(150px);
`;
