import styled from "styled-components";

type LinkProps = {
  content: string;
};

const LinkButton = (props: LinkProps) => {
  const { content } = props;

  return (
    <LinkButtonWrapper>
      <p>{content}</p>
    </LinkButtonWrapper>
  );
};

export default LinkButton;

const LinkButtonWrapper = styled.button`
  position: relative;
  padding: 5px 25px;
  border-radius: 3px;
  background-color: #404040 !important;
  border: 2px solid #404040;
  background-color: transparent;

  p {
    position: relative;
    z-index: 2;
    margin: 0px;
    font-size: 22px;
    font-family: Roboto;
    color: #e0e3e7 !important;
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
    color: #e0e3e7 !important;
    cursor: pointer;
  }
`;
