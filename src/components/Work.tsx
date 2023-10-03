import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";

import ArboretumCreekLogo from "../images/ArboretumCreekLogo.png";
import Chip from "./reusable/Chip";
import SelectedWorkContent from "./SelectedWorkContent";
import { useEffect } from "react";
import CurveContainer from "./reusable/CurveContainer";

const Work = forwardRef((props, workRef: any) => {
  const [selectedWork, setSelectedWork] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   if (!loading) {
  //     setLoading(true);
  //   }
  // }, [selectedWork]);

  const workLinks = [
    "Apple",
    "Zospace",
    "Elliot Smith Player",
    "Arboretum Creek",
  ];

  return (
    <WorkWrapper ref={workRef}>
      <h1 className="WorkSectionTitle">/work</h1>
      <ContentWrapper>
        <WorkChips>
          {workLinks.map((work, idx) => {
            const selected = idx === selectedWork;
            return (
              <Chip
                key={`chip-${idx}`}
                selected={selected}
                content={work}
                customClickEvent={() => setSelectedWork(idx)}
              />
            );
          })}
        </WorkChips>
        <Divider />
        <SelectedWorkContent
          selectedWork={workLinks[selectedWork]}
          workLinks={workLinks}
        ></SelectedWorkContent>
      </ContentWrapper>
      {/* <CurveContainer fill={"#e0e3e7"} inverted={true} aligned={"bottom"} /> */}
    </WorkWrapper>
  );
});

export default Work;

const WorkWrapper = styled.div`
  padding: 100px 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #e0e3e7;
  overflow: contain;
  .WorkSectionTitle {
    display: flex;
    color: #1b1236;
    font-size: 50px;
    margin: 0 0 20px 0px;
  }
  @media screen and (max-width: 1200px) {
    .WorkSectionTitle {
      display: flex;
    }
    padding: 80px 0;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 700px) {
    align-items: center;
    .WorkSectionTitle {
      display: flex;
      padding-left: 0;
    }
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  column-gap: 25px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const WorkChips = styled(VerticalWrapper)`
  position: relative;
  row-gap: 15px;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    overflow-x: auto;
    column-gap: 15px;
    width: 80%;
    padding: 0;
    box-sizing: border-box;

    .WorkSectionTitleMobile {
      display: none;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 13px;
      border-radius: 3px;
      box-sizing: border-box;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: white;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      height: 5px;
      background: #4831d4;
      border-radius: 3px;
      height: 5px;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
  }
`;

const Divider = styled.div`
  display: flex;
  width: 0px;
  border: 1px solid #282828;
  border-radius: 3px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
