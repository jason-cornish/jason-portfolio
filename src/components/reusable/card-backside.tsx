import React, { useContext, useState } from "react";
import styled from "styled-components";

interface PropsInterface {
  isCardTapped: boolean;
  clickHandler: (cardSide: string) => void;
  className: string;
}

const CardBackside = (props: PropsInterface) => {
  const { isCardTapped, clickHandler, className } = props;

  return (
    <CardBacksideWrapper
      onClick={() => clickHandler("back")}
      className={className}
    >
      {/* <SidewaysWrapper>
        <ColumnLeft>
          <h1>test text</h1>
        </ColumnLeft>
        <ColumnRight>
          <h1>test text</h1>
        </ColumnRight>
      </SidewaysWrapper> */}
    </CardBacksideWrapper>
  );
};

export default CardBackside;

const CardBacksideWrapper = styled.div`
  position: absolute;
  border: 2px solid #948594;
  height: 100%;
  width: 100%;
  border-radius: 22px;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  background-color: #0a0614;
  box-sizing: border-box;
  background-color: rgb(38, 30, 61);
  background: radial-gradient(
    circle,
    rgba(38, 30, 61, 1) 10%,
    rgba(10, 6, 20, 1) 47%,
    rgba(38, 30, 61, 1) 99%
  );
  :hover {
    border: 2px solid ${(props) => props.theme.colors.white};
    transition: border 0.6s ease-in-out;
  }
  /* top: -2px; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const SidewaysWrapper = styled.div`
  display: flex;
  /* transform: rotate(-90deg); */
  /* transform-origin: center; */
  height: 100%;
  width: 100%;
  h1 {
    margin: 0px;
    color: ${(props) => props.theme.colors.white};
  }
`;

const ColumnLeft = styled.div`
  display: flex;
`;

const ColumnRight = styled.div`
  display: flex;
`;
