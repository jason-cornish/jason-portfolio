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
        <h1>JC</h1>
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
  width: 95%;
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e0e3e7;
  font-family: Archivo;
  box-sizing: border-box;
  z-index: 3;
  h1 {
    font-size: 40px;
    margin: 0px;
    text-shadow: #4831d4 4px 4px;
    color: #e0e3e7;
    cursor: pointer;
    :hover {
      color: #f6f7f8;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 97.5%;
  }

  @media screen and (max-width: 700px) {
    background: rgba(40, 40, 40, 0.95);
    width: 100%;
    padding: 15px 5%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
  width: 42px;
  height: 30px;
`;
