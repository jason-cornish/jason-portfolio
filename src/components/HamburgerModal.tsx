import React from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

type PropsTypes = {
  state: boolean;
};

const HamburgerModal = (props: PropsTypes) => {
  const { state } = props;
  return state ? (
    <ModalWrapper>
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
  );
};

export default HamburgerModal;

const ModalWrapper = styled(VerticalWrapper)`
  position: absolute;
  top: -30px;
  right: -25px;
  width: 350px;
  background-color: #4831d4;
  border-radius: 3px;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 50px 0px 50px 0px;
  box-sizing: border-box;
  row-gap: 35px;
  transition: height 200ms;
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
