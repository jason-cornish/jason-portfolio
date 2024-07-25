import styled from "styled-components";

interface PropsInterface {
  optionLeft: string;
  optionRight: string;
  handleSelect: (option: string) => void;
  selected: string;
}

const SliderSwitch = (props: PropsInterface) => {
  const { optionLeft, optionRight, handleSelect, selected } = props;
  const selectedText = selected === "option-left" ? optionLeft : optionRight;
  const sliderSide =
    selected === "option-left" ? "slider-left" : "slider-right";

  const optionIsSelected = (option: string) => {
    return option === selected ? "selected-option" : "unselected-option";
  };
  return (
    <SliderSwitchWrapper>
      <Slider className={sliderSide}>
        <p>{selectedText}</p>
      </Slider>
      <OptionWrapper
        className={`option-left ${optionIsSelected("option-left")}`}
        onClick={() => handleSelect("option-left")}
      >
        <Option>{optionLeft}</Option>
      </OptionWrapper>
      <OptionWrapper
        className={`option-right ${optionIsSelected("option-right")}`}
        onClick={() => handleSelect("option-right")}
      >
        <Option>{optionRight}</Option>
      </OptionWrapper>
    </SliderSwitchWrapper>
  );
};

export default SliderSwitch;

const SliderSwitchWrapper = styled.div`
  display: flex;
  position: relative;
  /* border: 1px solid #432d83; */
  border: 1px solid ${(props) => props.theme.colors.opaque1};
  border-radius: 6px;
  padding: 5px;
  font-family: Cardo;
  /* background-color: #432d83; */
  background-color: ${(props) => props.theme.colors.opaque1};
  .option-right,
  .slider-right {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .option-left,
  .slider-left {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .option-left {
    width: 155px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .option-right {
    width: 140px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .slider-left {
    left: 5px;
    width: 235px;
  }

  .slider-right {
    width: 220px;
    left: 240px;
  }

  .unselected-option {
    p {
      /* color: #dad8eb; */
    }
    :hover {
      /* background-color: #593caf; */
      background-color: ${(props) => props.theme.colors.opaque2};
      /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
        0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
        0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11); */
    }
  }
`;

const Slider = styled.div`
  position: absolute;
  /* background-color: #4831d4; */
  background-color: ${(props) => props.theme.colors.purpleDark};
  /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11); */
  border-radius: 6px;
  transition: all 300ms ease-in-out;
  z-index: 2;
  padding: 10px 0px;
  height: 25px;
  p {
    margin: 0px;
    font-size: 18px;
    color: ${(props) => props.theme.colors.white};
    /* color: #e7e4f9; */
    /* font-weight: bold; */
    opacity: 0;
  }
`;

const OptionWrapper = styled.div`
  padding: 10px 40px;
  height: 25px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
`;

const Option = styled.p`
  position: relative;
  margin: 0px;
  font-size: 18px;
  /* color: #e7e4f9; */
  color: ${(props) => props.theme.colors.white};
  /* font-weight: bold; */
  z-index: 3;
  border-radius: 6px;
  text-align: center;
`;
