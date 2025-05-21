import React, { forwardRef } from "react";
import styled from "styled-components";
import { HorizontalWrapper } from "./reusable/styled-components";
import JasonFloating from "../images/jason-floating.png";
import JasonCornish from "../images/jason_cornish.jpeg";

const AboutMe = forwardRef((props, aboutRef: any) => {
  return (
    <AboutMeWrapper ref={aboutRef}>
      {/* <CurveContainer fill={"#4831d4"} inverted={true} aligned="top" /> */}
      <ContentWrapper>
        <ImageSection>
          <img src={JasonCornish}></img>
        </ImageSection>
        <TextSection>
          <Heading>Over the years,</Heading>
          <p>I've designed and engineered web applications for a diverse smattering of use cases and projects including an online jukebox, web-based Gantt chart, workforce management dashboard, and more.</p>
          <br/>
          <p>
            Having powered dozens of applications with <span>React</span> & <span>Typescript</span>, I can admit to being a bit <span>React</span> obsessed. While I'm most excited about these Front-End technologies,  I also have experience working with <span>NodeJS</span>, <span>Express.JS</span>, and <span>PostgreSQL</span>.
          </p>
          
          {/* <p>
            I've come to love the intersection of creativity and engineering offered
            by the front-end. By embarking on 
          </p> */}
          {/* <br/>
          <p>
            I've sharpened my skills in front-end development and UI/UX design
            across projects of diverse use-cases and client needs. I've
            interfaced with both technical and non-technical stakeholders on
            projects, and am adept at communicating and collaborating with both
            audiences.
          </p> */}
          <br/>
          <p>
            I'm currently leading the UI design and front-end development of a Learning & Development dashboard at <span>Apple Maps</span>, but my ears are always open to exciting opportunities. 
          </p>
          <br/>
          <p>In my free time you can find me rock climbing, painting a still life in oil, sewing, or performing Townes Van Zandt covers on my guitar.</p>
          {/* <p>
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
          </p> */}
          {/* <p>
            In this role, I've worked with technical and non-technical
            stakeholders to design data visualizations that tell actionable user
            stories, create UI mockups, and develop a data driven
            React/Typescript application.
          </p> */}
          {/* <p>
            Previously I worked as a Front-End Developer at Zollege, where I
            developed a React application to assist teachers in managing their
            class schedules. The application charted class schedules on a gantt
            chart, allowing teachers to keep up to date with the timeline of
            their current classes and easily plan future ones.
          </p> */}
        </TextSection>
        {/* <ImageSection><img src={JasonFloating}></img></ImageSection> */}
      </ContentWrapper>
      {/* <CurveContainer fill={"#4831d4"} inverted={false} aligned="bottom" /> */}
    </AboutMeWrapper>
  );
});

export default AboutMe;

const AboutMeWrapper = styled(HorizontalWrapper)`
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  margin-top: -400px;
`;

const ContentWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.opaque1};
  
  border-radius: 3px;
`;

const TextSection = styled.div`
  padding: 28px;
  font-family: Cardo;
  max-width: 500px;
  p {
  margin: 0px;
  color: ${(props) => props.theme.colors.grey} !important;
  span {
    color: ${(props) => props.theme.colors.darkerHighlight};
    font-weight: 600;
  }
  }

`;

const Heading = styled.h1`
 margin: 0px;
 font-size: 28px;
  color: ${(props) => props.theme.colors.white} !important;
  margin-bottom: 10px;
`

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 50px;
  padding-top: 20px;
  overflow: hidden;
  max-width: 400px;
  max-height: 400px;
  border-radius: 3px;
  padding: 15px;
  img {
    width: 500px;
    zoom: 115%;
    opacity: 80%;
    
    margin-right: 00px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
