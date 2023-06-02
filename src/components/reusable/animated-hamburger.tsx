import React, { useRef, useState } from "react";
import styled from "styled-components";

const AnimatedHamburger = (props: any) => {
  const [hamburgerState, setHamburgerState] = useState(false);

  const hamburgerRef: any = useRef(null);

  const clickHamburger = () => {
    if (hamburgerRef.current) {
      const hamburger = hamburgerRef.current;
      if (props.state) {
        hamburger.className = "";
        props.setState(false);
        return;
      }
      hamburger.className = "open";
      props.setState(true);
    }
  };

  return (
    <Hamburger>
      <div id="nav-icon3" ref={hamburgerRef} onClick={() => clickHamburger()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Hamburger>
  );
};

export default AnimatedHamburger;

const Hamburger = styled.div`
  z-index: 5;
  &:hover {
    #nav-icon3 span {
      background: #f6f7f8;
    }
  }
  #nav-icon3 {
    width: 40px;
    height: 35px;
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon3 span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    box-shadow: 4px 4px #4831d4;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 12px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 24px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
`;
