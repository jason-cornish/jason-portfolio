import {
  ReactNode,
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import CloseIcon from "@mui/icons-material/Close";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface PropsInterface {
  button: ReactNode;
  content: ReactNode;
  isDarkMode?: Boolean;
  title: string;
  footerText: string;
}

const Popover = (props: PropsInterface) => {
  const { button, content, isDarkMode, title, footerText } = props;
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [popoverCoordinates, setPopoverCoordinates] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState<Boolean | null>(null);

  /*
    State corresponds to an 150ms window in between button click and modal being closed
    Used to display a closing animation for popover
  */
  const [isActivelyClosing, setIsActivelyClosing] = useState(false);

  /*
    Handles state events upon button click
  */
  const handleButtonClick = useCallback(() => {
    if (isOpen && !isActivelyClosing) {
      setIsActivelyClosing(true);
      setTimeout(() => {
        setIsActivelyClosing(false);
        setIsOpen(false);
      }, 150);
      return;
    } else if (!isOpen && !isActivelyClosing) {
      setIsOpen(true);
      setIsActivelyClosing(false);
      return;
    }
  }, [isActivelyClosing, isOpen]);

  /*
    Dynamically calculates the x and y position of the popover to be underneath the button
  */
  useEffect(() => {
    const popoverElement = popoverRef?.current;
    const buttonElement = buttonRef?.current;

    if (popoverElement && buttonElement) {
      setTimeout(() => {
        const buttonElementPosition = buttonElement.getBoundingClientRect();
        const popoverElementPosition = popoverElement.getBoundingClientRect();

        const popoverWidth = popoverElementPosition.width;

        const yPosition = window.pageYOffset;
        const buttonHeight = buttonElementPosition.height;
        const buttonWidth = buttonElementPosition.width / 2;

        const buttonSizeOffset = buttonHeight + 13;
        const buttonTop =
          buttonElementPosition.top + yPosition + buttonSizeOffset;
        const buttonBottom = buttonElementPosition.bottom;

        // const popoverWidthHalf = popoverWidth / 2;

        // const popoverLeft =

        const buttonLeft =
          buttonElementPosition.left - (popoverWidth / 2 - buttonWidth);

        const buttonRight = buttonElementPosition.right + popoverWidth / 2;

        setPopoverCoordinates({
          top: buttonTop,
          bottom: buttonBottom,
          left: buttonLeft,
          right: buttonRight,
        });
      }, 0);
    }
  });

  const contentWrapperClassName = useMemo(() => {
    if (isActivelyClosing) return "closing-popover";
    else if (isOpen) return "visible-popover";
    return "hidden-popover";
  }, [isOpen, isActivelyClosing]);

  /*Rendering popover within a portal to escape the parental property of overflow-hidden*/
  const contentToRender = useMemo(() => {
    return isOpen ? (
      createPortal(
        <ContentParentWrapper>
          <ContentWrapper
            isDarkMode={isDarkMode || false}
            ref={popoverRef}
            style={{
              top: `${popoverCoordinates.top}px`,
              bottom: `${popoverCoordinates.bottom}px`,
              left: `${popoverCoordinates.left}px`,
              // right: `${popoverCoordinates.right}px`,
            }}
            className={contentWrapperClassName}
          >
            <Header>
              <p>{title} Selector</p>
              <CloseIcon htmlColor="#c2bcd7" onClick={handleButtonClick} />
            </Header>
            <Content>{content}</Content>
            <Footer>
              <Column>
                <p>{footerText}</p>
              </Column>
              <Column>
                <Button onClick={handleButtonClick}>
                  <p>Done</p>
                </Button>
              </Column>
            </Footer>
          </ContentWrapper>
        </ContentParentWrapper>,
        document.body
      )
    ) : (
      <div />
    );
  }, [
    contentWrapperClassName,
    isDarkMode,
    popoverRef,
    popoverCoordinates,
    isOpen,
    title,
    content,
    footerText,
    handleButtonClick,
  ]);

  return (
    <PopoverWrapper>
      <ButtonWrapper
        onClick={handleButtonClick}
        ref={buttonRef}
        className="button-wrapper"
      >
        {button}
      </ButtonWrapper>
      {contentToRender}
    </PopoverWrapper>
  );
};

export default Popover;

const PopoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ContentParentWrapper = styled.div`
  .visible-popover {
    animation: 200ms ease-in-out 0s appear;
    @keyframes appear {
      0% {
        transform: scale(0.2);
        transform-origin: left;
        opacity: 20%;
      }
      100% {
        transform: scale(1);
        transform-origin: left;
        opacity: 100%;
      }
    }
  }
  .closing-popover {
    animation: 200ms ease-in-out 0s disappear;

    @keyframes disappear {
      0% {
        transform: scale(1);
        opacity: 100%;
        transform-origin: left;
      }
      100% {
        transform: scale(0.2);
        opacity: 0%;
        transform-origin: left;
      }
    }
  }
  .hidden-popover {
    transform: scale(0);
    transform-origin: left;
    opacity: 0%;
  }
`;

const ContentWrapper = styled.div<{ isDarkMode: Boolean }>`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  border-radius: 3px;
  /* border: 1px solid
    ${(props) =>
    props.isDarkMode
      ? props.theme.colors.opaque5
      : props.theme.colors.darkOpaque5}; */
  /* background-color: ${(props) =>
    props.isDarkMode ? "#150e2b" : "#241d3f"}; */
  z-index: 10;
  padding: 0px;
  /* box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0.5px 1px inset,
    rgba(20, 21, 26, 0.075) 0px 0px 0px 1px,
    rgba(20, 21, 26, 0.02) 0px 0.3px 0.4px,
    rgba(20, 21, 26, 0.043) 0px 0.9px 1.5px,
    rgba(20, 21, 26, 0.09) 0px 3.5px 6px; */

  ::before {
    position: absolute;
    top: -14px;
    content: "";
    left: 155px;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    margin-left: -7px;
    border-bottom: 15px solid #3e3852;
    z-index: 11;
    border-radius: 5px;
  }

  ::after {
    position: absolute;
    top: -15px;
    left: 155px;
    content: "";
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    margin-left: -8px;
    border-bottom: 15px solid ${(props) => props.theme.colors.opaque3};
    border-radius: 5px;
    z-index: 10;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.colors.opaque3};
  border-radius: 3px 3px 0px 0px;
  background-color: #3e3852;
  padding: 5px 10px;
  p {
    margin: 0px;
    font-family: Cardo;
    font-size: 16px;
    color: ${(props) => props.theme.colors.grey};
    font-weight: 600;
  }
  svg {
    cursor: pointer;
    :hover {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

const Content = styled.div`
  position: relative;
  border-left: 1px solid ${(props) => props.theme.colors.opaque3};
  border-right: 1px solid ${(props) => props.theme.colors.opaque3};
  box-sizing: border-box;
  background-color: #2a2440;
  padding-right: 10px;
`;

const Footer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  border: 1px solid ${(props) => props.theme.colors.opaque3};
  border-radius: 0px 0px 3px 3px;
  background-color: #3e3852;
  padding: 5px 10px;
  column-gap: 10px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: Cardo;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};
    margin: 0px;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 300ms ease-in-out;
  background-color: #2a2440;
  :hover {
    background-color: ${(props) => props.theme.colors.opaque4};
    cursor: pointer;
  }
  border-radius: 3px;
  padding: 10px;
  p {
    font-family: Cardo;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey};
    margin: 0px;
  }
`;

const ButtonWrapper = styled.div``;
