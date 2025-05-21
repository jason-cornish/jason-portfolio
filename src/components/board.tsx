import React, { useContext, useState } from "react";
import styled from "styled-components";
import JasonCard from "./reusable/jason-card";
import Deck from "./reusable/deck";
import Card from "./reusable/card";

const Board = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [tappedCard, setTappedCard] = useState<boolean | number>(false);

  /*Factor to apply to component sizing */
  const [sizeFactor, updateSizeFactor] = useState(1.0);

  return (
    <BoardWrapper>
      <BackgroundWrapper className={isGameStarted ? "zoomed-in" : "zoomed-out"}>
        <CenterWrapper>
          {/* <Hand>
            <JasonCard isFrontSideUp={true} isCardDrawn={true} />
          </Hand> */}
          <BoardComponent>
            <PlayRow>
              <CardSlot
                className={tappedCard === 1 ? "tapped-slot" : "untapped-slot"}
                onClick={() => setTappedCard(1)}
              ></CardSlot>
              <CardSlot
                className={tappedCard === 2 ? "tapped-slot" : "untapped-slot"}
                onClick={() => setTappedCard(2)}
              ></CardSlot>
              <CardSlot
                className={tappedCard === 3 ? "tapped-slot" : "untapped-slot"}
                onClick={() => setTappedCard(3)}
              ></CardSlot>
            </PlayRow>
            <DeckRow>
              <Deck />
            </DeckRow>
          </BoardComponent>
        </CenterWrapper>
        <h1 onClick={() => setIsGameStarted(true)} className="play-button">
          Play
        </h1>
      </BackgroundWrapper>
    </BoardWrapper>
  );
};

export default Board;

const BoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 0;
  display: flex;
  align-items: center;
  position: relative;
  .zoomed-out {
    transform: scale(0.4);
  }
  .zoomed-in {
    transition: transform 2s ease-in-out;
    animation: 3s ease-in-out zoomin;
    animation-fill-mode: forwards;
    @keyframes zoomin {
      0% {
        transform: scale(0.4);
      }
      /* 20% {
        transform: scale(0.37);
      } */
      100% {
        transform: scale(0.9);
      }
    }
  }
  .examining {
    transform: scale(1.5);
  }
`;

const Hand = styled.div``;

const BoardComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  row-gap: 50px;
  transform: rotateX(10deg);
`;

const DeckRow = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const PlayRow = styled.div`
  display: grid;
  grid-template-columns: 220px 220px 220px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  column-gap: 100px;
  perspective: 1000px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  /* perspective: 1000px; */
  .tapped-slot {
    animation: 0.8s ease-out 0s rotateCard;
    //0.3s linear 0.5s flipcard
    animation-fill-mode: forwards;
    @keyframes flipcard {
      0% {
        transform: rotate(90deg) rotateY(0deg);
      }
      100% {
        transform: rotate(90deg) rotateY(-180deg);
      }
    }

    @keyframes rotateCard {
      0% {
        transform: rotate(0deg) rotateX(10deg);
      }
      40% {
        transform: rotate(-15deg) rotateX(6deg);
      }
      50% {
        transform: rotate(-10deg) rotateX(5deg);
      }
      55% {
        transform: rotate(0deg) rotateX(4deg);
      }
      100% {
        transform: rotate(90deg) rotateX(0deg);
      }
    }
  }
`;

const CardSlot = styled.div`
  height: 278px;
  width: 220px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.opaque1};
  z-index: 1;
  border-radius: 22px;
  transform: rotateX(15deg) scale(1.1);
  transform-style: preserve-3d;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: background-color 600ms ease-in-out;
  cursor: pointer;
  :hover {
    background-color: rgba(230, 202, 202, 0.08);
  }
`;

const DeckSlot = styled(CardSlot)`
  height: 280px;
  width: 195px;
`;

const BackgroundWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: CardSlot;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  opacity: 1;
  z-index: 5;

  /* h1 {
    font-family: Cardo;
    color: ${(props) => props.theme.colors.white};
    opacity: 1;
    font-size: 50px;
    font-weight: 500;
    margin: 0px;
  } */
  .play-button {
    position: absolute;
    color: ${(props) => props.theme.colors.grey};
    margin: auto auto;
    font-size: 200px;
    font-family: Cardo;
    bottom: -300px;
    cursor: pointer;
    :hover {
      transition: color 0.5s ease-in-out;
      color: ${(props) => props.theme.colors.white};
    }
  }
  h2 {
    font-family: Cardo;
    color: ${(props) => props.theme.colors.purple};
    opacity: 1;
    font-size: 30px;
    font-weight: 500;
    margin: 0px;
  }
  :hover {
  }
  .mobile-wrapper {
    display: none;
  }

  @media screen and (max-width: 800px) {
  }
`;

const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(208, 202, 230, 0.05); */
  /* box-shadow: 0 3px 7px 0 ${(props) => props.theme.colors.darkOpaque2},
    0 1px 2px 0 ${(props) => props.theme.colors.darkOpaque2}; */
  border-radius: 3px;
  padding: 30px;
  transition: background-color, height 700ms ease-in-out;
  /* cursor: pointer; */
  /* :hover {
    background-color: rgba(208, 202, 230, 0.1);
    height: 500px;
  } */
  .display-navigator {
    display: flex;
  }
`;
