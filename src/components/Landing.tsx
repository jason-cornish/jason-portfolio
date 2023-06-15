import React from "react";
import styled from "styled-components";
import LinkButton from "./reusable/LinkButton";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";

const Landing = (props: any) => {
  return (
    <LandingWrapper>
      <AnimatedText>
        Hi, I'm Jason.
        <br /> Front-End Web Developer.
      </AnimatedText>
      <Wrapper>
        <p className="SubHeaderWide">
          I like to design and develop intuitive, elegant online experiences.
          <br /> I specialize in coding web applications with React, Typescript,
          and StyledComponents.
        </p>
        <p className="SubHeaderMobile">
          I like to design and develop intuitive, elegant online experiences. I
          specialize in coding web applications with React, Typescript, and
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
    </LandingWrapper>
  );
};

export default Landing;

const LandingWrapper = styled(VerticalWrapper)`
  width: 85%;
  padding-top: 200px;
  padding-bottom: 200px;
  box-sizing: border-box;
  column-gap: 40px;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    align-items: center;
    padding-top: 150px;
    padding-bottom: 200px;
    width: 90%;
  }
`;

const AnimatedText = styled.h1`
  display: inline-block;
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab,
    #4831d4
  );
  background-size: 400% 400%;
  animation: gradient 25s ease infinite;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
  margin: 0px;

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
