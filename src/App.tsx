import React, { useState, useRef } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ComponentsSection from "./components/ComponentsSections";
import RingsOfLights from "./components/ring-of-lights/rings-of-lights";
import NewLanding from "./components/new-landing";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import Footer from "./components/Footer";

// const theme = {
//   colors: {
//     grey: "#c2bcd7",
//     white: "#d0cae6",
//     purple: "#9f8ce1",
//     purpleDark: "#6550b8",
//     purpleDarker: "#51428e",
//     opaque1: "rgba(208, 202, 230, 0.05)",
//     opaque2: "rgba(208, 202, 230, 0.10)",
//     opaque3: "rgba(208, 202, 230, 0.15)",
//     opaque4: "rgba(208, 202, 230, 0.25)",
//     opaque5: "rgba(208, 202, 230, 0.30)",
//     opaque6: "rgba(208, 202, 230, 0.50)",
//     opaque7: "rgba(208, 202, 230, 0.70)",
//     darkOpaque1: "rgba(29, 26, 39, 0.1)",
//     darkOpaque2: "rgba(29, 26, 39, 0.2)",
//     darkOpaque3: "rgba(29, 26, 39, 0.4)",
//     darkOpaque4: "rgba(29, 26, 39, 0.5)",
//     darkOpaque5: "rgba(29, 26, 39, 0.75)",
//   },
// };

const theme = {
  colors: {
    grey: "#c2bcd7",
    greyer: "#a7a1be",
    white: "#d0cae6",
    brightWhite: "#e4dff3",
    greenWhite: "#d0e6ca",
    purple: "#C1F80A",
    highlight: "#c1f80a",
    darkerHighlight: "#acdd0a",
    purpleBright: "#6f53e0",
    purpleDark: "#6550b8",
    purpleDarker: "#51428e",
    opaque1: "rgba(208, 202, 230, 0.05)",
    opaque2: "rgba(208, 202, 230, 0.10)",
    opaque3: "rgba(208, 202, 230, 0.15)",
    opaque4: "rgba(208, 202, 230, 0.25)",
    opaque5: "rgba(208, 202, 230, 0.30)",
    opaque6: "rgba(208, 202, 230, 0.50)",
    opaque7: "rgba(208, 202, 230, 0.70)",
    darkOpaque1: "rgba(29, 26, 39, 0.1)",
    darkOpaque2: "rgba(29, 26, 39, 0.2)",
    darkOpaque3: "rgba(29, 26, 39, 0.4)",
    darkOpaque4: "rgba(29, 26, 39, 0.5)",
    darkOpaque5: "rgba(29, 26, 39, 0.75)",
  },
};

function App() {
  const homeRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);
  const workRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  const [loadingState, setLoadingState] = useState<boolean>(true);

  const handleLinkClick = (refType: string) => {
    const refMapping: any = {
      home: homeRef,
      about: aboutRef,
      work: workRef,
      contact: contactRef,
    };

    refMapping[refType].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 1500);
  }, []);

  return (
    <Application className="App">
      <ThemeProvider theme={theme}>
        <TransitionGroup component={TransitionWrapper}>
          <CSSTransition timeout={400} classNames="transition">
            <PreLoader className={loadingState ? "visible" : "hidden"}>
              <LoadingWrapper>
                <TextWrapper>
                  <h1>
                    J<span>ason</span> C<span>ornish</span>
                  </h1>
                  <p>
                    P<span>ortfolio</span> L<span>oading</span>...
                  </p>
                </TextWrapper>

                <div className="loader"></div>
                <div className="loader-2" />
                {/* <p>Portfolio Loading...</p> */}
              </LoadingWrapper>
              {/* <RingsOfLights /> */}
            </PreLoader>
          </CSSTransition>
        </TransitionGroup>
        <MobileWarningWrapper>
          <MobileWarning>
            <h2>Mobile Site Under Construction</h2>
            <h3>Please visit on a different device for now</h3>
            <CarpenterIcon className="carpenting-icon" />
            <PlumbingIcon className="plumbing-icon" />
          </MobileWarning>
        </MobileWarningWrapper>

        <BodyWrapper>
          <Header handleLinkClick={handleLinkClick} />
          <RingsOfLights />
          <Body>
            {/* <SideBody>
              <NewLanding />
            </SideBody> */}
            {/* <ScrollableBody> */}
            <NewLanding />
            <AboutMe ref={aboutRef} />
            <ComponentsSection ref={workRef} />
            <ContactMe ref={contactRef} />

            {/* </ScrollableBody> */}
          </Body>
        </BodyWrapper>
      </ThemeProvider>
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 10;
  row-gap: 0px;
  background-color: #150e2b;
`;

const MobileWarningWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 10;
  row-gap: 0px;
  background-color: #150e2b;
  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
  }
`;

const MobileWarning = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.opaque1};
  border-radius: 3px;
  row-gap: 5px;
  .plumbing-icon {
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
  .carpenting-icon {
    position: absolute;
    left: 15px;
    bottom: 15px;
  }
  svg {
    color: #c2bcd7;
    width: 80px;
    height: 80px;
  }
  h2 {
    max-width: 350px;
    text-align: center;
    font-family: Cardo;
    font-size: 30px;
    margin: 0px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
  h3 {
    max-width: 250px;
    text-align: center;
    font-family: Cardo;
    font-size: 20px;
    font-weight: 500;
    margin: 0px;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const LoadingWrapper = styled.div`
  position: relative;
  flex-direction: column;
  :before {
    content: "";
    position: absolute;
    width: 10%;
    height: 100%;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.opaque3};
    animation: 1500ms linear 0ms widen infinite;
    @keyframes widen {
      0% {
        width: 0%;
      }
      /* 30% {
        width: 30%;
      }
      50% {
        width: 40%;
      }
      70% {
        width: 60%;
      } */
      100% {
        width: 100%;
      }
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.opaque1};
  border-radius: 3px;
  h1 {
    text-align: center;
    font-family: Cardo;
    font-size: 70px;
    margin: 0px;
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    margin-bottom: -15px;
    z-index: 10;
    span {
      font-size: 60px;
      ${(props) => props.theme.colors.grey};
    }
    margin-top: 10px;

    @keyframes gradient {
      0% {
        background-position: 100% 0%;
      }
      100% {
        background-position: 0% -100%;
      }
    }
  }
  p {
    margin-top: -100px;
    text-align: center;
    font-family: Cardo;
    font-size: 25px;
    font-weight: 600;
    margin: 0px;
    color: ${(props) => props.theme.colors.highlight};
    cursor: pointer;
    margin: 0;
    z-index: 10;
    span {
      font-size: 23px;
    }
  }
`;

/* HTML: <div class="loader"></div> */
// .loader {
//   width: fit-content;
//   font-weight: bold;
//   font-family: monospace;
//   font-size: 30px;
//   background:linear-gradient(90deg,#000 50%,#0000 0) right/200% 100%;
//   animation: l21 2s infinite linear;
// }
// .loader::before {
//   content :"Loading...";
//   color: #0000;
//   padding: 0 5px;
//   background: inherit;
//   background-image: linear-gradient(90deg,#fff 50%,#000 0);
//   -webkit-background-clip:text;
//           background-clip:text;
// }

// @keyframes l21{
//   100%{background-position: left}
// }

const BodyWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  background-color: #150e2b;
`;

const Body = styled.section`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 250px;
  padding-bottom: 250px;
  position: relative;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const SideBody = styled.div`
  height: calc(100vh - 90px);
  overflow: contain;
  position: fixed;
`;

const ScrollableBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-left: 390px;
  row-gap: 30px;
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
