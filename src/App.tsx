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
    <div className="App">
      <BodyWrapper>
        <Header />
        <Body>
          <Landing />
          <AboutMe />
          <Work />
          <Footer />
        </Body>
      </BodyWrapper>
    </div>
  );
}

export default App;

const BodyWrapper = styled.div`
  width: 100vw;

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
