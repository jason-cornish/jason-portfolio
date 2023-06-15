import React, { useState, useRef } from "react";
import styled from "styled-components";
import AppsIcon from "@mui/icons-material/Apps";
import {
  HorizontalWrapper,
  HoverWrapper,
  VerticalWrapper,
} from "./components/reusable/styled-components";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const workRef = useRef<any>(null);
  const [loadingState, setLoadingState] = useState<boolean>(true);

  const handleLinkClick = () => {
    console.log("running");
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
  }, []);

  return (
    <Application className="App">
      <TransitionGroup component={TransitionWrapper}>
        <CSSTransition timeout={400} classNames="transition">
          <PreLoader className={loadingState ? "visible" : "hidden"}>
            <h1>JASON CORNISH</h1>
            <p>PORTFOLIO LOADING...</p>
          </PreLoader>
        </CSSTransition>
      </TransitionGroup>

      <BodyWrapper>
        <Header />
        <Body>
          <Landing handleLinkClick={handleLinkClick} />
          <AboutMe />
          <Work ref={workRef} />
          <ContactMe />
          {/* <Footer /> */}
        </Body>
      </BodyWrapper>
    </Application>
  );
}

export default App;

const Application = styled.div`
  width: 100%;
  height: 100%;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 13px;
    border-radius: 3px;
    box-sizing: border-box;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: white;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    height: 5px;
    background: #4831d4;
    border-radius: 3px;
    height: 5px;
  }

  .visible {
    display: flex;
  }
  .hidden {
    opacity: 0.01;
    transform: translate(0, 0);
    transition: all 350ms linear;
    display: none;
  }
`;

const TransitionWrapper = styled.div`
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, 10);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 350ms linear;
  }

  .transition-exit {
    display: none;
    opacity: 0;
  }

  .transition-exit-active {
    opacity: 1;
    transition: all 0ms ease-in;
  }
`;

const PreLoader = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: #1b1236;
  h1 {
    text-align: center;
    font-family: Archivo;
    font-size: 60px;
    margin: 0px;
    text-shadow: #4831d4 4px 4px;
    color: #e0e3e7;
    cursor: pointer;
    :hover {
      color: #f6f7f8;
    }
    margin: 0;
  }
  p {
    font-family: Roboto;
    display: inline-block;
    background: linear-gradient(
      -45deg,
      #ee7752,
      #e73c7e,
      #23a6d5,
      #23d5ab,
      #4831d4
    );
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    font-weight: 600;
    position: relative;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 30px;
    margin-top: 10px;

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

const BodyWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  background-color: #1b1236;
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Footer = styled.footer`
//   position: absolute;
//   top: 32%;
//   display: flex;
//   width: 80%;
//   justify-content: flex-end;
//   color: white;
//   padding-bottom: 400px;
// `;
