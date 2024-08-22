import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";

import ArboretumCreekLogo from "../images/ArboretumCreekLogo.png";
import Chip from "./reusable/Chip";
import SelectedWorkContent from "./Mobile-Work-Swiper";
import { useEffect } from "react";
import CurveContainer from "./reusable/CurveContainer";
import LinkButton from "./reusable/LinkButton";
import MobileWorkSwiper from "./Mobile-Work-Swiper";

const WorkSwiper = forwardRef((props, workRef: any) => {
  const [selectedWork, setSelectedWork] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   if (!loading) {
  //     setLoading(true);
  //   }
  // }, [selectedWork]);

  const workLinks = [
    "Apple",
    "Myco-Tex",
    "Zospace",
    "Elliot Smith Player",
    "Arboretum Creek",
  ];

  return (
    <WorkWrapper ref={workRef}>
      <ContentWrapper>
        {/* <WorkChips>
          {workLinks.map((work, idx) => {
            const selected = idx === selectedWork;
            return (
              <LinkButton
                key={`chip-${idx}`}
                content={work}
                handleClick={() => setSelectedWork(idx)}
                destination={work}
                isSelected={selected}
              />
              // <Chip
              //   key={`chip-${idx}`}
              //   selected={selected}
              //   content={work}
              //   customClickEvent={() => setSelectedWork(idx)}
              // />
            );
          })}
        </WorkChips> */}
        {/* <Divider /> */}
        <MobileWorkSwiper
          selectedWork={workLinks[selectedWork]}
          workLinks={workLinks}
        />
      </ContentWrapper>
      <SlideProgressTracker>
        <ProgressDot className="activeDot" />
        <ProgressDot className="inactiveDot" />
        <ProgressDot className="inactiveDot" />
        <ProgressDot className="inactiveDot" />
        <ProgressDot className="inactiveDot" />
      </SlideProgressTracker>
      {/* <CurveContainer fill={"#e0e3e7"} inverted={true} aligned={"bottom"} /> */}
    </WorkWrapper>
  );
});

export default WorkSwiper;

const WorkWrapper = styled.div`
  /* padding: 15px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  overflow: contain;
  .WorkSectionTitle {
    display: flex;
    color: #1b1236;
    font-size: 45px;
    margin: 0 0 20px 0px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  column-gap: 25px;
  padding: 0px 30px;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
  }
`;

const WorkChips = styled(HorizontalWrapper)`
  position: relative;
  row-gap: 15px;
  box-sizing: border-box;
  width: 100%;
  max-width: 565px;
  @media screen and (max-width: 1200px) {
    flex-direction: row;
    overflow-x: auto;
    column-gap: 15px;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    /* max-width: 565px; */
    .WorkSectionTitleMobile {
      display: none;
    }
    margin-bottom: 15px;
    /* @media screen and (max-width: 700px) {
      width: 90%;
    } */
  }
  @media screen and (max-width: 700px) {
    overflow-x: auto;
  }
`;

const SlideProgressTracker = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  .activeDot {
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.theme.colors.purpleBright};
    border-radius: 50%;
  }
  .inactiveDot {
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.opaque6};
    border-radius: 50%;
  }
`;

const ProgressDot = styled.div``;

const Divider = styled.div`
  display: flex;
  width: 0px;
  border: 1px solid rgba(207, 205, 224, 0.2);
  border-radius: 3px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
