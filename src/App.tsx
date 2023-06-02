import React, { useState } from "react";
import styled from "styled-components";
import AppsIcon from "@mui/icons-material/Apps";
import {
  HorizontalWrapper,
  HoverWrapper,
} from "./components/reusable/styled-components";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <Application className="App">
      <BodyWrapper>
        <Header />
        <Body>
          <Landing />
          <AboutMe />
          <Work />
          <Footer />
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
`;

const BodyWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  background-color: #282828;
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
