import styled from "styled-components";
import {
  PageContainer,
  FlexContainer,
  Heading1,
  Heading3,
  Paragraph,
  Button,
  device,
  size,
} from "../../globalStyles";

export const LandingPageContainer = styled(PageContainer)`
  padding: 0 15%;
  height: 75vh;
  justify-content: space-between;
  background: linear-gradient(
    275deg,
    rgba(240, 250, 247, 1) 25%,
    rgba(255, 255, 255, 1) 64%
  );
  @media only screen and ${device.mobileS} {
    height: auto;
    flex-direction: column;
    min-height: auto;
    max-height: auto;
    padding: 10% 10% 5% 10%;
    background: linear-gradient(
      180deg,
      rgba(240, 250, 247, 1) 39%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  @media only screen and ${device.tablet} {
    height: auto;
    flex-direction: column;
    min-height: auto;
    max-height: auto;
    padding: 10% 10% 5% 10%;
    background: linear-gradient(
      180deg,
      rgba(240, 250, 247, 1) 39%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  @media only screen and ${device.laptopL} {
    min-height: 700px;
    max-height: 700px;
    padding: 0 15%;
  }
  @media only screen and ${device.desktop} {
    min-height: 700px;
    max-height: 730px;
    padding: 0 15%;
  }
  @media only screen and ${device.desktopL} {
    min-height: 1250px;
    max-height: 1250px;
    padding: 0 12%;
  }
  @media only screen and ${device.desktopXL} {
    min-height: 1620px;
    max-height: 1620px;
    padding: 0 12%;
    min-width: ${size.desktopXL};
  }
`;

export const LandingLeftFlexContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5%;
  @media only screen and ${device.mobileS} {
    margin-top: 0;
  }
  @media only screen and ${device.tablet} {
    margin-top: 0;
    align-items: center;
  }
`;

export const LandingRightFlexContainer = styled(FlexContainer)`
  margin-top: 5%;

  @media only screen and ${device.mobileS} {
    margin-top: 10%;
  }
  @media only screen and ${device.tablet} {
    margin-top: 8%;
  }
`;

export const LandingButtonContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: flex-start;
`;

export const LandingHeading1FirstLine = styled(Heading1)`
  margin-bottom: 0.5rem;

  @media only screen and ${device.mobileS} {
    margin-bottom: 0;
  }
  @media only screen and ${device.tablet} {
    margin-bottom: ${0.5 * 0.8}rem;
  }

  @media only screen and ${device.laptopL} {
    margin-bottom: ${0.5 * 0.9}rem;
  }
  @media only screen and ${device.desktop} {
    margin-bottom: 0.5rem;
  }
  @media only screen and ${device.desktopL} {
    margin-bottom: ${0.5 * 1.6}rem;
  }
  @media only screen and ${device.desktopXL} {
    margin-bottom: ${0.5 * 2.2}rem;
  }
`;
export const LandingHeading1Margined = styled(Heading1)`
  @media only screen and ${device.mobileS} {
    margin: 0 0 0 ${20 * 0.8}px;
  }
  @media only screen and ${device.tablet} {
    margin: 0 0 ${0.5 * 0.8}rem 0;
  }

  @media only screen and ${device.laptopL} {
    margin: 0 0 ${0.5 * 0.9}rem ${20 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    margin: 0 0 0.5rem 20px;
  }
  @media only screen and ${device.desktopL} {
    margin: 0 0 ${0.5 * 1.6}rem ${20 * 1.6}px;
  }

  @media only screen and ${device.desktopXL} {
    margin: 0 0 ${0.5 * 2.2}rem ${20 * 2.2}px;
  }
`;

export const LandingHeading3 = styled(Heading3)`
  @media only screen and ${device.mobileS} {
    margin: 0 0 ${25 * 0.8}px ${20 * 0.8}px;
  }
  @media only screen and ${device.tablet} {
    margin: 0 0 ${25 * 0.8}px 0;
  }

  @media only screen and ${device.laptopL} {
    margin: 0 0 ${25 * 0.9}px ${20 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    margin: 0 0 25px 20px;
  }
  @media only screen and ${device.desktopL} {
    margin: 0 0 ${25 * 1.6}px ${20 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    margin: 0 0 ${25 * 1.6}px ${20 * 2.2}px;
  }
`;
export const LandingParagraph = styled(Paragraph)`
  width: 70%;
  margin: 0 0 40px 20px;
  @media only screen and ${device.mobileS} {
    margin: 0 0 ${25 * 0.8}px ${20 * 0.8}px;
    width: 80%;
  }
  @media only screen and ${device.tablet} {
    margin: 0 0 ${25 * 0.8}px 0;
    width: 60%;
  }

  @media only screen and ${device.laptopL} {
    margin: 0 0 ${25 * 0.9}px ${20 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    margin: 0 0 40px 20px;
  }
  @media only screen and ${device.desktopL} {
    margin: 0 0 ${40 * 1.6}px ${20 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    margin: 0 0 ${40 * 2.2}px ${20 * 2.2}px;
  }
`;

export const LandingPrimaryButton = styled(Button)`
  @media only screen and ${device.mobileS} {
    margin: 0 ${40 * 0.8}px 0 0;
  }
  @media only screen and ${device.tablet} {
    margin: 0 ${40 * 0.8}px 0 0;
  }
  @media only screen and ${device.laptopL} {
    margin: 0 ${40 * 0.9}px 0 ${20 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    margin: 0 40px 0 20px;
  }
  @media only screen and ${device.desktopL} {
    margin: 0 ${40 * 1.6}px 0 ${20 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    margin: 0 ${40 * 2.2}px 0 ${20 * 2.2}px;
  }
`;
