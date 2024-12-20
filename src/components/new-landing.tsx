import React from "react";
import styled from "styled-components";
import RingsOfLights from "./ring-of-lights/rings-of-lights";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { ReactComponent as LinksCircle } from "../svg/links.svg";
import JasonCard from "./Jason-Card";

const NewLanding = () => {
  return (
    <NewLandingWrapper>
      <BackgroundWrapper>
        <CenterWrapper>
          <JasonCard />
          {/* <h1>Jason Cornish</h1>
          <h2>Front-End Engineer</h2>
          <SubText>
            <p>
              I design and build elegant, interactive, and highly responsive web
              experiences in React & Typescript.
            </p>
          </SubText> */}
        </CenterWrapper>
      </BackgroundWrapper>
      <RingsOfLights />
    </NewLandingWrapper>
  );
};

export default NewLanding;

const NewLandingWrapper = styled.div`
  width: 100%;
  min-height: 550px;
  height: 100vh;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    .lights-background {
      display: none;
    }
  }

  /* padding-top: 150px;
  padding-bottom: 150px; */
`;

const BackgroundWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 30px;
  opacity: 1;
  z-index: 5;

  h1 {
    font-family: Cardo;
    color: ${(props) => props.theme.colors.white};
    opacity: 1;
    font-size: 50px;
    font-weight: 500;
    margin: 0px;
  }
  h2 {
    font-family: Cardo;
    color: ${(props) => props.theme.colors.purple};
    opacity: 1;
    font-size: 30px;
    font-weight: 500;
    margin: 0px;
  }
  :hover {
  }
  .mobile-wrapper {
    display: none;
  }

  @media screen and (max-width: 800px) {
  }
`;

const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(208, 202, 230, 0.05); */
  /* box-shadow: 0 3px 7px 0 ${(props) => props.theme.colors.darkOpaque2},
    0 1px 2px 0 ${(props) => props.theme.colors.darkOpaque2}; */
  border-radius: 3px;
  padding: 30px;
  transition: background-color, height 700ms ease-in-out;
  /* cursor: pointer; */
  /* :hover {
    background-color: rgba(208, 202, 230, 0.1);
    height: 500px;
  } */
  .display-navigator {
    display: flex;
  }
`;

const SubText = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 300px;
  text-align: center;
  font-family: Cardo;
  color: ${(props) => props.theme.colors.grey};
  margin-top: 10px;
  p {
    margin: 0;
  }
`;

const SVGWrapper = styled.div`
  position: absolute;
  z-index: 5;
  width: 1200px;
`;
