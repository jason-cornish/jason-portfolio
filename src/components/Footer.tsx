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
  font-family: Cardo;
  background-color: ${(props) => props.theme.colors.opaque1};
`;

const ContentWrapper = styled(HorizontalWrapper)`
  max-width: 986px;
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
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 15px;
`;

const ContentRow = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 10px;
`;

const Divider = styled.div`
  height: 1px;
  width: 80%;
  background-color: ${(props) => props.theme.colors.opaque3};
  border-radius: 3px;
`;
