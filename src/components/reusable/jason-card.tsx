import RotateRightIcon from "@mui/icons-material/RotateRight";
import React, { useContext, useState, useMemo } from "react";
import styled from "styled-components";
import JasonBeachImage from "../../images/jason-beach.jpg";
import { ReactComponent as TXFlag } from "../../svg/tx-flag.svg";
import CardBackside from "./card-backside";
import GlowingCardOutline from "./glowing-card-outline";

interface PropsInterface {
  isFrontSideUp: boolean;
  isCardDrawn: boolean;
}

const JasonCard = (props: PropsInterface) => {
  const { isFrontSideUp, isCardDrawn } = props;
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isFrontSideVisible, setIsFrontSideVisible] = useState(isFrontSideUp);
  const [isCardBeingExamined, setIsCardBeingExamined] = useState(false);
  const [isCardTapped, setIsCardTapped] = useState(false);

  const handleCardClick = () => {
    // setIsCardTapped(!isCardTapped);
    if (!isCardDrawn) {
      console.log("seting to is true");
      setIsFrontSideVisible(true);
      setIsCardBeingExamined(true);
    }
  };

  const cardClassName = useMemo(() => {
    if (!isCardDrawn) {
      return "library card";
    } else
      return isCardTapped
        ? "tapped-front-card card"
        : "untapped-front-card card";
  }, [isCardDrawn, isCardTapped]);

  return (
    <JasonCardWrapper>
      <Card className={cardClassName} onClick={handleCardClick}>
        <CardWrapper>
          <CardFrontSide
            className={isFrontSideVisible ? "front-visible" : "front-hidden"}
          >
            <CardTitleRow>
              <InsetCardTitleRow>
                <LeftColumn>
                  <CardTitle>Jason Cornish</CardTitle>
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
                  Upon joining the team, Jason Cornish adds 3 years of expertise
                  designing and developing responsive, intuitive, and elegant
                  online experiences.
                </p>
                <TapAbility>
                  <RotateIconWrapper>
                    <RotateRightIcon className="rotate-icon" />
                  </RotateIconWrapper>
                  <p>Tap to reveal experience and component library</p>
                </TapAbility>
              </DescriptionBodyWrapper>
            </CardDescriptionSection>
          </CardFrontSide>
          <CardBackside
            className={isFrontSideVisible ? "back-hidden" : "back-visible"}
            isCardTapped={isCardTapped}
            clickHandler={handleCardClick}
          ></CardBackside>
        </CardWrapper>

        {/* <BottomOverlay></BottomOverlay> */}
        {/* <GlowingCardOutline /> */}
      </Card>
    </JasonCardWrapper>
  );
};

export default JasonCard;

const JasonCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 0;
  /* height: 650px;
  width: 470px; */
  z-index: 5;
  transform: rotateX(5deg) translateY(-400px);
  transition: 2s transform ease-in-out;
  .card {
    top: 0px;
  }
  /* .library {
    transform: rotate(0deg) rotateX(10deg);
  } */
  /* .tapped-front-card {
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
  } */

  /* .tapped-back-card {
    position: absolute;
    animation: 0.5s ease-out 0s rotateBackCard;
    //0.5s linear 0.5s flipBackCard
    animation-fill-mode: forwards;
    @keyframes flipBackCard {
      0% {
        transform: rotateX(-180deg) rotate(90deg);
      }
      100% {
        transform: rotateX(0deg) rotate(90deg);
      }
    }

    @keyframes rotateBackCard {
      0% {
        transform: rotate(0deg) rotateX(10deg);
      }
      40% {
        transform: rotate(-15deg) rotateX(10deg);
      }
      50% {
        transform: rotate(-10deg) rotateX(10deg);
      }
      55% {
        transform: rotate(0deg) rotateX(10deg);
      }
      100% {
        transform: rotate(90deg) rotateX(10deg);
      }
    }
  } */

  .untapped-front-card {
    transform: rotateY(0deg) 1s linear rotateX(10deg);
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
      // transform: translate(0px, 0px) 1s;
      //animation-play-state: paused;
      outline: 3px solid #cfcdcd;
      transition: outline 0.3s;
    }
  }
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 22px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.opaque2};
  background-color: rgba(20, 13, 39, 0.5);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  translate: 0px 0px;
  padding: 0px;
`;

const CardWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  .front-visible {
    transform: rotate(0deg);
    /* animation: 0.8s ease-out 0s rotateCard; */
    /* animation: 0.3s linear 0.5s flipcard;
    animation-fill-mode: forwards;
    @keyframes flipcard {
      0% {
        transform: rotateY(-180deg);
      }
      100% {
        transform: rotateY(0deg);
      }
    } */
  }
  .front-hidden {
    transform: rotateY(-180deg);
  }
  .back-visible {
    transform: rotateX(0deg);
  }
  .back-hidden {
    display: none;
    transform: rotate(-180deg);
    backface-visibility: hidden;
    /* display: none;
    animation: 0.3s linear 0.5s flipcard;
    animation-fill-mode: forwards;
    @keyframes flipcard {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(-180deg);
      }
    } */
  }
`;

const CardFrontSide = styled.div`
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 10px;
  /* padding: 30px 25px 25px 20px; */
`;

const CardTitleRow = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 205px;
  left: 0px;
  top: 0px;
  border: 2px solid #6b5d92;
  outline: 0.8px solid rgba(20, 13, 39, 0.9);
  z-index: 3;
  opacity: 100%;
  border-radius: 8px / 16px;
  /* opacity: 90%; */
  font-size: 10%;
  /* transform: scale(0.5); */
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
  /* opacity: 90%; */
  border-radius: 11px / 21px;
  /* border-top-left-radius: 10px 20px;
  border-bottom-left-radius: 10px 20px; */
  box-sizing: border-box;
  padding: 3px 5px 3px 10px;
`;

const CardTitle = styled.h1`
  font-family: Cardo;
  font-size: 10px;
  margin: 0px;
  font-weight: 600;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.white};
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
      height: 1px;
      width: 8px;
      margin: 1px 1px;
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
    width: 15px;
    height: auto;
  }
`;

const Chip = styled.div`
  display: flex;
  border-radius: 50%;
  background: rgb(135, 121, 172);
  background: radial-gradient(circle, #988bbd 23%, #493972 59%, #8d81b1 99%);
  padding: 2px;
  font-size: 9px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  width: 12px;
  height: 12px;
  font-family: Cardo;
  color: #0a0614;
  padding-left: 3px;
  .numerical-text {
    font-size: 13px;
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
    width: 350px;
    height: auto;
    object-fit: cover;
    opacity: 100%;
    filter: blur(0.2px);
  }
`;

const OpaqueLayer = styled.div`
  position: absolute;
  background-color: rgba(20, 13, 39, 0.4);
  opacity: 1;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const CardDescriptionSection = styled.div`
  /* transform: scale(0.5); */
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
  width: 195px;
  height: 100px;
  margin-bottom: 10px;
  background-color: rgba(20, 13, 39, 0.5);
  border-radius: 10px;
  border: 2px solid #6b5d92;
  outline: 1px solid rgba(20, 13, 39, 0.9);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const CharacterDescriptionWrapper = styled(CardTitleRow)`
  position: relative;
  top: -27px;
  left: -10px;
  width: 210px;
`;

const CharacterDescriptionInset = styled(InsetCardTitleRow)`
  padding: 5px 5px 5px 5px;
  h1 {
    font-size: 8px !important;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
    font-family: Cardo;
    margin: 0px;
  }
`;

const DescriptionBodyWrapper = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  bottom: 0px;
  /* opacity: 85%; */
  padding: 5px;
  p {
    margin: 0px;
    color: ${(props) => props.theme.colors.white};
    font-family: Cardio;
    font-size: 9px;
  }
`;

const TapAbility = styled.div`
  display: flex;
  column-gap: 7px;
  padding-left: 2px;
  align-items: center;
`;

const RotateIconWrapper = styled.div`
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ababab;
  border-radius: 50%;
  svg {
    position: relative;
    height: 13px;
    width: 13px;
  }
`;

const BottomOverlay = styled.div`
  position: absolute;
  border: 120px solid rgba(20, 13, 39, 1);
  left: -230px;
  width: 700px;
  border-radius: 50%;
  bottom: -70px;
  height: 900px;
  z-index: 2;
`;
