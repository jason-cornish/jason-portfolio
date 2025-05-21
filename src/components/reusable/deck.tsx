import React, { useContext, useState } from "react";
import styled from "styled-components";
import JasonCard from "./jason-card";

const Deck = () => {
  const [heldCard, setHeldCard] = useState<string | null>(null);
  const offsetMultiplier = 3;

  const cards = ["jason", "2", "3", "4", "5", "6", "7", "8"];

  const handleClickTopCard = (clickedCardName: string) => {
    setHeldCard(clickedCardName);
  };

  return (
    <DeckWrapper>
      {/* <h1 className="draw-button">Draw 3 Cards</h1> */}
      {/* <JasonCard isFrontSideUp={false} isCardDrawn={false} key={`jason-idx`} /> */}
      {cards.reverse().map((card, idx) => {
        return idx === 0 ? (
          <JasonCard
            isFrontSideUp={false}
            isCardDrawn={false}
            key={`${card}-idx`}
          />
        ) : (
          <CardBackside
            offset={offsetMultiplier * idx}
            className={idx === 0 ? "top-deck-card" : "deck-card"}
          />
          // <div />
        );
        // return idx === 0 ? (
        //   <JasonCard
        //     isFrontSideUp={false}
        //     // offset={offsetMultiplier * idx}
        //     // className="top-card"
        //     // onClick={() => handleClickTopCard(card)}
        //   />
        // ) : (
        //   // <CardBackside offset={offsetMultiplier * idx} />
        //   <div />
        // );
        return (
          <CardBackside
            offset={offsetMultiplier * idx}
            className={idx === 0 ? "top-deck-card" : "deck-card"}
          />
        );
      })}
      {/* <CardSlot /> */}
    </DeckWrapper>
  );
};

export default Deck;

const DeckWrapper = styled.div`
  position: relative;
  border: 0;
  padding: 0px;
  z-index: 0;
  height: 325px;
  width: 235px;
  transform: rotateX(10deg);
  transform-style: preserve-3d;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  /* background-color: ${(props) => props.theme.colors.opaque1}; */
  /* animation: float 5s cubic-bezier(0.25, 0.5, 1, 1) infinite; */
  .draw-button {
    position: absolute;
    top: -85px;
    color: ${(props) => props.theme.colors.grey};
    font-size: 50px;
    transform: rotateX(10deg);
    margin: auto auto;
    font-family: Cardo;
    cursor: pointer;
    :hover {
      transition: color 0.5s ease-in-out;
      color: ${(props) => props.theme.colors.white};
    }
  }

  @keyframes float {
    0% {
      translate: 0px 0px;
    }
    50% {
      translate: 0px 10px;
    }
    100% {
      translate: 0px 0px;
    }
  }
  /* background-color: rgba(20, 13, 39, 0.5); */
`;

const TopCard = styled.div<{ offset: number }>`
  z-index: 3;
  /* transform: rotateX(20deg); */
  transition: outline 500ms ease-in-out;

  position: absolute;
  outline: 2px solid #948594;
  height: 325px;
  width: 235px;
  border-radius: 22px;
  transform-style: preserve-3d;
  /* backface-visibility: hidden; */
  background-color: #0a0614;
  box-sizing: border-box;
  background-color: rgb(38, 30, 61);
  background: radial-gradient(
    circle,
    rgba(38, 30, 61, 1) 10%,
    rgba(10, 6, 20, 1) 47%,
    rgba(38, 30, 61, 1) 99%
  );
  top: ${(props) => `${props.offset}px`};
  transform: rotate(0deg) rotateX(10deg);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  :hover {
    outline: 2px solid #685dff;
    cursor: pointer;
    animation: 600ms hovercard ease-in-out;
    animation-fill-mode: forwards;
    @keyframes hovercard {
      0% {
        top: ${(props) => `-${props.offset}px`};
        transform: scale(1) rotate(0deg) rotateX(10deg);
      }
      100% {
        top: ${(props) => `-${props.offset + 15}px `};
        transform: scale(1.02) rotate(0deg) rotateX(10deg);
      }
    }
  }
`;

const CardSlot = styled.div`
  position: absolute;
  height: 325px;
  width: 235px;
  top: 15px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.opaque1};
  z-index: 1;
  border-radius: 22px;
  /* perspective: 1000px; */
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateX(10deg);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: background-color 600ms ease-in-out;
  cursor: pointer;
  :hover {
    background-color: rgba(230, 202, 202, 0.08);
  }
`;

const CardBackside = styled.div<{ offset: number }>`
  position: absolute;
  border: 2px solid #948594;
  height: 100%;
  width: 100%;
  transform: scale(0.9);
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
  top: ${(props) => `${props.offset}px`};
  transform: rotateX(5deg);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
