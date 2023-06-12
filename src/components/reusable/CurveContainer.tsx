import styled from "styled-components";

type StyleProps = {
  fill: string;
  inverted: boolean;
  aligned: string;
};

const CurveContainer = (props: StyleProps) => {
  return (
    <CurveWrapper
      inverted={props.inverted}
      fill={props.fill}
      aligned={props.aligned}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="shape-fill"
        ></path>
      </svg>
    </CurveWrapper>
  );
};

export default CurveContainer;

const CurveWrapper = styled.div<StyleProps>`
  position: absolute;
  bottom: ${(props) => (props.aligned === "bottom" ? `0px` : `auto`)};
  top: ${(props) => (props.aligned === "top" ? `0px` : `auto`)};
  left: 0;
  width: 100%;
  height: 101px;
  line-height: 0;
  box-sizing: border-box;
  rotate: ${(props) => (props.inverted ? `180deg` : `auto`)};

  svg {
    position: relative;
    bottom: ${(props) => (props.inverted ? `-100px` : `auto`)};
    top: ${(props) => (props.inverted ? `auto` : `100px`)};
    display: block;
    width: 100%;
    overflow: hidden;
    height: 101px;
    z-index: 2;
  }

  .shape-fill {
    fill: ${(props) => props.fill};
  }
`;
