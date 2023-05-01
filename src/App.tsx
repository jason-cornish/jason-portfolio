import React from "react";
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
import AnimatedHamburger from "./components/reusable/animated-hamburger";

function App() {
  return (
    <div className="App">
      <BodyWrapper>
        <Header>
          <Title>
            <h1>Jason Cornish</h1>
          </Title>
          <HeaderOptions>
            <HoverWrapper>
              <AnimatedHamburger />
            </HoverWrapper>
          </HeaderOptions>
        </Header>
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
  background-color: #202124;
  background: linear-gradient(-45deg, #202124, #303134, #28292d);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

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
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 80%;
  padding: 40px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e0e3e7;
  font-family: Roboto;
  box-sizing: border-box;
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
`;

const HeaderOptions = styled(HorizontalWrapper)`
  align-items: center;
  column-gap: 20px;
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
