import styled from "styled-components";

const RightBlob = () => {
  return (
    <Wrapper className="small">
      <Blob2>
        <svg viewBox="0 0 165 145  0" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter2">
            <feTurbulence
              type="turbulence"
              baseFrequency="10.02"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>

          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </Blob2>
    </Wrapper>
  );
};

export default RightBlob;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  /* animation: opacify 5s ease-in-out infinite; */
  /* @keyframes opacify {
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
  } */
`;

const Blob2 = styled.div`
  filter: blur(100px);
  svg {
    width: 605px;
    height: 500px;
    filter: contrast(100%) brightness(100%);
    /* background: radial-gradient(
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
      url(/👆/that/noise.svg); */

    background: rgba(35, 166, 213, 1) url(/👆/that/noise.svg);
    /* background: radial-gradient(
        circle at 115% 128%,
        rgba(13, 98, 244, 1),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        circle at 27% 76%,
        rgba(35, 213, 171, 1),
        rgba(255, 0, 255, 0)
      ),
      radial-gradient(
        circle at 30% 68%,
        rgba(224, 227, 231, 1),
        rgba(0, 0, 0, 0)
      ),
      url(/👆/that/noise.svg); */

    @media screen and (min-width: 1201px) {
      @keyframes animatesmall {
        0% {
          filter: contrast(150%) brightness(70%);
          border-radius: 57% 43% 29% 71% / 52% 75% 25% 48%;
        }
        33% {
          filter: contrast(170%) brightness(70%);
          border-radius: 67% 33% 15% 85% / 33% 63% 37% 67%;
        }
        66% {
          filter: contrast(160%) brightness(70%);
          border-radius: 54% 46% 35% 65% / 49% 100% 0% 51%;
        }
        100% {
          filter: contrast(150%) brightness(70%);
          border-radius: 57% 43% 29% 71% / 52% 75% 25% 48%;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      display: none;
      @keyframes animatesmall {
        0% {
          filter: contrast(150%) brightness(70%);
          border-radius: 57% 43% 29% 71% / 52% 75% 25% 48%;
        }
        33% {
          filter: contrast(170%) brightness(70%);
          border-radius: 77% 23% 80% 20% / 28% 86% 14% 72%;
        }
        66% {
          filter: contrast(160%) brightness(70%);
          border-radius: 54% 46% 35% 65% / 49% 100% 0% 51%;
        }
        100% {
          filter: contrast(150%) brightness(70%);
          border-radius: 57% 43% 29% 71% / 52% 75% 25% 48%;
        }
      }
    }
  }
`;
