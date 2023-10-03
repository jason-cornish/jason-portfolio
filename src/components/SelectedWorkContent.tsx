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
import ArboretumCreekBackground from "../images/Arboretum-Creek-Background.png";
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
          <WorkTitle>Full-Stack Developer @ Apple</WorkTitle>
          <WorkSubTitle>June 2022 - Present</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"React.js"} />
            <DeadChip content={"Typescript"} />
            <DeadChip content={"Node.js"} />
            <DeadChip content={"Styled-Components"} />
            <DeadChip content={"Git"} />
            <DeadChip content={"BlueprintJS"} />
            <DeadChip content={"Highcharts"} />
          </ChipRow>
          <WorkContent>
            <AppleImage>
              <AppleMapsLogo className="logo" />
              <img src={AppleMapsBackground} alt="Apple Maps"></img>
              <ImagePlaceholder />
            </AppleImage>
            <WorkParagraphWrapper>
              <WorkParagraph>
                Designed and developed a workforce productivity dashboard in
                React that reports on the productivity and effectiveness of
                3500+ technicians, analysts, and editors by tracking 50,000+
                data points.
              </WorkParagraph>
              <WorkParagraph>
                Designed and developed a workforce monitoring tool in React that
                tracks the qualifications, skill readiness, and training recency
                of a workforce of 6000+ Apple Maps editors.
              </WorkParagraph>
              <WorkParagraph>
                Engineered a library of reusable UI React components in
                Typescript and Styled-Components with customizable styling and
                content.
              </WorkParagraph>
              <WorkParagraph>
                Collaborated with Apple managers to design complex data
                visualizations and user interfaces in Sketch.
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
    // [workLinks[1]]: (
    //   <CSSTransition
    //     timeout={400}
    //     classNames="transition"
    //     key="zollege-landing"
    //   >
    //     <WorkWrapper>
    //       <WorkTitle>
    //         Gantt App @{" "}
    //         <a
    //           href="https://htmlpreview.github.io/?https://github.com/theMVPshop/landingpage/blob/main/html/landing.html"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           Zollege
    //         </a>
    //       </WorkTitle>
    //       <WorkSubTitle>January - June 2022</WorkSubTitle>
    //       <ChipRow>
    //         <DeadChip content={"Javascript"} />
    //         <DeadChip content={"HTML5"} />
    //         <DeadChip content={"CSS3"} />
    //         <DeadChip content={"Git"} />
    //         <DeadChip content={"Bootstrap"} />
    //       </ChipRow>
    //       <WorkContent>
    //         <ZollegeImage>
    //           <img src={ZollegeBackground}></img>
    //           <ImagePlaceholder />
    //         </ZollegeImage>

    //         <WorkParagraphWrapper>
    //           <WorkParagraph>
    //             Developed a fully responsive landing page and navigation bar
    //             using HTML, CSS, Bootstrap, and Javascript
    //           </WorkParagraph>
    //           <WorkParagraph>
    //             Learned a new Javascript library (DHTMLX Gantt) to build a
    //             customized Gantt chart that helps Zollege administrators track
    //             class schedules.
    //           </WorkParagraph>
    //           <WorkParagraph>
    //             Utilized Git to manage version control + push changes in
    //             collaboration with 5 other developers.
    //           </WorkParagraph>
    //         </WorkParagraphWrapper>
    //       </WorkContent>
    //     </WorkWrapper>
    //   </CSSTransition>
    // ),
    [workLinks[1]]: (
      <CSSTransition timeout={400} classNames="transition" key="zollege-gantt">
        <WorkWrapper>
          <WorkTitle>
            Zospace @{" "}
            <a
              href="https://htmlpreview.github.io/?https://github.com/theMVPshop/landingpage/blob/main/html/landing.html"
              target="_blank"
              rel="noreferrer"
            >
              Zollege
            </a>
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
                using HTML5, CSS3, Bootstrap, and Javascript
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
            Capstone ACA Project{" "}
            <a
              href="https://elliot-smith-player.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Elliot Smith Player
            </a>
          </WorkTitle>
          <WorkSubTitle>October - December 2021</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"React.js"} />
            <DeadChip content={"Node.js"} />
            <DeadChip content={"MySQL"} />
            <DeadChip content={"Express"} />
            <DeadChip content={"REST API"} />
            <DeadChip content={"CSS3"} />
          </ChipRow>
          <WorkContent>
            <ElliotImage>
              <img src={ElliotSmithPlayerBackground}></img>
            </ElliotImage>

            <WorkParagraphWrapper>
              <WorkParagraph>
                Designed and built an online jukebox for Elliot Smith's music as
                my capstone project at Austin Coding Academy. Key features
                include creating accounts, creating &amp; saving custom
                playlists, listening to songs, and browsing albums.
              </WorkParagraph>
              <WorkParagraph>
                Engineered a fully-responsive front-end with React, using Redux
                for state mangagement. Developed custom React hooks for fetching
                and updating back-end data, utilizing JSON Web Tokens via Auth0
                for web security.
              </WorkParagraph>
              <WorkParagraph>
                Developed an Express REST API with Node.js for communication
                with my MySQL database and React front-end. Wrote MySQL queries
                to fetch, update, and delete data upon user request.
              </WorkParagraph>
            </WorkParagraphWrapper>
          </WorkContent>
        </WorkWrapper>
      </CSSTransition>
    ),
    [workLinks[3]]: (
      <CSSTransition
        timeout={350}
        classNames="transition"
        key="arboretum-creek"
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
          <WorkSubTitle>January - June 2022</WorkSubTitle>
          <ChipRow>
            <DeadChip content={"Javascript"} />
            <DeadChip content={"HTML5"} />
            <DeadChip content={"CSS3"} />
            <DeadChip content={"SVG"} />
            <DeadChip content={"Web Design"} />
            <DeadChip content={"Hosted"} />
          </ChipRow>
          <WorkContent>
            <ElliotImage>
              <img src={ArboretumCreekBackground}></img>
            </ElliotImage>

            <WorkParagraphWrapper>
              <WorkParagraph>
                Volunteered for a non-profit organization to design and build a
                website that demonstrates the ecological need to recreate a
                creek in the Seattle Arboretum park to reduce flooding damage.
              </WorkParagraph>
              <WorkParagraph>
                Developed a fully responsive static website with HTML5, CSS3,
                and Javascript. Built an interactive visionary image of the
                future Arboretum Creek with SVG and Adobe Illustrator to teach
                visitors about the types of life that could thrive in Arboretum
                Creek.
              </WorkParagraph>
              <WorkParagraph>
                Deployed and hosted the website via Bluehost.
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
  a {
    color: #4831d4;
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
  @media screen and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
`;

const WorkParagraphWrapper = styled(VerticalWrapper)`
  position: relative;
  max-width: 630px;
  row-gap: 10px;
  padding-top: 10px;
  padding-left: 20px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 100%;
    margin: auto auto;
    margin-top: 15px;
  }

  @media screen and (max-width: 700px) {
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
