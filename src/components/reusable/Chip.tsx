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
  border: 2px solid #121212;
  position: relative;
  padding: 10px 15px;
  border-radius: 3px;
  color: #121212;
  height: 50px;
  background-color: transparent;
  p {
    position: relative;
    z-index: 2;
    margin: 0px;
    font-size: 20px;
    width: 100%;
    color: #121212 !important;
    font-family: Archivo;
    white-space: nowrap;
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

  @media screen and (max-width: 1200px) {
    padding: 10px 15px !important;
  }
`;

const SelectedChipWrapper = styled.button`
  background-color: #4831d4;
  border: 2px solid #4831d4;
  position: relative;
  padding: 10px 15px;
  border-radius: 3px;
  color: #e0e3e7;
  height: 50px;
  p {
    position: relative;
    z-index: 2;
    margin: 0px;
    font-size: 20px;
    width: 100%;
    color: #e0e3e7 !important;
    font-family: Archivo;
    white-space: nowrap;
  }
  @media screen and (max-width: 1200px) {
    padding: 10px 15px !important;
    height: 50px;
  }
`;
