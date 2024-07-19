import React from "react";
import styled from "styled-components";
import RingsOfLights from "./ring-of-lights/rings-of-lights";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { ReactComponent as LinksCircle } from "../svg/links.svg";

const NewLanding = () => {
  return (
    <NewLandingWrapper>
      <BackgroundWrapper>
        <CenterWrapper>
          <h1>Jason Cornish</h1>
          <h2>Front-End Engineer</h2>
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
    color: #d0cae6;
    opacity: 1;
    font-size: 50px;
    font-weight: 500;
    margin: 0px;
  }
  h2 {
    font-family: Cardo;
    color: #d0cae6;
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
  background-color: rgba(208, 202, 230, 0.05);
  border-radius: 6px;
  padding: 50px;
  transition: background-color, height 700ms ease-in-out;
  height: 100px;
  cursor: pointer;
  :hover {
    background-color: rgba(208, 202, 230, 0.1);
    height: 500px;
  }
  .display-navigator {
    display: flex;
  }
`;

const SVGWrapper = styled.div`
  position: absolute;
  z-index: 5;
  width: 1200px;
`;
