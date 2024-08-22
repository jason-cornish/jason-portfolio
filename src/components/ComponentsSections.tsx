import { ReactNode, useState, forwardRef } from "react";
import styled from "styled-components";
import SliderSwitch from "./reusable/slider-switch";
// import Work from "./Work";
import WorkSwiper from "./Work-Swiper";
import WorkGallery from "./WorkGallery";

const ComponentsSection = forwardRef((props: any, workRef: any) => {
  const [selectedWorkType, setSelectedWorkType] = useState("option-left");

  const handleWorkTypeSelection = (option: string) => {
    console.log(option);
    setSelectedWorkType(option);
  };

  return (
    <ComponentsWrapper ref={workRef}>
      <SectionHeader>
        {/* <SectionTitle>My Work</SectionTitle> */}
        {/* <SectionTitle>My Work</SectionTitle>
        <SectionDescription>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            accusamus natus quod, itaque, dolorum adipisci illo quo beatae aut
            quos tenetur corrupti nemo nulla tempora rerum! Hic autem dolorem
            minus!
          </p>
        </SectionDescription> */}
        <SliderSwitch
          optionLeft={"Component Gallery"}
          optionRight={"Work Experience"}
          selected={selectedWorkType}
          handleSelect={handleWorkTypeSelection}
        />
      </SectionHeader>
      <HorizontalDivider />
      {/* {workTypeMapping[selectedWorkType].viewToRender} */}
      <ContentWrapper>
        <LeftWrapper
          className={
            selectedWorkType === "option-left"
              ? "selected-option-left"
              : "deselected-option-left"
          }
        >
          <WorkGallery />
        </LeftWrapper>
        <RightWrapper
          className={
            selectedWorkType === "option-right"
              ? "selected-option-right"
              : "deselected-option-right"
          }
        >
          <WorkSwiper />
        </RightWrapper>
      </ContentWrapper>
    </ComponentsWrapper>
  );
});

export default ComponentsSection;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 950px;
  overflow: hidden;
  z-index: 3;
  border-radius: 3px;
  /* max-height: 1000px; */
  /* overflow: hidden; */
  justify-content: center;
  .selected-option-left {
    position: relative;
    transform: translate(0px, 0px);
    transition: all 300ms ease-in-out;
  }
  .deselected-option-left {
    position: absolute;
    transform: translate(-1000px, 0px);
    transition: all 300ms ease-in-out;
  }

  .selected-option-right {
    position: relative;
    transform: translate(0px, 0px);
    transition: all 300ms ease-in-out;
  }
  .deselected-option-right {
    position: absolute;
    transform: translate(1000px, 0px);
    transition: all 300ms ease-in-out;
  }
  @media screen and (max-width: 700px) {
    max-width: 95%;
  }
`;

const LeftWrapper = styled.div`
  /* overflow: hidden; */
`;

const RightWrapper = styled.div`
  /* overflow: hidden; */
`;

const ComponentsWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.opaque1};
  border-radius: 3px;

  align-items: center;
  overflow: contain;
  margin-bottom: 250px;
  @media screen and (max-width: 700px) {
    padding: 15px;
    max-width: 92.5%;
  }
`;

const SectionTitle = styled.h1`
  font-size: 35px;
  color: rgba(208, 202, 230, 0.85);
  margin: 0px;
  font-family: Cardo;
`;

const SectionDescription = styled.div`
  max-width: 700px;
  margin-bottom: 7px;
  p {
    font-size: 16px;
    color: #cfcde0;
    margin: 0px;
    text-align: center;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  align-items: center;
  transition: all 300ms ease-in-out;
  margin-bottom: 15px;
`;

const HorizontalDivider = styled.div`
  height: 0px;
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid ${(props) => props.theme.colors.opaque2};
  border-radius: 3px;
`;
