import styled from "styled-components";
import DeadChip from "./reusable/DeadChip";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";
import AppleIcon from "@mui/icons-material/Apple";
import { ReactComponent as AppleMapsLogo } from "../svg/apple-maps.svg";
import AppleMapsBackground from "../images/Apple-Maps-Background.png";
import ZollegeBackground from "../images/Zollege-Background.png";
import ElliotSmithPlayerBackground from "../images/Elliot-Smith-Player-Background.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ImagePlaceholder from "./reusable/ImagePlaceholder";

type WorkProps = {
  selectedWork: string;
  workLinks: Array<string>;
};

const SelectedWorkContent = (props: WorkProps) => {
  const { selectedWork, workLinks } = props;

  const workDictionary = {
    [workLinks[0]]: (
      <CSSTransition timeout={400} classNames="transition" key="apple">
        <WorkWrapper>
          <WorkTitle>
            Full-Stack Developer @ <span>Apple</span>
          </WorkTitle>
          <WorkSubTitle>June 2022 - Present</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"React.js"} />
            <DeadChip content={"Node.js"} />
            <DeadChip content={"Styled-Components"} />
            <DeadChip content={"UI Design"} />
            <DeadChip content={"Typescript"} />
          </ChipRow>
          <WorkContent>
            <AppleImage>
              <AppleMapsLogo className="logo" />
              <img src={AppleMapsBackground} alt="Apple Maps"></img>
              <ImagePlaceholder />
            </AppleImage>
            <WorkParagraphWrapper>
              <WorkParagraph>
                Designed, developed, and oversaw deployment of 2 major system
                feature additions to Apple Maps React project management tools.
              </WorkParagraph>
              <WorkParagraph>
                Engineered a library of reusable UI components, collaborated
                with Apple PM’s to design complex data visualizations and user
                interfaces in Sketch.
              </WorkParagraph>
              <WorkParagraph>
                Dockerized and deployed a Node.js REST API to a Kubernetes
                namespace.
              </WorkParagraph>
              <WorkParagraph>
                Maintained and refactored previous developers’ Python/Typescript
                code.
              </WorkParagraph>
            </WorkParagraphWrapper>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
    [workLinks[1]]: (
      <CSSTransition timeout={400} classNames="transition" key="zollege">
        <WorkWrapper>
          <WorkTitle>
            Front-End Developer @ <span>Zollege</span>
          </WorkTitle>
          <WorkSubTitle>January - June 2022</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"Javascript"} />
            <DeadChip content={"HTML5"} />
            <DeadChip content={"CSS3"} />
            <DeadChip content={"Git"} />
            <DeadChip content={"Bootstrap"} />
          </ChipRow>
          <WorkContent>
            <ZollegeImage>
              <img src={ZollegeBackground}></img>
              <ImagePlaceholder />
            </ZollegeImage>

            <WorkParagraphWrapper>
              <WorkParagraph>
                Developed a fully responsive landing page and navigation bar
                using HTML, CSS, Bootstrap, and Javascript
              </WorkParagraph>
              <WorkParagraph>
                Learned a new Javascript library (DHTMLX Gantt) to build a
                customized Gantt chart that helps Zollege administrators track
                class schedules.
              </WorkParagraph>
              <WorkParagraph>
                Utilized Git to manage version control + push changes in
                collaboration with 5 other developers.
              </WorkParagraph>
            </WorkParagraphWrapper>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
    [workLinks[2]]: (
      <CSSTransition
        timeout={350}
        classNames="transition"
        key="elliot-smith-player"
      >
        <WorkWrapper>
          <WorkTitle>
            Lead Developer @ <span>Elliot Smith Player</span>
          </WorkTitle>
          <WorkSubTitle>January - June 2022</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"React.js"} />
            <DeadChip content={"Node.js"} />
            <DeadChip content={"Styled-Components"} />
            <DeadChip content={"UI Design"} />
            <DeadChip content={"Typescript"} />
          </ChipRow>
          <WorkContent>
            <ElliotImage>
              <img src={ElliotSmithPlayerBackground}></img>
            </ElliotImage>

            <WorkParagraphWrapper>
              <WorkParagraph>
                Designed, developed, and maintained multiple major system
                feature additions to internal Apple web applications using
                React, Typescript, and Node.js.
              </WorkParagraph>
              <WorkParagraph>
                Collaborated with Apple PM’s to design complex data
                visualizations and user interfaces in Sketch.
              </WorkParagraph>
              <WorkParagraph>
                Dockerized and deployed a Node.js REST API to a Kubernetes
                namespace
              </WorkParagraph>
              <WorkParagraph>
                Maintained and refactored previous developers’ Python/Typescript
                code.
              </WorkParagraph>
            </WorkParagraphWrapper>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
  };

  return (
    <TransitionGroup component={TransitionWrapper}>
      {workDictionary[selectedWork]}
    </TransitionGroup>
  );
};

export default SelectedWorkContent;

const TransitionWrapper = styled.div`
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, 10);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 350ms linear;
  }

  .transition-exit {
    display: none;
    opacity: 0;
  }

  .transition-exit-active {
    opacity: 1;
    transition: all 0ms ease-in;
  }
`;

const WorkWrapper = styled(VerticalWrapper)`
  padding: 0px 0px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const WorkTitle = styled.h1`
  font-size: 30px !important;
  font-weight: 600;
  color: #282828;
  margin: 0px;
  padding-top: 5px;
  margin-bottom: 5px;
  span {
    color: #4831d4;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 10px;
    padding: 0 10%;
  }

  @media screen and (max-width: 700px) {
    padding: 0 5%;
  }
`;

const WorkSubTitle = styled.h2`
  display: flex;
  font-family: Archivo;
  color: #282828;
  font-size: 16px;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 10px;

  @media screen and (max-width: 1200px) {
    padding-left: 10%;
  }

  @media screen and (max-width: 700px) {
    padding-left: 5%;
  }
`;

const ChipRow = styled(HorizontalWrapper)`
  display: flex;
  column-gap: 15px;
  margin-bottom: 10px;

  @media screen and (max-width: 1200px) {
    padding: 0 10%;
    flex-wrap: wrap;
    column-gap: 5px;
  }

  @media screen and (max-width: 700px) {
    row-gap: 5px;
    flex-wrap: wrap;
    max-width: 100%;
    padding: 0 5%;
  }
`;

const WorkContent = styled(VerticalWrapper)`
  width: 100%;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

const WorkParagraphWrapper = styled(VerticalWrapper)`
  position: relative;
  max-width: 700px;
  row-gap: 10px;
  padding-top: 10px;
  padding-left: 20px;
  @media screen and (max-width: 1200px) {
    max-width: 100%;
    padding: 0 calc(10% + 20px);
    margin-top: 15px;
  }

  @media screen and (max-width: 700px) {
    max-width: 100%;
    padding: 0 calc(5% + 20px);
  }
`;

const WorkParagraph = styled.p`
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: 11px;
    left: -16px;
    width: 8px;
    height: 8px;
    background-color: #4831d4;
    border-radius: 50%;
  }
  font-size: 18px;
  line-height: 25px;
  margin: 0px;

  font-family: Archivo;
  color: #121212 !important;
`;

const AppleImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;

  img {
    width: 700px;
    border-radius: 2px;
    z-index: 2;
  }
  .logo {
    position: absolute;
    height: 200px;
    margin: 0px;
    z-index: 4;
    opacity: 100%;
    fill: black;
  }
  @media screen and (max-width: 1200px) {
    height: auto;
    img {
      width: 80%;
      height: auto;
    }
    .logo {
      height: 150px;
    }
  }

  @media screen and (max-width: 700px) {
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
    .logo {
      height: 200px;
    }
  }
`;

const ZollegeImage = styled.div`
  position: relative;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  img {
    width: 700px;
    height: auto;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;

const ElliotImage = styled.div`
  width: 100%;
  border-radius: 3px;
  img {
    width: 700px;
    height: auto;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;

const GreyLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 320px;
  background: rgba(40, 40, 40, 0.2);
  z-index: 1;
`;
