import styled from "styled-components";
import AppleMapsBackground from "../images/Apple-Maps-Background-min.png";
import MycoTex from "../images/Myco-Tex.png";
import { ReactComponent as AppleMapsLogo } from "../svg/apple-maps.svg";
import DeadChip from "./reusable/DeadChip";
import ImagePlaceholder from "./reusable/ImagePlaceholder";
import { useState, useMemo, useCallback } from "react";
import { Icon } from "@blueprintjs/core";
import ZollegeBackground from "../images/Zollege-Background-min.png";
import ElliotSmithPlayerBackground from "../images/Elliot-Smith-Player-Background-min.png";
import ArboretumCreekBackground from "../images/Arboretum-Creek-Background-min.png";

const MobileWorkSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const workDictionary: any = useMemo(() => {
    return {
      apple: {
        title: "Senior Front-End Engineer",
        subtitle: "Jun 2022 - Present",
        workPlace: "Apple",
        img: (
          <AppleImage>
            <AppleMapsLogo className="logo" />
            <img src={AppleMapsBackground} alt="Apple Maps"></img>
          </AppleImage>
        ),
        paragraph:
          "Designed and developed workforce monitoring tools in React &amp Typescript to fetch historical data and display key insights into the qualifications, skill readiness, training recency, and workplace performance of 6000+ Apple Maps editors.",
      },
      mycotex: {
        title: "Lead Engineer & Designer",
        subtitle: "Nov 2023 - Apr 2024",
        workPlace: "Myco-Tex",
        img: (
          <MycoTexImage>
            <img
              src={MycoTex}
              alt="Myco-Tex user interface screenshot"
              className="myco-tex-background"
            ></img>
          </MycoTexImage>
        ),
        paragraph:
          "Designed and developed an environmental monitoring React dashboard for mushroom farmers that helped to improve crop yield by displaying live and historical humidity, temperature, and air quality data.",
      },
      zollege: {
        title: "Front-End Engineer",
        subtitle: "Jan - Jun 2022",
        workPlace: "Zollege",
        img: (
          <MycoTexImage>
            <img src={ZollegeBackground} alt="Landing page "></img>
            <ImagePlaceholder />
          </MycoTexImage>
        ),
        paragraph:
          "Designed and built an internal Gantt chart dashboard in React for class instructors to visualize and organize class schedules, along with a fully responsive static website with HTML5, CSS3, Bootstrap, and Javascript.",
      },
      elliotsmith: {
        title: "Full-Stack Engineer",
        subtitle: "Oct 2022 - Dec 2023",
        workPlace: "ElliotSmithPlayer",
        img: (
          <MycoTexImage>
            <img src={ElliotSmithPlayerBackground}></img>
          </MycoTexImage>
        ),
        paragraph:
          "Designed and developed an online jukebox in React for Elliot Smith's live performances, along with a mySQL database and Express API in NodeJS. Users can listen to songs, create accounts, save custom playlists, and search for albums.",
      },
      arboretumcreek: {
        title: "Front-End Engineer",
        subtitle: "Jan - Jun 2022",
        workPlace: "ArboretumCreek.org",
        img: (
          <MycoTexImage>
            <img src={ArboretumCreekBackground}></img>
          </MycoTexImage>
        ),
        paragraph:
          "Volunteered for a non-profit organization to design and develop a static site in HTML, CSS, and Javascript that demonstrates the ecological need to recreate a creek in the Seattle Arboretum park to reduce flooding damage.",
      },
    };
  }, []);

  const cards: any = useMemo(() => {
    return ["apple", "mycotex", "zollege", "elliotsmith", "arboretumcreek"];
  }, []);

  const [currentCardsToRender, setCurrentCardsToRender] = useState<any>([
    cards.length - 2,
    cards.length - 1,
    0,
    1,
    2,
  ]);

  const [shrinkingCardIdx, setShrinkingCardIdx] = useState<undefined | number>(
    undefined
  );

  const [growingCardIdx, setGrowingCardIdx] = useState<undefined | number>(
    undefined
  );

  const [slideTransitionStatus, setSlideTransitionStatus] = useState({
    active: false,
    isForward: true,
  });

  const getCardClassName = useCallback(
    (cardIdx: number, idx: number, cardName: string) => {
      // if (idx === 1) {
      //     return
      // }
      if (shrinkingCardIdx === cardIdx) {
        return `shrinking-card ${cardName}`;
      }
      if (growingCardIdx === cardIdx) {
        return `growing-card ${cardName}`;
      }
      if (selectedIndex === cardIdx) {
        return `selected-card ${cardName}`;
      }
      return `unselected-card ${cardName}`;
    },
    [selectedIndex, shrinkingCardIdx, growingCardIdx]
  );

  const cardsToRender = useMemo(() => {
    let wrapperClassName = "slide-transition-inactive";
    if (slideTransitionStatus.active) {
      wrapperClassName = `${
        slideTransitionStatus.isForward ? "forwards" : "backwards"
      }-slide-transition-active`;
    }
    return (
      <CardsWrapper className={wrapperClassName}>
        {currentCardsToRender.map((cardIdx: any, idx: number) => {
          const cardName = cards[cardIdx];
          const cardData = workDictionary[cardName];

          const className = getCardClassName(cardIdx, idx, cardName);
          return (
            <GalleryCard className={className} key={`${cardName}-${cardIdx}`}>
              <CardContent>
                <CardRow>
                  <CardSubtitle>{cardData.subtitle}</CardSubtitle>
                  <CardTitle>{cardData.title}</CardTitle>
                  <WorkPlace>{cardData.workPlace}</WorkPlace>
                  {cardData.img}
                  <CardRow>
                    <WorkParagraph>{cardData.paragraph}</WorkParagraph>
                  </CardRow>
                </CardRow>
              </CardContent>
            </GalleryCard>
          );
        })}
      </CardsWrapper>
    );
  }, [
    cards,
    currentCardsToRender,
    workDictionary,
    getCardClassName,
    slideTransitionStatus,
  ]);

  const handleUpdateSelectedState = useCallback(
    (
      newSelectedIndex: number,
      newCardsToRender: any,
      isSlideDirectionForwards: boolean
    ) => {
      if (slideTransitionStatus.active) {
        return;
      }
      setShrinkingCardIdx(selectedIndex);
      setGrowingCardIdx(newSelectedIndex);
      setSelectedIndex(newSelectedIndex);
      setSlideTransitionStatus({
        active: true,
        isForward: isSlideDirectionForwards,
      });

      setTimeout(() => {
        setSlideTransitionStatus({
          active: false,
          isForward: false,
        });
        setCurrentCardsToRender(newCardsToRender);
        setShrinkingCardIdx(undefined);
        setGrowingCardIdx(undefined);
      }, 500);
    },
    [selectedIndex, slideTransitionStatus]
  );

  const handleArrowClick = useCallback(
    (isDirectionForwards: boolean) => {
      let newSelectedIndex = 0;
      if (isDirectionForwards) {
        if (selectedIndex === cards.length - 1) {
          newSelectedIndex = 0;
        } else {
          newSelectedIndex = selectedIndex + 1;
        }
      } else if (!isDirectionForwards) {
        if (selectedIndex === 0) {
          newSelectedIndex = cards.length - 1;
        } else {
          newSelectedIndex = selectedIndex - 1;
        }
      }

      let firstCardIdx = newSelectedIndex - 2;
      let secondCardIdx = newSelectedIndex - 1;

      let lastCardIdx = newSelectedIndex + 2;
      let penultimateCardIdx = newSelectedIndex + 1;

      if (newSelectedIndex === 0) {
        firstCardIdx = 3;
        secondCardIdx = 4;
      }
      if (newSelectedIndex === 1) {
        firstCardIdx = 4;
        secondCardIdx = 0;
      }
      if (newSelectedIndex === cards.length - 1) {
        lastCardIdx = 1;
        penultimateCardIdx = 0;
      }
      if (newSelectedIndex === cards.length - 2) {
        lastCardIdx = 0;
      }
      //   [3, 4, 0, 1, 2]

      // [2, 3, 4, 0, 1]

      const newCardsToRender = [
        firstCardIdx,
        secondCardIdx,
        newSelectedIndex,
        penultimateCardIdx,
        lastCardIdx,
      ];
      handleUpdateSelectedState(
        newSelectedIndex,
        newCardsToRender,
        isDirectionForwards
      );
      // setSelectedIndex(newSelectedIndex);
      // setCurrentCardsToRender();
    },
    [cards.length, handleUpdateSelectedState, selectedIndex]
  );

  //   const handleDotClick = useCallback((clickedDotIdx:number) => {

  //     const newCardsArray =

  //   }, [])

  return (
    <MobileWorkSectionWrapper>
      {/* <h1 className="section-title">Work</h1> */}
      <WorkHistoryWrapper>
        <GalleryWrapper>
          <CardsWrapper>
            {cardsToRender}
            {/* {currentCards.map((cardKey) => {
              const cardData = workDictionary[cardKey];
              const cardsIndex = cards.indexOf(cardKey);
              console.log(cardsIndex, selectedIndex);
              return (
                <GalleryCard
                  className={
                    selectedIndex === cardsIndex ? "selected-card" : "card"
                  }
                >
                  <CardContent>
                    <CardRow>
                      <CardSubtitle>{cardData.subtitle}</CardSubtitle>
                      <CardTitle>{cardData.title}</CardTitle>
                      <WorkPlace>{cardData.workPlace}</WorkPlace>
                      {cardData.img}
                      <CardRow>
                        <WorkParagraph>{cardData.paragraph}</WorkParagraph>
                      </CardRow>
                    </CardRow>
                  </CardContent>
                </GalleryCard>
              );
            })} */}
          </CardsWrapper>
        </GalleryWrapper>
      </WorkHistoryWrapper>
      <TimelineNavBar>
        <button
          onClick={() => handleArrowClick(false)}
          className="chevron-button-left"
        >
          <Icon icon="chevron-left" size={35} color={"#c2bcd7"} />
        </button>
        {cards.map((cardKey: any, idx: number) => {
          const cardsIndex = cards.indexOf(cardKey);
          return (
            <Dot
              className={cardsIndex === selectedIndex ? "selected-dot" : "dot"}
              //   onClick={() => {handleDotClick(idx)}}
            />
          );
        })}
        <button
          onClick={() => handleArrowClick(true)}
          className="chevron-button-right"
        >
          <Icon icon="chevron-right" size={35} color="#c2bcd7" />
        </button>
      </TimelineNavBar>
    </MobileWorkSectionWrapper>
  );
};

export default MobileWorkSection;

const MobileWorkSectionWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 485px;
  align-items: center;
  .section-title {
    color: ${(props) => props.theme.colors.white};
    font-family: Cardo;
  }
`;

const WorkHistoryWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  max-width: 100%;
  width: 100%;
  font-family: Cardo;
  /* h1 {
    color: ${(props) => props.theme.colors.white};
  } */
  .section-title {
    color: ${(props) => props.theme.colors.white};
  }
  .forwards-slide-transition-active {
    animation: 500ms ease-in-out forwards slideforwards;

    @keyframes slideforwards {
      0% {
        transform: translate(0px);
      }
      100% {
        transform: translate(-305px);
      }
    }
    @media screen and (max-width: 600px) {
      @keyframes slideforwards {
        0% {
          transform: translate(0px);
        }
        100% {
          transform: translate(-280px);
        }
      }
    }
  }
  .backwards-slide-transition-active {
    animation: 500ms ease-in-out forwards slidebackwards;
    @keyframes slidebackwards {
      0% {
        transform: translate(0px);
      }
      100% {
        transform: translate(305px);
      }
    }
    @media screen and (max-width: 600px) {
      @keyframes slidebackwards {
        0% {
          transform: translate(0px);
        }
        100% {
          transform: translate(280px);
        }
      }
    }
  }
`;

const GalleryWrapper = styled.section`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  /* .selected-card {
    transform: scale(110%);
  } */
`;

const CenteredPlaceHolderCard = styled.div`
  position: absolute;
  width: 340px;
  height: 100%;
`;

const LeftChevron = styled.button`
  /* position: absolute;
  height: 100%;
  width: 100%;
  left: -340px;
  border: 0px;
  background-color: rgba(48, 42, 70, 0.7);
  border-radius: 3px;
  z-index: 2;
  transition: background-color 300ms ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0px;
  padding-bottom: 15px;
  :hover {
    background-color: rgba(70, 63, 94, 0.6);
    cursor: pointer;
  }
  @media screen and (min-width: 600px) {
    padding-right: 30px;
  }
  @media screen and (max-width: 600px) {
    left: -320px;
  } */
`;

const RightChevron = styled.button`
  /* position: absolute;
  height: 100%;
  width: 100%;
  right: -340px;
  border: 0px;
  background-color: rgba(48, 42, 70, 0.7);
  border-radius: 3px;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0px;
  padding-bottom: 15px;
  transition: background-color 300ms ease-in-out;
  :hover {
    background-color: rgba(70, 63, 94, 0.6);
    cursor: pointer;
  }
  @media screen and (min-width: 600px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 600px) {
    right: -320px;
  } */
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* column-gap: 30px; */
  column-gap: 30px;
  position: relative;
  .selected-card {
    opacity: 100%;
    transform: scale(1.1);
  }
  .growing-card {
    animation: 500ms ease-in-out forwards scaleup;
    @keyframes scaleup {
      0% {
        opacity: 70%;
        transform: scale(1);
      }
      100% {
        opacity: 100%;
        transform: scale(1.1);
      }
    }
  }
  /* ::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: -355px;
      border-radius: 3px;
      background-color: rgba(48, 42, 70, 0.5);
    } */

  .shrinking-card {
    animation: 500ms ease-in-out forwards scaledown;
    @keyframes scaledown {
      0% {
        opacity: 100%;
        transform: scale(1.1);
      }
      100% {
        opacity: 70%;
        transform: scale(1);
      }
    }
  }
  .unselected-card {
    opacity: 70%;
  }
  @media screen and (max-width: 600px) {
    column-gap: 20px;
  }
`;

const GalleryCard = styled.article`
  position: relative;
  text-align: left;
  width: 275px;
  min-width: 275px;
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  background-color: #28223e;
  transition: background-color 300ms ease-in-out;
  border: 0px;
  /* cursor: all-scroll; */
  :hover {
    background-color: #38304e;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 2;
  padding: 25px;
  box-sizing: border-box;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContentBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: #150e2b; */
  opacity: 40%;
  left: 0;
  margin-top: -20px;
  z-index: 1;
  filter: blur(4px);
`;

const CardTitle = styled.h1`
  color: ${(props) => props.theme.colors.brightWhite};
  font-size: 20px !important;
  font-weight: 600;
  margin: 0px;
  position: relative;
  z-index: 2;
`;

const CardSubtitle = styled.p`
  margin: 0px;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  a {
    color: ${(props) => props.theme.colors.highlight};
    /* color: #5d42ff; */
    text-decoration: none;
    text-decoration: underline;
    transition: color 300ms ease-in-out;
    :hover {
      color: #9ac608;
    }
  }
  span {
    color: ${(props) => props.theme.colors.highlight};
  }
  margin-bottom: 2px;
`;

const WorkPlace = styled.h2`
  margin: 0px;
  color: ${(props) => props.theme.colors.highlight};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const WorkParagraph = styled.div`
  position: relative;
  word-wrap: break-word;
  font-size: 14px;
  margin: 0px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.white};
`;

const ChipRow = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  row-gap: 5px;
`;

const AppleImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-bottom: 15px;
  /* width: 250px; */

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 2px;
    z-index: 2;
    overflow: hidden;
    filter: brightness(85%);
  }
  .logo {
    position: absolute;
    height: 120px;
    margin: 0px;
    z-index: 3;
    opacity: 100%;
    fill: black;
  }
`;

const MycoTexImage = styled.div`
  position: relative;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  img {
    border-radius: 3px;
    width: 100%;
    object-fit: cover;
  }
`;

const CardBackgroundImage = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;

  .apple-background {
    object-fit: cover;
    border-radius: 2px;
    height: 100%;
    width: 400%;
    filter: brightness(35%);
  }
  .myco-tex-background {
    width: 100%;
    height: 100%;
    background-color: #1d2027;
    /* object-fit: cover;
    border-radius: 2px;
    width: 400px;
    filter: brightness(35%); */
  }
`;

const TimelineNavBar = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  background-color: #28223e;
  border-radius: 3px;
  height: 4px;
  column-gap: 20px;
  align-items: center;
  .selected-dot {
    transform: scale(135%);
    background-color: ${(props) => props.theme.colors.darkerHighlight};
  }
  .dot {
    transform: scale(100%);
    background-color: #504968;
    :hover {
      background-color: #6e794b;
      cursor: pointer;
    }
  }
  .chevron-button-left {
    position: absolute;
    left: -70px;
    background-color: ${(props) => props.theme.colors.opaque3};
    border: 0px;
    padding: 10px;
    border-radius: 3px;
    transition: background-color 300ms ease-in-out;
    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.opaque4};
    }
  }
  .chevron-button-right {
    padding: 10px;
    position: absolute;
    right: -70px;
    background-color: ${(props) => props.theme.colors.opaque3};
    border: 0px;
    border-radius: 3px;
    transition: background-color 300ms ease-in-out;
    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.opaque4};
    }
  }
`;

const Dot = styled.button`
  position: relative;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 0px;
  transition: all 300ms ease-in-out;
`;
