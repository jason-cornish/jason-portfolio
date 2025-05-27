import { useState } from "react";
import styled from "styled-components";

// interface PropsInterface {
//   isToggled: boolean;
//   handleToggleClick: () => {};
// }

const Toggle = () => {
  //   const { isToggled, handleToggleClick } = props;

  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <ToggleWrapper>
      <Column>
        <h1>Accessibility Mode</h1>
        <p>
          Accessibility mode provides additional features and options designed
          to help individuals with disabilities.{" "}
        </p>
      </Column>
      <Column>
        <ToggleSwitchWrapper isToggled={isToggled} onClick={handleToggleClick}>
          <ToggleThumb isToggled={isToggled} />
        </ToggleSwitchWrapper>
      </Column>
    </ToggleWrapper>
  );
};

export default Toggle;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 20px;
  background-color: #372d55;
  border-radius: 3px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  max-width: 300px;
  h1 {
    margin: 0px;
    font-family: Cardo;
    font-size: 18px;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
  }
  p {
    margin: 0px;
    font-family: Cardo;
    font-size: 16px;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const ToggleSwitchWrapper = styled.div<{ isToggled: boolean }>`
  padding: 3px 3px;
  width: 35px;
  height: 20px;
  background-color: ${(props) =>
    props.isToggled
      ? props.theme.colors.purpleBright
      : props.theme.colors.opaque4};
  border-radius: 1.75em;
  cursor: pointer;
  .toggled {
  }
`;

const ToggleThumb = styled.div<{ isToggled: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 1.75em;
  background-color: ${(props) => props.theme.colors.brightWhite};
  z-index: 10;
  transform: ${(props) => `translate(${props.isToggled ? 15 : 0}px)`};
  /* animation: 200ms ease-in-out 0s slide;
  @keyframes slide {
    0% {
      transform: translate(0px);
    }
    100% {
      transform: translate(15px);
    }
  } */
`;
