import styled from "styled-components";

export const HorizontalWrapper = styled.div`
  display: flex;
`;

export const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HoverWrapper = styled(HorizontalWrapper)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 50%;
  :hover {
    background-color: #303134;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 55px;
  margin: 0px;
  font-family: Roboto;
`;

export const SubHeader = styled.h2`
  font-size: 26px;
  margin: 0px;
  font-family: Roboto;
`;
