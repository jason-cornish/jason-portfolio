import React, { useState } from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  HoverWrapper,
} from "../components/reusable/styled-components";
import AnimatedHamburger from "../components/reusable/animated-hamburger";
import HamburgerModal from "../components/HamburgerModal";

const Header = (props: any) => {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <Title onClick={() => props.handleLinkClick("home")}>
        <h1>J<span>ason</span>C<span>ornish</span></h1>
      </Title>
      <HeaderOptions>
        <HamburgerWrapper>
          <AnimatedHamburger setState={setModalState} state={modalState} />
        </HamburgerWrapper>

        <HamburgerModal
          state={modalState}
          setState={setModalState}
          handleLinkClick={props.handleLinkClick}
        />
      </HeaderOptions>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  width: calc(100% - 30px);
  /* background-color: #4831d4; */
  margin-top: 15px;
  /* padding: 10px 15px; */
  display: flex;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  box-sizing: border-box;
  z-index: 3;
  pointer-events: none;
  h1 {
    font-size: 24px;
    margin: 0px;
    color: ${(props) => props.theme.colors.white};
    font-family: Cardo;
    span {
      font-size: 18px;
      ${(props) => props.theme.colors.grey};
    }
    /* text-shadow: 3px 3px #6551db; */
    /* -webkit-text-stroke: 6px #432d83;
    paint-order: stroke fill; */
    cursor: pointer;
    :hover {
    }
    pointer-events: auto;
  }
  @media screen and (max-width: 1200px) {
    width: 97.5%;
  }

  @media screen and (max-width: 700px) {
    background: #4831d4;
    width: 95%;
    padding: 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    h1 {
      font-size: 20px;
    }
  }
`;

const Title = styled(HorizontalWrapper)`
  align-items: center;
  column-gap: 10px;
  position: relative;
  z-index: 5;
  transition: background-color 300ms ease-in-out;
  /* background-color: #432d83; */
  background-color: ${(props) => props.theme.colors.opaque1};
  border-radius: 3px;
  padding: 15px 20px;
  :hover {
    background-color: ${(props) => props.theme.colors.purpleDark};
  }
`;

const HamburgerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 5;
  border-radius: 6px;
`;

const HeaderOptions = styled(HorizontalWrapper)`
  position: relative;
  pointer-events: auto;
  /* background-color: #432d83; */
  background-color: ${(props) => props.theme.colors.opaque1};
  width: 40px;
  height: 30px;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.13), 0 1px 4px 0 rgba(0, 0, 0, 0.11);
  transition: all 300ms ease-in-out;
  cursor: pointer;
  :hover {
    #nav-icon3 span {
      background-color: ${(props) => props.theme.colors.white};
      fill: ${(props) => props.theme.colors.white};
    }
    background-color: ${(props) => props.theme.colors.purpleDark};
  }
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;
