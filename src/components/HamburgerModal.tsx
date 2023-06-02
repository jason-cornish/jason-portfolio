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
};

const HamburgerModal = (props: PropsType) => {
  const nodeRef = useRef<any>(null);
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        nodeRef={nodeRef}
        timeout={300}
        classNames="modal"
        key={props.state ? "modal" : "none"}
      >
        {props.state ? (
          <ModalWrapper ref={nodeRef}>
            <Links>
              <Link>My Work</Link>
              <Link>Contact Me</Link>
              <Link>Resume</Link>
            </Links>
            <Row>
              <LinkedInIcon sx={{ fontSize: 40, color: "#e0e3e7" }} />
              <GitHubIcon sx={{ fontSize: 40, color: "#e0e3e7" }} />
              <EmailIcon sx={{ fontSize: 40, color: "#e0e3e7" }} />
            </Row>
          </ModalWrapper>
        ) : (
          <div />
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default HamburgerModal;

const ModalWrapper = styled(VerticalWrapper)`
  position: absolute;
  top: -20px;
  right: -15px;
  width: 350px;
  background-color: #4831d4;
  border-radius: 3px;
  z-index: 4;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 50px 0px 50px 0px;
  box-sizing: border-box;
  row-gap: 35px;
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
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 40px;
  row-gap: 35px;
  width: auto;
`;

const Link = styled.li`
  width: auto;
  color: #e0e3e7;
  font-family: Archivo;
  font-size: 30px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: #f6f7f8;
  }
`;

const Row = styled(HorizontalWrapper)`
  width: 100%;
  justify-content: space-evenly;
  .MuiSvgIcon-root:hover {
    cursor: pointer;
    color: #f6f7f8;
  }
`;
