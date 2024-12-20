import RotateRightIcon from "@mui/icons-material/RotateRight";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import JasonBeachImage from "../images/jason-beach.jpg";
import { ReactComponent as TXFlag } from "../svg/tx-flag.svg";

const JasonCard = () => {
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [selectedSideOfCard, setSeletedSideOfCard] = useState("front");
  const [isCardTapped, setIsCardTapped] = useState(false);

  console.log(isCardTapped);
  const handleCardClick = () => {
    setIsCardTapped(!isCardTapped);
  };

  return (
    <JasonCardWrapper>
      <Card
        className={isCardTapped ? "tappedCard" : "untappedCard"}
        onClick={handleCardClick}
      >
        <CardTitleRow>
          <InsetCardTitleRow>
            <LeftColumn>
              <h1>Jason Cornish</h1>
            </LeftColumn>
            <RightColumn>
              <Chip>
                <p className="numerical-text">3</p>
              </Chip>
              <Chip>
                <p>YR</p>
              </Chip>
              <Chip>
                <p>XP</p>
              </Chip>
            </RightColumn>
          </InsetCardTitleRow>
        </CardTitleRow>
        <CardBackground>
          <OpaqueLayer></OpaqueLayer>
          <img
            src={JasonBeachImage}
            alt="Jason Cornish standing before a Mexican beach at sunset."
          ></img>
        </CardBackground>
        <CardDescriptionSection>
          <CharacterDescriptionWrapper>
            <CharacterDescriptionInset>
              <LeftColumn>
                <h1>
                  Sr. Front-End Engineer <span className="hyphen" /> UI/UX
                  Designer
                </h1>
              </LeftColumn>
              <RightColumn>
                <TXFlag />
              </RightColumn>
            </CharacterDescriptionInset>
          </CharacterDescriptionWrapper>
          <DescriptionBodyWrapper>
            <p>React, ES6 Javascript, Typescript, CSS3, HTML5</p>
            <p>
              Upon joining the team, Jason Cornish adds 3 years of experience
              designing and developing responsive, intuitive, and elegant online
              experiences.{" "}
            </p>
            <TapAbility>
              <RotateIconWrapper>
                <RotateRightIcon className="rotate-icon" />
              </RotateIconWrapper>
              <p>: Tap to reveal experience and component library</p>
            </TapAbility>
          </DescriptionBodyWrapper>
        </CardDescriptionSection>
        <BottomOverlay></BottomOverlay>
      </Card>
    </JasonCardWrapper>
  );
};

export default JasonCard;

const JasonCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 0;
  .tappedCard {
    display: flex;

    animation: rotateCard 0.5s ease-out;
    animation-fill-mode: forwards;
    @keyframes rotateCard {
      0% {
        transform: rotate(0deg);
      }
      40% {
        transform: rotate(-15deg);
      }
      50% {
        transform: rotate(-10deg);
      }
      55% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(90deg);
      }
    }
  }
  .untappedCard {
    display: flex;
    transform: rotate(0deg) 1s linear;
    animation: float 5s cubic-bezier(0.25, 0.5, 1, 1) infinite;

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
    :hover {
      transform: translate(0px, 0px) 1s;
      animation-play-state: paused;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  justify-content: space-between;
  border-radius: 22px;
  box-sizing: border-box;
  height: 650px;
  width: 470px;
  background-color: ${(props) => props.theme.colors.opaque2};
  background-color: rgba(20, 13, 39, 0.5);
  padding: 30px 25px 25px 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  translate: 0px 0px;
`;

const CardTitleRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 3px solid #6b5d92;
  outline: 1px solid rgba(20, 13, 39, 0.9);
  z-index: 3;
  opacity: 100%;
  border-radius: 12px / 22px;
  opacity: 90%;
  background-color: rgba(20, 13, 39, 0.45);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const InsetCardTitleRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
  width: 100%;
  /* background-color: ${(props) => props.theme.colors.grey}; */
  /* background-color: rgba(20, 13, 39, 0.7); */
  background: rgb(20, 13, 39);
  background: linear-gradient(
    90deg,
    rgba(20, 13, 39, 0.4) 1%,
    rgba(20, 13, 39, 0.8) 46%,
    rgba(20, 13, 39, 0.6) 99%
  );
  -webkit-box-shadow: inset 0px 5px 4px -4px rgba(190, 184, 207, 0.78);
  -moz-box-shadow: inset 0px 5px 4px -4px rgba(190, 184, 207, 0.78);
  box-shadow: inset 0px 5px 4px -4px rgba(190, 184, 207, 0.78);
  border: 1px #000 solid;
  opacity: 90%;
  border-radius: 11px / 21px;
  /* border-top-left-radius: 10px 20px;
  border-bottom-left-radius: 10px 20px; */

  box-sizing: border-box;
  padding: 7px;
  padding-left: 20px;
  h1 {
    font-size: 20px !important;
    margin: 0px;
    font-weight: 600;
  }
`;

const LeftColumn = styled.div`
  p {
    display: flex;
    flex-direction: row;
    white-space: nowrap;
  }
  span {
    white-space: nowrap;
    :after {
      display: inline-block;
      height: 2px;
      width: 15px;
      margin: 2px 3px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 1px;
      content: "";
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  column-gap: 5px;
  svg {
    margin-right: 5px;
    width: 25px;
    height: auto;
  }
`;

const Chip = styled.div`
  display: flex;
  border-radius: 50%;
  background: rgb(135, 121, 172);
  background: radial-gradient(circle, #988bbd 23%, #493972 59%, #8d81b1 99%);
  padding: 2px;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 24px;
  height: 24px;
  font-family: Cardo;
  color: #0a0614;
  padding-left: 3px;
  .numerical-text {
    font-size: 18px;
  }
  /* border: 2px solid #6b5d92; */
  outline: 1px solid rgba(20, 13, 39, 0.8);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    position: relative;
    z-index: 1;
    width: 550px;
    height: auto;
    object-fit: cover;
    margin-bottom: 50px;
    opacity: 85%;
    filter: blur(0.2px);
  }
`;

const OpaqueLayer = styled.div`
  position: absolute;
  background-color: rgba(20, 13, 39, 0.45);
  opacity: 1;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const CardDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  bottom: 0px;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  background-color: rgba(20, 13, 39, 0.5);
  border-radius: 10px;
  border: 3px solid #6b5d92;
  outline: 1px solid rgba(20, 13, 39, 0.9);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const CharacterDescriptionWrapper = styled(CardTitleRow)`
  position: relative;
  top: -42px;
  left: -10px;
  width: calc(100% + 15px);
`;

const CharacterDescriptionInset = styled(InsetCardTitleRow)`
  h1 {
    font-size: 16px !important;
    font-weight: bold;
  }
`;

const DescriptionBodyWrapper = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  opacity: 85%;
  padding: 15px;
  p {
    margin: 0px;
    color: ${(props) => props.theme.colors.white};
    font-family: Cardio;
    font-size: 18px;
  }
`;

const TapAbility = styled.div`
  display: flex;
  column-gap: 5px;
`;

const RotateIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ababab;
  border-radius: 50%;
  svg {
    position: relative;
    height: 18px;
    width: 18px;
  }
`;

const BottomOverlay = styled.div`
  position: absolute;
  border: 120px solid rgba(20, 13, 39, 0.45);
  left: -210px;
  width: 650px;
  border-radius: 50%;
  bottom: -70px;
  height: 900px;
  z-index: 2;
`;
