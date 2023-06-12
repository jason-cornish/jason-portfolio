import React from "react";
import styled from "styled-components";
import { HorizontalWrapper } from "./reusable/styled-components";
import JasonFloating from "../images/jason-floating.png";
import CurveContainer from "./reusable/CurveContainer";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <CurveContainer fill={"#4831d4"} inverted={true} aligned="top" />
      <ContentWrapper>
        <TextSection>
          <h1>Over the years,</h1>
          <p>
            I've done Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita libero nemo fugiat, nam aliquam repellendus corrupti et
            consectetur dolores impedit incidunt omnis dignissimos tempora nisi
            delectus, at eos? Velit, omnis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea
            vitae aliquid impedit, enim, nam natus perspiciatis expedita facere
            odio suscipit nisi minus! Itaque nam laudantium deleniti. Nostrum,
            totam quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum eius voluptate repellat possimus, voluptates ex! Impedit,
            voluptas ab repudiandae hic accusantium sunt tempora minus repellat
            praesentium in quas nostrum nam.
          </p>
        </TextSection>
        <ImageSection>
          <img src={JasonFloating}></img>
        </ImageSection>
      </ContentWrapper>
      <CurveContainer fill={"#4831d4"} inverted={false} aligned="bottom" />
    </AboutMeWrapper>
  );
};

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
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;

  @media screen and (max-width: 1200px) {
    width: 80%;
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
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  top: -20px;
  width: 50%;
  padding-left: 50px;
  right: 0;
  img {
    max-width: 550px;
  }
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const CurveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 101px;
  line-height: 0;
  box-sizing: border-box;
  rotate: 180deg;

  svg {
    position: relative;
    bottom: -100x;
    bottom: 0px;
    display: block;
    width: calc(100% + 1.3px);
    overflow: hidden;
    height: 101px;
    z-index: 2;
  }

  .shape-fill {
    fill: black;
  }
`;
