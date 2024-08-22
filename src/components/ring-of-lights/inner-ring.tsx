import React from "react";
import styled from "styled-components";
import { ReactComponent as InnerRingSVG } from "../../svg/inner-ring.svg";

const InnerRing = () => {
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
    <InnerRingWrapper className="inner-ring-wrapper">
      <InnerRingSVG />
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

export default InnerRing;

const InnerRingWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: rotate 25s linear infinite; */
  /* filter: blur(150px); */
`;
