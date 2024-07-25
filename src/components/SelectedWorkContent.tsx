import styled from "styled-components";
import DeadChip from "./reusable/DeadChip";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";
import AppleIcon from "@mui/icons-material/Apple";
import { ReactComponent as AppleMapsLogo } from "../svg/apple-maps.svg";
import AppleMapsBackground from "../images/Apple-Maps-Background-min.png";
import ZollegeBackground from "../images/Zollege-Background-min.png";
import ElliotSmithPlayerBackground from "../images/Elliot-Smith-Player-Background-min.png";
import ArboretumCreekBackground from "../images/Arboretum-Creek-Background-min.png";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ImagePlaceholder from "./reusable/ImagePlaceholder";
import MycoTex from "../images/Myco-Tex.png";

type WorkProps = {
  selectedWork: string;
  workLinks: Array<string>;
};

const SelectedWorkContent = (props: WorkProps) => {
  const { selectedWork, workLinks } = props;

  const workDictionary = {
    [workLinks[0]]: (
      <CSSTransition
        timeout={400}
        classNames="transition"
        key="apple"
        className={selectedWork === workLinks[0] ? "visible" : "hidden"}
      >
        <WorkWrapper>
          <WorkTitle>Full-Stack Developer @ Apple</WorkTitle>
          <WorkSubTitle>Jun 2022 - Present</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"ReactJS"} />
            <DeadChip content={"Typescript"} />
            <DeadChip content={"Zustand"} />
            <DeadChip content={"Node.js"} />
            <DeadChip content={"Styled-Components"} />
            {/* <DeadChip content={"BlueprintJS"} /> */}
            <DeadChip content={"Highcharts"} />
          </ChipRow>
          <WorkContent>
            <WorkParagraphWrapper>
              <WorkParagraph>
                Designed and developed workforce monitoring tools in React &
                Typescript to fetch historical data and display key insights
                into the qualifications, skill readiness, training recency, and
                workplace performance of 6000+ Apple Maps editors.
              </WorkParagraph>
              {/* <WorkParagraph>
                Engineered a library of reusable UI React components in
                Typescript and Styled-Components with customizable styling and
                content.
              </WorkParagraph> */}
              {/* <WorkParagraph>
                Collaborated with Apple managers to design complex data
                visualizations and user interfaces in Sketch.
              </WorkParagraph> */}
              {/* <WorkParagraph>
                Dockerized and deployed a Node.js REST API to a Kubernetes
                namespace.
              </WorkParagraph>
              <WorkParagraph>
                Maintained and refactored previous developers’ Python/Typescript
                code.
              </WorkParagraph> */}
            </WorkParagraphWrapper>
            <AppleImage>
              <AppleMapsLogo className="logo" />
              <img src={AppleMapsBackground} alt="Apple Maps"></img>
              <ImagePlaceholder />
            </AppleImage>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
    [workLinks[1]]: (
      <CSSTransition
        timeout={400}
        classNames="transition"
        key="myco-tex"
        className={selectedWork === workLinks[1] ? "visible" : "hidden"}
      >
        <WorkWrapper>
          <WorkTitle>
            Lead Engineer & Designer @{" "}
            <a
              href="https://myco-tex.web.app/landing"
              target="_blank"
              rel="noreferrer"
            >
              Myco-Tex
            </a>
          </WorkTitle>
          <WorkSubTitle>Nov 2023 - Apr 2024</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"ReactJS"} />
            <DeadChip content={"Typescript"} />
            <DeadChip content={"Styled-Components"} />
            <DeadChip content={"UI/UX Design"} />
            <DeadChip content={"JWT Auth"} />
          </ChipRow>
          <WorkContent>
            <WorkParagraphWrapper>
              <WorkParagraph>
                Designed and developed an environmental monitoring React
                dashboard for mushroom farmers that helped to improve crop yield
                by displaying live and historical humidity, temperature, and air
                quality data.
              </WorkParagraph>
              {/* <WorkParagraph>
                Mentored junior developer, checking code quality and
                implementing code optimizations where needed.
              </WorkParagraph>
              <WorkParagraph>
                Coded custom React hooks to fetch from REST API’s and display
                live data in HighCharts data visualizations.
              </WorkParagraph>
              <WorkParagraph>
                Secured sensitive user data by implementing JWT authorization to
                protected endpoints on a Node.js REST API.
              </WorkParagraph> */}
            </WorkParagraphWrapper>
            <ZollegeImage>
              <img
                src={MycoTex}
                style={{ marginTop: "-2px" }}
                alt="Myco-Tex user interface screenshot"
              ></img>
              <ImagePlaceholder />
            </ZollegeImage>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
    [workLinks[2]]: (
      <CSSTransition
        timeout={400}
        classNames="transition"
        key="zollege-gantt"
        className={selectedWork === workLinks[2] ? "visible" : "hidden"}
      >
        <WorkWrapper>
          <WorkTitle>
            Front-End Engineer @{" "}
            <a
              href="https://htmlpreview.github.io/?https://github.com/theMVPshop/landingpage/blob/main/html/landing.html"
              target="_blank"
              rel="noreferrer"
            >
              Zollege
            </a>
          </WorkTitle>
          <WorkSubTitle>Jan - Jun 2022</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"Javascript"} />
            <DeadChip content={"HTML5"} />
            <DeadChip content={"CSS3"} />
            <DeadChip content={"Git"} />
            <DeadChip content={"Bootstrap"} />
          </ChipRow>
          <WorkContent>
            <WorkParagraphWrapper>
              <WorkParagraph>
                Collaborated on a team of 5 junior developers to develop a fully
                responsive static website with HTML5, CSS3, Bootstrap, and
                Javascript.
              </WorkParagraph>
              {/* <WorkParagraph>
                Implemented the DHTMLX Gantt library to build an interactable
                online Gantt chart for teachers to track class schedules,
                cohorts, and student bodies.
              </WorkParagraph>
              <WorkParagraph>
                Utilized Git to manage version control + push changes in
                collaboration with 5 other developers.
              </WorkParagraph> */}
            </WorkParagraphWrapper>
            <ZollegeImage>
              <img src={ZollegeBackground}></img>
              <ImagePlaceholder />
            </ZollegeImage>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
    [workLinks[3]]: (
      <CSSTransition
        timeout={350}
        classNames="transition"
        key="elliot-smith-player"
        className={selectedWork === workLinks[3] ? "visible" : "hidden"}
      >
        <WorkWrapper>
          <WorkTitle>
            <a
              href="https://elliot-smith-player.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Elliot Smith Player
            </a>
          </WorkTitle>
          <WorkSubTitle>Oct - Dec 2021</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"ReactJS"} />
            <DeadChip content={"Node.js"} />
            <DeadChip content={"MySQL"} />
            <DeadChip content={"Express"} />
            <DeadChip content={"REST API"} />
            <DeadChip content={"CSS3"} />
          </ChipRow>
          <WorkContent>
            <WorkParagraphWrapper>
              <WorkParagraph>
                Designed and developed an online jukebox in React for Elliot
                Smith's live performances, along with a mySQL database and
                Express API in NodeJS. Users can listen to songs, create
                accounts, save custom playlists, and search for albums.
              </WorkParagraph>
            </WorkParagraphWrapper>
            <ElliotImage>
              <img src={ElliotSmithPlayerBackground}></img>
            </ElliotImage>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
    [workLinks[4]]: (
      <CSSTransition
        timeout={350}
        classNames="transition"
        key="arboretum-creek"
        className={selectedWork === workLinks[4] ? "visible" : "hidden"}
      >
        <WorkWrapper>
          <WorkTitle>
            Lead Developer @{" "}
            <a
              href="https://arboretumcreek.org"
              target="_blank"
              rel="noreferrer"
            >
              Arboretum Creek
            </a>
          </WorkTitle>
          <WorkSubTitle>Jan - Jun 2022</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"Javascript"} />
            <DeadChip content={"HTML5"} />
            <DeadChip content={"CSS3"} />
            <DeadChip content={"SVG"} />
            <DeadChip content={"Web Design"} />
            <DeadChip content={"Hosted"} />
          </ChipRow>
          <WorkContent>
            <WorkParagraphWrapper>
              <WorkParagraph>
                Volunteered for a non-profit organization to design and develop
                a static site in HTML, CSS, and Javascript that demonstrates the
                ecological need to recreate a creek in the Seattle Arboretum
                park to reduce flooding damage.
              </WorkParagraph>
            </WorkParagraphWrapper>
            <ElliotImage>
              <img src={ArboretumCreekBackground}></img>
            </ElliotImage>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
  };

  return (
    <TransitionGroup component={TransitionWrapper}>
      {Object.keys(workDictionary).map((work) => {
        return workDictionary[work];
      })}
    </TransitionGroup>
  );
};

export default SelectedWorkContent;

const TransitionWrapper = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  align-items: center;
  .visible {
    opacity: 1;
    transition: all 350ms linear;
  }
  .hidden {
    transition: all 100ms ease-in;
  }

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
  }

  .transition-exit-active {
  }
`;

const WorkWrapper = styled(VerticalWrapper)`
  padding: 0px 0px;
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
`;

const WorkTitle = styled.h1`
  font-size: 28px !important;
  font-weight: 600;
  color: #d0cae6;
  margin: 0px;
  font-family: Cardo;
  margin-bottom: 5px;
  span {
    /* color: black; */
    color: #d0cae6;
  }
  a {
    color: ${(props) => props.theme.colors.purple};
    /* color: #5d42ff; */
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
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
  font-family: Cardo;
  color: ${(props) => props.theme.colors.grey};
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
  column-gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  row-gap: 5px;

  @media screen and (max-width: 1200px) {
    padding: 0 10%;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 5px;
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
  row-gap: 10px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

const WorkParagraphWrapper = styled(VerticalWrapper)`
  position: relative;
  max-width: 550px;
  row-gap: 10px;
  margin-top: 5px;

  word-wrap: break-word;
  @media screen and (max-width: 1200px) {
    max-width: 100%;
    margin: auto auto;
    margin-top: 15px;
    padding: 0 10%;
  }

  @media screen and (max-width: 700px) {
    padding: 0 calc(5% + 20px);
  }
`;

const WorkParagraph = styled.p`
  position: relative;
  word-wrap: break-word;
  font-family: Cardo;
  /* &:before {
    position: absolute;
    content: "";
    top: 11px;
    left: -16px;
    width: 8px;
    height: 8px;
    background-color: #4831d4;
    border-radius: 50%;
  } */
  font-size: 16px;
  line-height: 25px;
  margin: 0px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.white} !important;
`;

const AppleImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  width: 550px;
  img {
    width: 550px;
    border-radius: 2px;
    z-index: 2;
    filter: brightness(85%);
  }
  .logo {
    position: absolute;
    height: 180px;
    margin: 0px;
    z-index: 3;
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
    width: 550px;
    height: auto;
  }
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    img {
      width: 100%;
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
  overflow: hidden;
  img {
    width: 550px;
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
