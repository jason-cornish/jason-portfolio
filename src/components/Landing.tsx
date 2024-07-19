import React from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import LinkButton from "./reusable/LinkButton";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";
import JasonImage from "../images/jason-image.png";
import PlaceIcon from "@mui/icons-material/Place";
import OpenSign from "./open-sign";
import LeftBlob from "./reusable/animated-blob-left";
import CenterBlob from "./reusable/animated-blob-center";
import RightBlob from "./reusable/animated-blob-right";
import RingsOfLights from "./ring-of-lights/rings-of-lights";

const Landing = forwardRef((props: any, homeRef: any) => {
  return (
    <LandingWrapper>
      <RingsOfLights />
      <BackgroundWrapper>
        {/* <NewBodyWrapper></NewBodyWrapper> */}
        <h1>Jason Cornish</h1>
        <div className="mobile-wrapper"></div>
      </BackgroundWrapper>
    </LandingWrapper>
  );
});

export default Landing;

// const styled;
/*
<LeftSide>
          <LeftColumn>
            <div className="profile-circle">
              <img
                src={JasonImage}
                alt="Jason Cornish grinning in front of a forested background."
              />
            </div>
          </LeftColumn>
          <RightColumn>
             <h1>
              👋
              <span>
                {` `}Hi, I'm Jason.
                <br />
              </span>
              <span>Front-End Engineer.</span>
            </h1> 
            <AnimatedText ref={homeRef}>
            <span>👋</span> Hi, I'm Jason.
            <br /> Front-End Engineer.
          </AnimatedText> 
          <h1>Jason Cornish</h1>
          <Wrapper>
            <p className="SubHeaderWide">
              I design and develop elegant online experiences with React,
              Typescript, and Styled-Components. I've been coding for 5 years
              and working professionally for 3.
              {/* <br /> I specialize in coding web applications with React,
            Typescript, and Styled-Components. }
            </p>
             <p className="SubHeaderMobile">
            I like to design and develop intuitive, elegant online
            experiences. I specialize in coding web applications with React,
            Typescript, and StyledComponents.
          </p> }
            <ButtonRow>
              <LinkButton
                content={"About"}
                handleClick={props.handleLinkClick}
                destination={"about"}
              />
              <LinkButton
                content={"Work"}
                handleClick={props.handleLinkClick}
                destination={"work"}
              />
              <LinkButton
                content={"Contact Me"}
                handleClick={props.handleLinkClick}
                destination={"contact"}
              />
            </ButtonRow>
          </Wrapper>
        </RightColumn>
      </LeftSide>
*/

const LandingWrapper = styled(HorizontalWrapper)`
  width: 100%;
  min-height: 550px;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  /* justify-content: center; */
  flex-direction: column;
  h1 {
    font-family: Spectral;
    color: #d0cae6;
    font-size: 50px;
    font-weight: 400;
  }
  padding-top: 150px;
  padding-bottom: 150px;
`;

const LeftSide = styled.div`
  display: flex;
  column-gap: 30px;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
  padding: 30px;
  opacity: 1;
  border-radius: 3px;
  z-index: 0;
  :hover {
    opacity: 1.1;
  }
  .mobile-wrapper {
    display: none;
  }

  @media screen and (max-width: 800px) {
  }
`;

const LeftColumn = styled(VerticalWrapper)`
  height: 100%;
  z-index: 2;
  .profile-circle {
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
      0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 15px; */
    width: 200px;
    height: 200px;
    img {
      margin-bottom: 60px;
      width: 130%;
      object-position: 50% 50%;
    }
  }
  @media screen and (max-width: 1000px) {
    .profile-circle {
      width: 200px;
      height: 200px;
    }
  }
  @media screen and (max-width: 800px) {
    .profile-circle {
      display: none;
    }
  }
`;

const RightColumn = styled(VerticalWrapper)`
  z-index: 1;
  row-gap: 15px;

  h1 {
    font-size: 40px;
    margin: 0px;
    font-family: Archivo;
    span {
      color: #d0cae6;
      font-weight: 600;
    }
    font-weight: 600;
    color: #d0cae6;
  }

  @media screen and (max-width: 1000px) {
    width: 85%;
    margin-right: 0px;
    max-width: 400px;
  }
  /* @media screen and (max-width: 700px) {
    align-items: center;
    padding-top: 150px;
    width: 90%;
    margin-right: 0px;
  } */
`;

const AnimationLayer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  z-index: 0;
  .small {
    bottom: 0px;
  }
`;

const Wrapper = styled(VerticalWrapper)`
  width: 100%;
  row-gap: 15px;
  p {
    /* font-family: Archivo; */
    font-size: 16px;
    color: #dad8eb;
    line-height: 25px;
    max-width: 500px;
    margin: 0px;
  }

  .SubHeaderWide {
    display: flex;
  }

  .SubHeaderMobile {
    display: none;
  }

  /* @media screen and (max-width: 700px) {
    .SubHeaderWide {
      display: none;
    }

    .SubHeaderMobile {
      display: flex;
      margin: 5px 0;
    }
    p {
      line-height: 30px;
    }
  } */
`;

const ButtonRow = styled(HorizontalWrapper)`
  column-gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
