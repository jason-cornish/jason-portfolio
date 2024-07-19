import styled from "styled-components";

const CenterBlob = () => {
  return (
    <Wrapper className="small">
      <Blob2>
        <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
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

export default CenterBlob;

const Wrapper = styled.div`
  position: absolute;
  right: auto;
  transform: rotate(180deg);
  filter: blur(100px);
  /* animation: opacify 10s ease-in-out infinite; */
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
  svg {
    width: 500px;
    height: 400px;
    filter: contrast(150%) brightness(70%);
    /* background: radial-gradient(
        circle at -24% -26%,
        rgba(208, 202, 230, 1),
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(
        circle at 66% 105%,
        rgba(67, 45, 131, 1),
        rgba(255, 0, 255, 0)
      ),
      radial-gradient(circle at 71% 25%, #4831d4, rgba(0, 255, 255, 0)),
      radial-gradient(circle at 17% 137%, #1b1236, rgba(0, 0, 255, 0)),
      url(/👆/that/noise.svg); */
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

    background: rgba(35, 213, 171, 1) url(/👆/that/noise.svg);
    transition: all 15s ease-in-out;
    /* animation: animatesmall 15s ease-in-out infinite; */

    @media screen and (min-width: 1201px) {
      @keyframes animatesmall {
        0% {
          height: 180px;
          filter: contrast(150%) brightness(70%);
          border-radius: 78% 22% 83% 17% / 85% 62% 38% 15%;
        }
        33% {
          height: 180px;
          filter: contrast(170%) brightness(70%);
          border-radius: 67% 33% 15% 85% / 33% 63% 37% 67%;
        }
        66% {
          filter: contrast(160%) brightness(70%);
          border-radius: 28% 72% 42% 58% / 49% 75% 25% 51%;
        }
        100% {
          filter: contrast(150%) brightness(70%);
          border-radius: 78% 22% 83% 17% / 85% 62% 38% 15%;
        }
      }
    }

    @media screen and (max-width: 1200px) {
      display: none;
      padding-top: 60px;
      @keyframes animatesmall {
        0% {
          filter: contrast(150%) brightness(70%);
          border-radius: 33% 67% 51% 49% / 65% 78% 22% 35%;
        }
        33% {
          filter: contrast(170%) brightness(70%);
          border-radius: 67% 33% 15% 85% / 33% 63% 37% 67%;
        }
        66% {
          height: 180px;
          filter: contrast(160%) brightness(70%);
          border-radius: 28% 72% 42% 58% / 49% 75% 25% 51%;
        }
        100% {
          height: 180px;
          filter: contrast(150%) brightness(70%);
          border-radius: 78% 22% 83% 17% / 85% 62% 38% 15%;
        }
      }
    }
  }
`;
