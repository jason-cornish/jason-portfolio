import styled from "styled-components";

type LinkProps = {
  content: string;
  handleClick: any | null;
  destination: string;
  isSelected?: boolean;
};

const LinkButton = (props: LinkProps) => {
  const { content, destination, handleClick, isSelected } = props;

  return (
    <LinkButtonWrapper
      onClick={() => handleClick(destination)}
      isSelected={isSelected || false}
    >
      <p>{content}</p>
    </LinkButtonWrapper>
  );
};

export default LinkButton;

const LinkButtonWrapper = styled.button<{ isSelected: boolean }>`
  position: relative;
  padding: 5px 25px;
  border-radius: 3px;
  /* background-color: ${(props) =>
    props.isSelected ? "#4831d4" : "#432d83"} !important;
  border: ${(props) =>
    props.isSelected ? "2px solid #4831d4" : "2px solid #432d83"}; */
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.opaque5 : props.theme.colors.opaque1};
  /* border: ${(props) =>
    props.isSelected
      ? `2px solid ${props.theme.colors.opaque5}`
      : `2px solid  ${props.theme.colors.opaque1}`}; */
  border: 0px solid transparent;
  transition: background-color 300ms ease-in-out;
  /* background-color: transparent; */
  white-space: nowrap;
  p {
    position: relative;
    z-index: 2;
    margin: 0px;
    font-size: 18px;
    font-family: Cardo;
    color: ${(props) => props.theme.colors.white} !important;
    line-height: 40px;
    transition: color 300ms ease-in-out;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.opaque3};
    cursor: pointer;
  }
  /* &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.colors.opaque5};
    width: ${(props) => (props.isSelected ? "100%" : "0px")};
    height: 100%;
    transition: all 0.3s;
  } */

  /* :hover {
    &:before {
      width: 100%;
    } */
  /* border: 2px solid ${(props) => props.theme.colors.opaque1}; */
  /* cursor: pointer;
  } */
`;
