import React, { forwardRef } from "react";
import styled from "styled-components";
import { HorizontalWrapper } from "./reusable/styled-components";
import JasonFloating from "../images/jason-floating.png";

const AboutMe = forwardRef((props, aboutRef: any) => {
  return (
    <AboutMeWrapper ref={aboutRef}>
      {/* <CurveContainer fill={"#4831d4"} inverted={true} aligned="top" /> */}
      <ContentWrapper>
        <TextSection>
          <h1>Over the years,</h1>
          <p>
            I've sharpened my skills in front-end development and UI/UX design
            across projects of diverse use-cases and client needs. I've
            interfaced with both technical and non-technical stakeholders on
            projects, and am adept at communicating and collaborating with both
            audiences.
          </p>
          <p>
            Currently I'm working as a Full-Stack Developer at Apple Maps where
            I'm leading the UI design and front-end development of a workforce
            training and monitoring dashboard. The dashboard reports on the
            productivity and effectiveness of 3500+ technicians, analysts, and
            editors globally by tracking 50,000+ completed work tasks.
          </p>
          {/* <p>
            In this role, I've worked with technical and non-technical
            stakeholders to design data visualizations that tell actionable user
            stories, create UI mockups, and develop a data driven
            React/Typescript application.
          </p> */}
          <p>
            Previously I worked as a Front-End Developer at Zollege, where I
            developed a React application to assist teachers in managing their
            class schedules. The application charted class schedules on a gantt
            chart, allowing teachers to keep up to date with the timeline of
            their current classes and easily plan future ones.
          </p>
        </TextSection>
        <ImageSection>
          <img src={JasonFloating}></img>
        </ImageSection>
      </ContentWrapper>
      {/* <CurveContainer fill={"#4831d4"} inverted={false} aligned="bottom" /> */}
    </AboutMeWrapper>
  );
});

export default AboutMe;

const AboutMeWrapper = styled(HorizontalWrapper)`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  background-color: #4831d4;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 85%;
  padding-top: 50px;
  padding-bottom: 80px;
  display: flex;

  @media screen and (max-width: 1200px) {
    width: 80%;
    padding-bottom: 80px;
  }
  @media screen and (max-width: 700px) {
    padding-top: 20px;
    width: 90%;
  }
`;

const TextSection = styled.div`
  position: relative;
  width: 50%;
  h1 {
    color: #e0e3e7;
    font-size: 50px;
    margin-bottom: 20px;
  }
  p {
    color: #e0e3e7;
    font-family: Archivo;
    font-size: 18px;
    max-width: 600px;
    line-height: 30px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;

    p {
      max-width: 100%;
    }
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 50%;
  padding-left: 50px;
  padding-top: 20px;
  img {
    max-height: 550px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
