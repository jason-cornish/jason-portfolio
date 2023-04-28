import React from "react";
import styled from "styled-components";
import { HorizontalWrapper } from "./reusable/styled-components";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <CurveContainer>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </CurveContainer>
      <ContentWrapper>
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
      </ContentWrapper>
    </AboutMeWrapper>
  );
};

export default AboutMe;

const AboutMeWrapper = styled(HorizontalWrapper)`
  width: 100%;
  height: 1500px;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  background-color: #4831d4;
`;

const ContentWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding-top: 100px;
  h1 {
    color: #e0e3e7;
    font-size: 70px;
    margin-bottom: 20px;
  }
  p {
    color: #e0e3e7;
    font-family: Archivo;
    font-size: 26px;
    max-width: 600px;
    line-height: 40px;
  }
`;

const CurveContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 101px;
  line-height: 0;
  rotate: 180deg;

  svg {
    position: relative;
    top: 101px;
    display: block;
    width: calc(109% + 1.3px);
    height: 101px;
    z-index: 2;
  }

  .shape-fill {
    fill: #4831d4;
  }
`;
