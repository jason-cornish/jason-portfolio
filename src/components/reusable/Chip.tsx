import styled from "styled-components";
import HoverableTextWrapper from "./HoverableText";

type ChipProps = {
  selected: boolean;
  content: string;
  customClickEvent: any;
};

const Chip = (props: ChipProps) => {
  const { selected, content, customClickEvent } = props;

  return selected ? (
    <SelectedChipWrapper>
      <p>{content}</p>
    </SelectedChipWrapper>
  ) : (
    <ChipWrapper onClick={customClickEvent}>
      <HoverableTextWrapper content={content} />
    </ChipWrapper>
  );
};

export default Chip;

const ChipWrapper = styled.button`
  position: relative;
  padding: 10px 25px;
  border-radius: 3px;
  border: 2px solid #121212;
  background-color: transparent;
  color: #121212;
  z-index: 2;
  p {
    font-family: Archivo;
    position: relative;
    margin: 0px;
    font-size: 22px;
    color: #121212 !important;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #4831d4;
    width: 0px;
    height: 100%;
    transition: all 0.3s;
  }

  :hover {
    &:before {
      width: 100%;
    }
    border: 2px solid #4831d4;
    color: #f6f7f8;
    cursor: pointer;
    p {
      background-position: 0 100%;
    }
  }
`;

const SelectedChipWrapper = styled.button`
  background-color: #4831d4;
  border: 2px solid #4831d4;
  position: relative;
  padding: 10px 25px;
  border-radius: 3px;
  color: #e0e3e7;
  p {
    position: relative;
    z-index: 2;
    margin: 0px;
    font-size: 22px;
    color: #e0e3e7 !important;
  }
`;
