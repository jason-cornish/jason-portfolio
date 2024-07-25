import styled from "styled-components";

const ImagePlaceholder = () => {
  return <Placeholder></Placeholder>;
};

export default ImagePlaceholder;

const Placeholder = styled.div`
  position: absolute;
  width: 550px;
  height: 200px;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
