import React, { useState } from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  HoverWrapper,
} from "../components/reusable/styled-components";
import AnimatedHamburger from "../components/reusable/animated-hamburger";
import HamburgerModal from "../components/HamburgerModal";

const Header = () => {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <Title>
        <h1>Jason Cornish</h1>
      </Title>
      <HeaderOptions>
        <HoverWrapper>
          <AnimatedHamburger setState={setModalState} state={modalState} />
        </HoverWrapper>
        <HamburgerModal state={modalState} />
      </HeaderOptions>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: fixed;
  width: 90%;
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e0e3e7;
  font-family: Roboto;
  box-sizing: border-box;
  z-index: 1;
  h1 {
    font-size: 35px;
    margin: 0px;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

const Title = styled(HorizontalWrapper)`
  align-items: center;
  column-gap: 10px;
  z-index: 5;
`;

const HeaderOptions = styled(HorizontalWrapper)`
  position: relative;
  align-items: center;
  column-gap: 20px;
`;
