import styled from "styled-components";
import { HandWriting } from "../LandingCarousel/LandingCarousel.elements";

import {
  FlexContainer,
  Heading1,
  PageContainer,
  colors,
  device,
} from "./../../globalStyles";

export const WWDPageContainer = styled(PageContainer)`
  justify-content: space-between;
  padding-bottom: 5%;

  @media only screen and ${device.mobileS} {
    flex-direction: column;
    padding: 2% 8% 15% 8%;
  }
  @media only screen and ${device.tablet} {
    flex-direction: column;
    padding-bottom: 10%;
  }
  @media only screen and ${device.laptopL} {
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
  }
  @media only screen and ${device.desktopXL} {
  } ;
`;

export const WWDPictureContainer = styled(FlexContainer)`
  flex-direction: column;

  @media only screen and ${device.mobileS} {
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 40px;
  }
  @media only screen and ${device.tablet} {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 60px;
  }
  @media only screen and ${device.laptopL} {
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
  }
  @media only screen and ${device.desktopXL} {
  } ;
`;

export const WWDContentContainer = styled(FlexContainer)`
  flex-direction: column;
  margin-left: 120px;

  @media only screen and ${device.mobileS} {
    margin-left: 0;
    width: 100%;
  }
  @media only screen and ${device.tablet} {
      margin-left: 0;
      width: 90%;
  }
  @media only screen and ${device.laptopL} {
    margin-left: ${120 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    margin-left: ${120 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    margin-left: ${120 * 2.2}px;
  } ;
`;

export const WWDButtonContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: space-between;
  margin-top: 10%;
  width: 50%;

  @media only screen and ${device.mobileS} {
      width: 100%;
  }
  @media only screen and ${device.tablet} {
      width: 80%;
  }
  @media only screen and ${device.laptopL} {
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    width: 65%;
  }
  @media only screen and ${device.desktopXL} {
  } ;
`;

export const WWDHeading1 = styled(Heading1)`
  border-bottom: 3px solid ${colors.primaryColor};

  @media only screen and ${device.mobileS} {
    border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  }
  @media only screen and ${device.tablet} {
    border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  }
  @media only screen and ${device.laptopL} {
    border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    border-bottom: ${3 * 1.6}px solid ${colors.primaryColor};
  }
  @media only screen and ${device.desktopXL} {
    border-bottom: ${3 * 2.2}px solid ${colors.primaryColor};
  } ;
`;

export const MiniPictureCard = styled(FlexContainer)`
  padding: 10px;
  flex-direction: column;
  min-height: 500px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 30px;
  justify-content: flex-start;

  @media only screen and ${device.mobileS} {
    padding: ${10 * 0.8}px;
    min-height: ${500 * 0.8}px;
    margin-bottom: ${30 * 0.8}px;
  }
  @media only screen and ${device.tablet} {
    padding: ${10 * 0.9}px;
    min-height: ${500 * 0.9}px;
    margin-bottom: ${30 * 0.9}px;
  }
  @media only screen and ${device.laptopL} {
    padding: ${10 * 0.9}px;
    min-height: ${500 * 0.9}px;
    margin-bottom: ${30 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    padding: ${10 * 0.9}px;
    min-height: ${500 * 0.9}px;
    margin-bottom: ${30 * 0.9}px;
  }
  @media only screen and ${device.desktopL} {
    padding: ${10 * 1.6}px;
    min-height: ${500 * 1.6}px;
    margin-bottom: ${30 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    padding: ${10 * 2.2}px;
    min-height: ${500 * 2.2}px;
    margin-bottom: ${30 * 2.2}px;
  } ;
`;

export const MiniPicture = styled.img`
  width: 400px;
  margin-bottom: 10px;

  @media only screen and ${device.mobileS} {
    width: 300px;
    margin-bottom: ${10 * 0.8}px;
  }
  @media only screen and ${device.tablet} {
    width: ${400 * 0.9}px;
    margin-bottom: ${10 * 0.9}px;
  }
  @media only screen and ${device.laptopL} {
    width: ${400 * 0.9}px;
    margin-bottom: ${10 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    width: ${400 * 1.6}px;
    margin-bottom: ${10 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    width: ${400 * 2.2}px;
    margin-bottom: ${10 * 2.2}px;
  } ;
`;

export const MiniHandWriting = styled(HandWriting)`
  width: 400px;

  @media only screen and ${device.mobileS} {
    width: 300px;
  }
  @media only screen and ${device.tablet} {
    width: ${400 * 0.9}px;
  }
  @media only screen and ${device.laptopL} {
    width: ${400 * 0.9}px;
  }
  @media only screen and ${device.desktop} {

  }
  @media only screen and ${device.desktopL} {
    width: ${400 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    width: ${400 * 2.2}px;
  } ;
`;
