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
    props.isSelected
      ? props.theme.colors.purpleDark
      : props.theme.colors.opaque1};
  border: ${(props) =>
    props.isSelected
      ? `2px solid ${props.theme.colors.purpleDark}`
      : `2px solid transparent`};
  /* filter: blur(0,5px); */
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
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${(props) => props.theme.colors.purpleDark};
    width: ${(props) => (props.isSelected ? "100%" : "0px")};
    height: 100%;
    transition: all 0.3s;
  }

  :hover {
    &:before {
      width: 100%;
    }
    border: 2px solid ${(props) => props.theme.colors.opaque1};
    cursor: pointer;
  }
  @media screen and (max-width: 1200px) {
    padding: 3px 15px;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
