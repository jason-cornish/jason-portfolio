import React from "react";
import { forwardRef } from "react";
import styled from "styled-components";
import AnimatedBlob from "./reusable/animated-blob";
import LinkButton from "./reusable/LinkButton";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";

const Landing = forwardRef((props: any, homeRef: any) => {
  return (
    <LandingWrapper>
      <LeftColumn>
        <AnimatedText ref={homeRef}>
          Hi, I'm Jason.
          <br /> Front-End Web Developer.
        </AnimatedText>
        <Wrapper>
          <p className="SubHeaderWide">
            I like to design and develop intuitive, elegant online experiences.
            <br /> I specialize in coding web applications with React,
            Typescript, and StyledComponents.
          </p>
          <p className="SubHeaderMobile">
            I like to design and develop intuitive, elegant online experiences.
            I specialize in coding web applications with React, Typescript, and
            StyledComponents.
          </p>
          <ButtonRow>
            <LinkButton content={"About"} handleClick={props.handleLinkClick} />
            <LinkButton content={"Work"} handleClick={props.handleLinkClick} />
            <LinkButton
              content={"Contact Me"}
              handleClick={props.handleLinkClick}
            />
          </ButtonRow>
        </Wrapper>
      </LeftColumn>
      <RightColumn>
        <AnimationLayer>
          <AnimatedBlob />
        </AnimationLayer>
      </RightColumn>
    </LandingWrapper>
  );
});

export default Landing;

const LandingWrapper = styled(HorizontalWrapper)`
  width: 85%;
  box-sizing: border-box;
`;

const LeftColumn = styled(VerticalWrapper)`
  margin-right: 150px;
  padding-top: 200px;
  padding-bottom: 200px;

  @media screen and (max-width: 1200px) {
    padding-top: 150px;
    padding-bottom: 150px;
    width: 80%;
    margin-right: 0px;
  }
  @media screen and (max-width: 700px) {
    align-items: center;
    padding-top: 150px;
    padding-bottom: 150px;
    width: 90%;
    margin-right: 0px;
  }
`;

const RightColumn = styled(VerticalWrapper)`
  height: 100%;
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const AnimationLayer = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const AnimatedText = styled.h1`
  display: inline-block;
  background-color: #e0e3e7;
  /* background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab,
    #4831d4
  );
  background-size: 400% 400%;
  animation: gradient 25s ease infinite; */
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  margin: 0px;
  font-weight: 600;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  span {
    font-size: 50px;
  }
  @media screen and (max-width: 700px) {
    font-size: 55px;
    line-height: 70px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Wrapper = styled(VerticalWrapper)`
  width: 100%;

  p {
    font-family: Archivo;
    font-size: 20px;
    color: #e0e3e7;
    line-height: 40px;
  }

  .SubHeaderWide {
    display: flex;
  }

  .SubHeaderMobile {
    display: none;
  }

  @media screen and (max-width: 700px) {
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
  }
`;

const ButtonRow = styled(HorizontalWrapper)`
  column-gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
