import { ReactNode, useState } from "react";
import styled from "styled-components";
import LinkButton from "./reusable/LinkButton";
import { VerticalWrapper } from "./reusable/styled-components";
import CodeIcon from "@mui/icons-material/Code";
import DeadChip from "./reusable/DeadChip";

interface ComponentInterface {
  [key: string]: {
    title: string;
    stateString: string;
    subText: string;
    component: ReactNode;
    chips: Array<string>;
    propsToggles: ReactNode;
  };
}

const WorkGallery = () => {
  const [selected, setSelected] = useState("accordion-menu");

  const componentsList: ComponentInterface = {
    // "smart-calendar": {
    //   title: "Smart Calendar",
    //   subText:
    //     "I built this smart-calendar UI component to allow users to filter data within a time range while visualizing the results. A possible use case could be visualizing # of incidents per day, for example.",
    //   stateString: "smart-calendar",
    //   component: (
    //     <LinkButton
    //       handleClick={() => {}}
    //       destination={"click me"}
    //       isSelected={false}
    //       content={"Click Me"}
    //     />
    //   ),
    //   chips: ["ReactJS", "Typescript", "Styled-Components", "BlueprintJS"],
    //   propsToggles: <TogglesWrapper>{/* <SliderToggle /> */}</TogglesWrapper>,
    // },
    // "smart-filters": {
    //   title: "Smart Filters",
    //   subText:
    //     "I built this smart-calendar UI component to allow users to filter data within a time range while visualizing the results. A possible use case could be visualizing # of incidents per day, for example.",
    //   stateString: "smart-filters",
    //   component: <div />,
    //   chips: ["ReactJS", "Typescript", "Styled-Components", "BlueprintJS"],
    //   propsToggles: <TogglesWrapper></TogglesWrapper>,
    // },
    "accordion-menu": {
      title: "Accordion Menu",
      subText:
        "I built this smart-calendar UI component to allow users to filter data within a time range while visualizing the results. A possible use case could be visualizing # of incidents per day, for example.",
      stateString: "accordion-menu",
      component: <div />,
      chips: ["ReactJS", "Typescript", "Styled-Components", "BlueprintJS"],
      propsToggles: <TogglesWrapper></TogglesWrapper>,
    },
    "dropdown-menu": {
      title: "Dropdown Menu",
      subText:
        "I built this smart-calendar UI component to allow users to filter data within a time range while visualizing the results. A possible use case could be visualizing # of incidents per day, for example.",
      stateString: "dropdown-menu",
      component: <div />,
      chips: ["ReactJS", "Typescript", "Styled-Components", "BlueprintJS"],
      propsToggles: <TogglesWrapper></TogglesWrapper>,
    },
  };

  // const componentTitleToReactNodeMapping =

  const handleLinkClick = (componentTitle: string) => {
    setSelected(componentTitle);
  };

  return (
    <WorkGalleryWrapper>
      <WorkChips>
        {Object.keys(componentsList).map((component, idx) => {
          const currentComponent = componentsList[component];
          const isSelected = component === selected;
          return (
            <LinkButton
              content={currentComponent.title}
              handleClick={handleLinkClick}
              destination={component}
              isSelected={isSelected}
            />
          );
        })}
      </WorkChips>
      <Divider />
      <SelectedComponentWrapper>
        <h2>{componentsList[selected].title}</h2>
        <Chips>
          {componentsList[selected].chips.map((chip) => {
            return <DeadChip content={chip} key={`${chip}-chip`} />;
          })}
        </Chips>

        <p>{componentsList[selected].subText}</p>

        <ViewFinderWrapper>
          <ComponentViewFinder className="viewfinder">
            <ViewFinderCheckerboard>
              {Array.from({ length: 13 }).map((row) => {
                return (
                  <CheckerboardRow>
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                    <CheckerboardCell />
                  </CheckerboardRow>
                );
              })}
            </ViewFinderCheckerboard>

            <ComponentWrapper>
              {componentsList[selected].component}
            </ComponentWrapper>
          </ComponentViewFinder>
          {/* <ComponentToggles>
              <p>Component Props</p>
              {componentsList[selected].propsToggles}
            </ComponentToggles> */}
        </ViewFinderWrapper>
        <ViewSourceCodeButton>
          <CodeIcon color="inherit" />
          <a href="https://www.google.com">View Source Code</a>
        </ViewSourceCodeButton>
      </SelectedComponentWrapper>
    </WorkGalleryWrapper>
  );
};

export default WorkGallery;

const WorkGalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  column-gap: 25px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SelectedComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: contain;
  row-gap: 10px;
  max-width: 600px;
  font-family: Cardo;
  h2 {
    color: ${(props) => props.theme.colors.white};
    font-size: 28px;
    margin: 0px;
    font-weight: 600;
  }
  p {
    color: ${(props) => props.theme.colors.white};
    margin: 0px;
    font-size: 16px;
  }
  /* @media screen and (max-width: 1000px) {
    .WorkSectionTitle {
      display: flex;
    }
    padding: 80px 0;
    padding-bottom: 100px;
  } */

  @media screen and (max-width: 700px) {
    align-items: center;
    .WorkSectionTitle {
      display: flex;
      padding-left: 0;
    }
  }
`;

const Chips = styled.div`
  display: flex;
  column-gap: 10px;
  flex-wrap: nowrap;
`;

const ViewSourceCodeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.colors.opaque3};
  /* background-color: #432d83; */
  border-radius: 3px;
  transition: all 300ms ease-in-out;
  column-gap: 10px;
  cursor: pointer;
  svg {
    /* fill: #e7e4f9; */
    fill: ${(props) => props.theme.colors.white};
    transition: all 300ms ease-in-out;
  }
  a {
    text-decoration: none;
    /* color: #e7e4f9; */
    color: ${(props) => props.theme.colors.white};
    transition: all 300ms ease-in-out;
  }
  :hover {
    /* background-color: #4831d4; */
    background-color: ${(props) => props.theme.colors.purpleDark};
    a {
      /* color: #fff; */
    }
    svg {
      /* fill: #fff; */
    }
  }
`;

// const ComponentViewFinder = styled.div`
//   background-color: #100a20;
//   width: 100%;
//   border-radius: 3px;
//   height: 290px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   border: 1px solid rgba(207, 205, 224, 0.2);
// `;

const ComponentViewFinder = styled.div`
  background-color: ${(props) => props.theme.colors.darkOpaque5};
  width: 100%;
  border-radius: 3px;
  height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.opaque3};
`;

const ComponentWrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const ViewFinderCheckerboard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const CheckerboardRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CheckerboardCell = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.opaque7};
  opacity: 20%;
  margin-top: -1px;
  margin-left: -1px;
`;

const ViewFinderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  padding-top: 10px;
`;

const TogglesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentToggles = styled.div`
  display: flex;
  width: 200px;
  height: 250px;
  background-color: #281b4e;
  border-radius: 3px;
  padding: 20px;
  p {
    font-size: 16px;
    color: #e7e4f9;
    font-weight: bold;
  }
`;

const WorkChips = styled(VerticalWrapper)`
  position: relative;
  row-gap: 15px;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    position: relative;
    flex-direction: row;
    overflow-x: auto;
    column-gap: 10px;
    width: 90%;
    padding: 0;
    box-sizing: border-box;

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
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
