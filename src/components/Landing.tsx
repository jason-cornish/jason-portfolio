import React from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";

const Landing = () => {
  return (
    <LandingWrapper>
      <AnimatedText>
        Hi, I'm Jason.
        <br /> Front-End Web Developer.
      </AnimatedText>
      <Wrapper>
        <p>
          I like to design and develop intuitive, elegant online experiences.
          <br /> I specialize in coding web applications with React, Typescript,
          and StyledComponents.
        </p>
        <ButtonRow>
          <Button>Work</Button>
          <Button>Contact Me</Button>
          <Button>Resume</Button>
        </ButtonRow>
      </Wrapper>
    </LandingWrapper>
  );
};

export default Landing;

const LandingWrapper = styled(VerticalWrapper)`
  width: 80%;
  height: 850px;
  padding-top: 150px;
  box-sizing: border-box;
  column-gap: 40px;
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
  font-size: 80px;
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
`;

const Wrapper = styled(VerticalWrapper)`
  width: 100%;

  p {
    font-family: Archivo;
    font-size: 26px;
    color: #e0e3e7;
    line-height: 40px;
  }
`;

const ButtonRow = styled(HorizontalWrapper)`
  column-gap: 20px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  border: 2px solid #d8d8d8;
  background-color: transparent;
  color: #e0e3e7;
  padding: 7px 25px;
  font-size: 22px;
  font-weight: 200;
  cursor: pointer;
`;
