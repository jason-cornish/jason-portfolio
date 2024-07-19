import styled from "styled-components";

const OpenSign = () => {
  return (
    <OpenSignWrapper>
      <BlueBorder>
        <TopRow>
          <LetterWrapper>
            <h1>O</h1>
          </LetterWrapper>
          <LetterWrapper>
            <h1>P</h1>
          </LetterWrapper>
          <LetterWrapper>
            <h1>E</h1>
          </LetterWrapper>
          <LetterWrapper>
            <h1>N</h1>
          </LetterWrapper>
        </TopRow>
        <BottomRow>
          <h1>FOR WORK</h1>
        </BottomRow>
      </BlueBorder>
    </OpenSignWrapper>
  );
};

export default OpenSign;

const OpenSignWrapper = styled.div`
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  margin-top: -12px;
`;

const BottomRow = styled.div`
  display: flex;
  h1 {
    color: #ff2028;
    margin: 0px;
    margin-top: -15px;
    -webkit-text-stroke: 4px #ff2028;
    font-size: 35px;
    text-shadow: rgba(255, 32, 39, 0.87) 0px 0px 20px;
  }
`;

const BlueBorder = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border: 10px solid #0becff;
  box-shadow: 0 0 50px 10px #0becff, inset 0 0 50px 7px #0becff,
    inset 0 0 30px 5px #ff2028;
  /* @keyframes glowFlicker {
    0% {
        box-shadow: 0 0 50px 10px #0becff, inset 0 0 40px 5px #0becff;
    }
    33% {
        box-shadow: 0 0 50px 10px #0becff, inset 0 0 40px 5px #0becff;
    }
  } */
  border-radius: 80%;
  width: 410px;
  height: 210px;
  filter: blur(1.5px);
`;

const LetterWrapper = styled.div`
  h1 {
    font-family: Archivo;
    color: #ff2028;
    margin: 0px;
    -webkit-text-stroke: 4px #ff2028;
    font-size: 110px;
    text-shadow: rgba(255, 32, 39, 0.87) 0px 0px 50px;
    filter: blur(1.3px);
  }
`;
