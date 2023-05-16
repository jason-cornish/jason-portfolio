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

type WorkProps = {
  selectedWork: string;
  workLinks: Array<string>;
};

const SelectedWorkContent = (props: WorkProps) => {
  const { selectedWork, workLinks } = props;

  const workDictionary = {
    [workLinks[0]]: (
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
            <GreyLayer />
            <AppleMapsLogo className="logo" />
            <img src={AppleMapsBackground} alt="Apple Maps"></img>
          </AppleImage>
          <WorkParagraphWrapper>
            <WorkParagraph>
              Designed, developed, and maintained multiple major system feature
              additions to internal Apple web applications using React,
              Typescript, and Node.js.
            </WorkParagraph>
            <WorkParagraph>
              Collaborated with Apple PM’s to design complex data visualizations
              and user interfaces in Sketch.
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
    ),
    [workLinks[1]]: (
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
          </ZollegeImage>
          <WorkParagraphWrapper>
            <WorkParagraph>
              Designed, developed, and maintained multiple major system feature
              additions to internal Apple web applications using React,
              Typescript, and Node.js.
            </WorkParagraph>
            <WorkParagraph>
              Collaborated with Apple PM’s to design complex data visualizations
              and user interfaces in Sketch.
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
    ),
    [workLinks[2]]: (
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
              Designed, developed, and maintained multiple major system feature
              additions to internal Apple web applications using React,
              Typescript, and Node.js.
            </WorkParagraph>
            <WorkParagraph>
              Collaborated with Apple PM’s to design complex data visualizations
              and user interfaces in Sketch.
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
    ),
  };

  return workDictionary[selectedWork];
};

export default SelectedWorkContent;

const WorkWrapper = styled(VerticalWrapper)`
  padding: 0px 0px;
  /* background-color: #4831d4; */
  /* overflow-y: auto; */
`;

const WorkTitle = styled.h1`
  font-size: 36px !important;
  font-weight: 600;
  color: #282828;
  margin: 0px;
  padding-top: 5px;
  margin-bottom: 5px;
  span {
    color: #4831d4;
  }
`;

const WorkSubTitle = styled.h2`
  font-family: Archivo;
  color: #282828;
  font-size: 22px;
  font-weight: 400;
  margin: 0px;
  margin-bottom: 15px;
`;

const ChipRow = styled(HorizontalWrapper)`
  column-gap: 15px;
  margin-bottom: 15px;
`;

const WorkContent = styled(VerticalWrapper)`
  row-gap: 25px;
  width: 100%;
`;

const WorkParagraphWrapper = styled(VerticalWrapper)`
  padding: 0px 15px;
  max-width: 800px;
  row-gap: 15px;
`;

const AppleImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  border-radius: 3px;
  img {
    position: absolute;
    width: 100%;
    height: 320px;
    border-radius: 2px;
  }
  .logo {
    width: 540px;
    height: 400px;
    margin: 0px;
    z-index: 4;
    opacity: 100%;
    fill: black;
  }
`;

const ZollegeImage = styled.div`
  width: 100%;
  border-radius: 3px;
  img {
    width: 780px;
    height: auto;
  }
`;

const ElliotImage = styled.div`
  width: 100%;
  border-radius: 3px;
  img {
    width: 780px;
    height: auto;
  }
`;

const GreyLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 320px;
  background: rgba(40, 40, 40, 0.2);
  z-index: 1;
`;

const WorkParagraph = styled.p`
  display: flex;
  &:before {
    display: block;
    margin-right: 15px;
    content: "";
    margin-top: 10px;
    width: 10px;
    height: 10px;
    background-color: #4831d4;
    border-radius: 50%;
  }
  font-size: 22px;
  line-height: 30px;
  margin: 0px;

  font-family: Archivo;
  color: #121212 !important;
`;
