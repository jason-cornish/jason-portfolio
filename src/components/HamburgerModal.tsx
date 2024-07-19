import React, { useRef } from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

type PropsType = {
  state: boolean;
  setState: any;
  handleLinkClick: any;
};

const HamburgerModal = (props: PropsType) => {
  const nodeRef = useRef<any>(null);
  return (
    <div>
      {props.state ? (
        <ModalWrapper ref={nodeRef}>
          <Header>Navigate</Header>
          <Links>
            <Link
              onClick={() => [
                props.setState(false),
                props.handleLinkClick("about"),
              ]}
            >
              About
            </Link>
            <Link
              onClick={() => [
                props.setState(false),
                props.handleLinkClick("work"),
              ]}
            >
              Work
            </Link>
            <Link
              onClick={() => [
                props.setState(false),
                props.handleLinkClick("contact"),
              ]}
            >
              Contact
            </Link>
          </Links>
          <Row>
            <MobileRow
              href="https://www.linkedin.com/in/jason-cornish5/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: 36, color: "#e0e3e7" }} />
            </MobileRow>
            <MobileRow
              href="https://github.com/jason-cornish"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ fontSize: 36, color: "#e0e3e7" }} />
            </MobileRow>

            <MobileRow
              href="mailto: jasoncornish14@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon sx={{ fontSize: 36, color: "#e0e3e7" }} />
            </MobileRow>
          </Row>
          <MobileColumns>
            <Header>Find me</Header>
            <MobileRow
              href="https://www.linkedin.com/in/jason-cornish5/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: 40, color: "#e0e3e7" }} />
              <p>jason-cornish5</p>
            </MobileRow>
            <MobileRow
              href="https://github.com/jason-cornish"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ fontSize: 40, color: "#e0e3e7" }} />
              <p>jason-cornish</p>
            </MobileRow>
            <MobileRow
              href="mailto: jasoncornish14@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon sx={{ fontSize: 40, color: "#e0e3e7" }} />
              <p>jasoncornish14@gmail.com</p>
            </MobileRow>
          </MobileColumns>
        </ModalWrapper>
      ) : (
        <div />
      )}
    </div>
  );
};

export default HamburgerModal;

const ModalWrapper = styled(VerticalWrapper)`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 300px;
  background-color: #4831d4;
  border-radius: 3px;
  z-index: 4;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px 0px 30px 0px;
  box-sizing: border-box;
  row-gap: 15px;
  .modal-enter {
    opacity: 0;
  }

  .modal-enter-active {
    opacity: 1;
    transition: opacity 300ms linear;
  }

  .modal-exit {
    opacity: 0;
  }

  .modal-exit-active {
    opacity: 1;
    transition: all 300ms linear;
  }

  h2 {
    display: none;
  }

  @media screen and (max-width: 700px) {
    padding-top: 100px;
    position: fixed;
    width: 100vw;
    height: 100vh;
    padding-left: 22.5%;
    z-index: 4;
    top: 0;
    bottom: 0;
    background-color: #1b1236;
    row-gap: 0px;
    h2 {
      display: flex;
    }
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 30px;
  row-gap: 15px;
  width: auto;

  @media screen and (max-width: 700px) {
    padding: 0;
    row-gap: 60px;
    padding-top: 10px;
    margin-bottom: 50px;
    li {
      font-size: 45px;
    }
  }
`;

const Link = styled.li`
  width: auto;
  color: #e0e3e7;
  font-family: Archivo;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #f6f7f8;
    font-size: 24px;
  }
`;

const Row = styled(HorizontalWrapper)`
  position: relative;
  bottom: 0;
  width: 100%;
  justify-content: space-evenly;
  .MuiSvgIcon-root:hover {
    cursor: pointer;
    color: #f6f7f8;
  }

  @media screen and (max-width: 700px) {
    display: none;
    row-gap: 30px;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const MobileColumns = styled(VerticalWrapper)`
  display: none;

  @media screen and (max-width: 700px) {
    display: flex;
    row-gap: 0px;
    flex-direction: column;
  }
`;

const Header = styled.h2`
  color: #432d83;
  margin: 0;
  margin-bottom: 15px;
  font-size: 26px;
`;

const MobileRow = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  column-gap: 10px;
  text-decoration: none;
  color: #e0e3e7;
  width: auto;
  cursor: pointer;
  :hover {
    p {
      color: #f6f7f8;
    }
  }
`;
