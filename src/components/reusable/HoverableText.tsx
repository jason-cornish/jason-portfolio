import styled from "styled-components";

type BodyProps = {
  content: string;
};

const HoverableTextWrapper = (props: BodyProps) => {
  return <HoverableText>{props.content}</HoverableText>;
};

export default HoverableTextWrapper;

const HoverableText = styled.p`
  position: relative;
  display: inline-block;
  font-size: 24px;
  color: #121212;
  overflow: hidden;
  background: linear-gradient(to right, #e0e3e7 50%, #121212 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 205% 100%;
  background-position: 100%;
  transition: background-position 0.3s ease;
  margin: 0;
  font-weight: 500;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  /* &:hover {
    background: linear-gradient(-45deg, #282828, white);
    background-size: 400% 400%;
    transition: 
    position: relative;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @keyframes gradient {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 100%;
      }
    }
  } */
`;
