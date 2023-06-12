import React from "react";
import styled from "styled-components";
import {
  HorizontalWrapper,
  VerticalWrapper,
} from "./reusable/styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <Column>
          <ContentRow>jasoncornish14@gmail.com</ContentRow>
        </Column>

        <Column>
          <ContentRow>About</ContentRow>
          <ContentRow>Work</ContentRow>
          <ContentRow>Contact</ContentRow>
        </Column>

        <HeaderRow>Find me</HeaderRow>
      </ContentWrapper>
      <Divider />
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled(VerticalWrapper)`
  width: 100%;
  align-items: center;

  background-color: #4831d4;
  padding: 50px 0 50px 0;
`;

const ContentWrapper = styled(HorizontalWrapper)`
  width: 80%;
  position: relative;
  column-gap: 60px;
  margin-bottom: 15px;
`;

const Column = styled.div`
  flex: 1;
`;

const HeaderRow = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #e0e3e7;
  margin-bottom: 15px;
`;

const ContentRow = styled.div`
  font-size: 18px;
  color: #e0e3e7;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  height: 1px;
  width: 80%;
  background-color: white;
  border-radius: 3px;
`;
