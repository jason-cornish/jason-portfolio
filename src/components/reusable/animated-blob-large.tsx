import styled from "styled-components";

const AnimatedBlobLarge = () => {
  return (
    <Wrapper>
      <Blob>
        <svg viewBox="0 0 248 248" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="10.02"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>

          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </Blob>
    </Wrapper>
  );
};

export default AnimatedBlobLarge;

const Wrapper = styled.div`
  position: relative;
  padding-top: 20px;
  animation: opacify 10s ease-in-out infinite;
  @keyframes opacify {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0.8;
    }
    66% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Blob = styled.div`
  svg {
    width: 350px;
    height: 350px;
    filter: contrast(150%) brightness(70%);
    background: radial-gradient(
        circle at -24% -26%,
        rgba(72, 49, 212, 1),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        circle at 66% 105%,
        rgba(231, 60, 126, 1),
        rgba(255, 0, 255, 0)
      ),
      radial-gradient(
        circle at 71% 25%,
        rgba(224, 227, 231, 1),
        rgba(0, 255, 255, 0)
      ),
      radial-gradient(
        circle at 17% 137%,
        rgba(35, 166, 213, 1),
        rgba(0, 0, 255, 0)
      ),
      url(/👆/that/noise.svg);

    transition: all 10s ease-in-out;
    animation: animate 10s ease-in-out infinite;

    @media screen and (min-width: 1201px) {
      @keyframes animate {
        0% {
          filter: contrast(150%) brightness(70%);
          border-radius: 43% 57% 41% 59% / 58% 32% 68% 42%;
          background-position: 0% 25%;
        }
        33% {
          filter: contrast(170%) brightness(70%);
          border-radius: 74% 26% 51% 49% / 72% 48% 52% 28%;
          background-position: 50% 50%;
        }
        66% {
          filter: contrast(160%) brightness(70%);
          border-radius: 38% 62% 60% 40% / 72% 40% 60% 28%;
          background-position: 100% 50%;
        }
        100% {
          filter: contrast(150%) brightness(70%);
          border-radius: 43% 57% 41% 59% / 58% 32% 68% 42%;
          background-position: 0% 25%;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      display: none;
      padding-top: 60px;
      @keyframes animate {
        0% {
          width: 300px;
          height: 300px;
          border-radius: 43% 57% 41% 59% / 58% 32% 68% 42%;
          background-position: 0% 50%;
        }
        33% {
          height: 300px;
          width: 300px;
          border-radius: 74% 26% 51% 49% / 72% 48% 52% 28%;
          background-position: 50% 50%;
        }
        66% {
          height: 300px;
          width: 300px;
          border-radius: 38% 62% 60% 40% / 72% 40% 60% 28%;
          background-position: 100% 50%;
        }
        100% {
          height: 300px;
          width: 300px;
          border-radius: 43% 57% 41% 59% / 58% 32% 68% 42%;
          background-position: 0% 50%;
        }
      }
    }
  }
`;
