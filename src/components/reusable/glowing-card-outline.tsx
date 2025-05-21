import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Rectangle } from "../../svg/Rectangle.svg";

const GlowingCardOutline = () => {
  return (
    <GlowingCardOutlineWrapper className="glowing">
      {/* <svg
        className="svgwave"
        xmlns="http://www.w3.org/2000/svg"
        width="475"
        height="700"
        viewBox="0 0 301 301"
      >
        <foreignObject x="6" y="6" width="475px" height="700px">
          <div className="foreignobject"></div>
        </foreignObject>
        <text text-anchor="left">
          <textPath href="foreignobject" startOffset="0%" textLength="1175">
            <animate
              attributeName="startOffset"
              from="20%"
              to="42%"
              begin="0s"
              dur="12s"
              repeatCount="indefinite"
            ></animate>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
            <tspan>TAP</tspan>
            <tspan></tspan>
          </textPath>
        </text>
      </svg> */}
    </GlowingCardOutlineWrapper>
  );
};

export default GlowingCardOutline;

const GlowingCardOutlineWrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 0;
  /* background-color: ${(props) => props.theme.colors.white}; */
  border-radius: 22px;
  .svgwave {
    position: absolute;
    width: auto;
    height: auto;
    overflow: visible;
  }
  /* .wavepath {
    position: absolute;
    fill: transparent;
    stroke: transparent;
    stroke-width: 1px;
    width: 200px;
    height: 200px;
  } */
  .foreignobject {
    border-radius: 8px;
    background-size: contain;
    border: 4px solid white;
    display: inline-block;
  }
  text {
    text-transform: uppercase;
    font-family: Arial;
    font-size: 20px;
    fill: white;
  }
  textpath {
    fill-opacity: 1;
  }
  tspan {
    fill: ${(props) => props.theme.colors.white};
  }
`;

const CardBorder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const GlowingCardBorder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
