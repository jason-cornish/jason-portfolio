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
import LinkButton from "./reusable/LinkButton";

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
    "Myco-Tex",
    "Zospace",
    "Elliot Smith Player",
    "Arboretum Creek",
  ];

  return (
    <WorkWrapper ref={workRef}>
      <ContentWrapper>
        <OpaqueWrapper>
          <WorkChips>
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
          </WorkChips>
        </OpaqueWrapper>
        <Divider />
        <OpaqueWrapper>
          <SelectedWorkContent
            selectedWork={workLinks[selectedWork]}
            workLinks={workLinks}
          ></SelectedWorkContent>
        </OpaqueWrapper>
      </ContentWrapper>
      {/* <CurveContainer fill={"#e0e3e7"} inverted={true} aligned={"bottom"} /> */}
    </WorkWrapper>
  );
});

export default Work;

const WorkWrapper = styled.div`
  /* padding: 15px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  overflow: contain;
  .WorkSectionTitle {
    display: flex;
    color: #1b1236;
    font-size: 45px;
    margin: 0 0 20px 0px;
  }
  @media screen and (max-width: 1100px) {
    .WorkSectionTitle {
      display: flex;
    }
    padding: 80px 0;
    padding-bottom: 100px;
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    padding: 0px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  /* column-gap: 15px; */
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const OpaqueWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: ${(props) => props.theme.colors.opaque1}; */
  padding: 0 20px;
  border-radius: 3px;
`;

const WorkChips = styled(VerticalWrapper)`
  position: relative;
  row-gap: 15px;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
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
  border: 1px solid ${(props) => props.theme.colors.opaque2};
  border-radius: 3px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
