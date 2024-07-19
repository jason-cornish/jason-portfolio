import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const AnimatedHamburger = (props: any) => {
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

  useEffect(() => {
    if (hamburgerRef.current && !props.state) {
      console.log(props.state);
      hamburgerRef.current.className = "";
    }
  }, [props.state]);

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
  position: absolute;
  background-color: transparent;
  z-index: 5;
  top: 3px;
  left: 3px;

  #nav-icon3 {
    width: 35px;
    height: 35px;
    position: absolute;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  #nav-icon3 span {
    /* box-shadow: 3px 3px #6551db; */
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #d0cae6;
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

  #nav-icon3.open span {
    box-shadow: 0px 0px #6551db !important;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 11px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 22px;
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

  @media screen and (max-width: 700px) {
    #nav-icon3 {
      width: 30px;
      height: 20px;
    }

    #nav-icon3 span:nth-child(1) {
      top: 0px;
    }

    #nav-icon3 span:nth-child(2),
    #nav-icon3 span:nth-child(3) {
      top: 8px;
    }

    #nav-icon3 span:nth-child(4) {
      top: 16px;
    }

    #nav-icon3.open span:nth-child(1) {
      top: 16px;
      width: 0%;
      left: 50%;
    }
  }
`;
