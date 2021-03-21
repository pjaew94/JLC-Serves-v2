import styled from "styled-components";
import {
  PageContainer,
  FlexContainer,
  Heading1,
  paragraphFontSize,
  device,
  colors
} from "../../globalStyles";

export const WhoWeArePageContainer = styled(PageContainer)`
  flex-direction: column;
  padding-top: 5%;
  padding-bottom: 5%;
  @media only screen and ${device.mobileS} {
    padding-top 10%;
  }
  @media only screen and ${device.tablet} {
    padding-top 10%;
  }
`;

export const WhoWeArePageContainer2 = styled(PageContainer)`
  padding-bottom: 10%;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and ${device.mobileS} {
    flex-direction: column;
    padding-bottom: 20%;
  }
  @media only screen and ${device.tablet} {
    flex-direction: column;
    padding-bottom: 20%;
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
export const WhoWeAreHeading1 = styled(Heading1)`
  border-bottom: 3px solid ${colors.primaryColor};
  margin-bottom: 20px;

  @media only screen and ${device.mobileS} {
    border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
    margin-bottom: ${20 * 0.9}px;
  }
  @media only screen and ${device.tablet} {
    border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
    margin-bottom: ${20 * 0.9}px;
  }
  @media only screen and ${device.laptopL} {
    border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
    margin-bottom: ${20 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    border-bottom: ${3 * 1.6}px solid ${colors.primaryColor};
    margin-bottom: ${20 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    border-bottom: ${3 * 2.2}px solid ${colors.primaryColor};
    margin-bottom: ${20 * 1.6}px;
  } ;
`;

export const WhoWeAreCard = styled(FlexContainer)`
  width: 30%;
  padding: 50px;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media only screen and ${device.mobileS} {
    padding: ${50 * 0.9}px;
    width: 100%;
    min-height: 300px;
    margin-bottom: 50px;
  }
  @media only screen and ${device.tablet} {
    padding: ${50 * 0.8}px;
    width: 100%;
    min-height: 300px;
    margin-bottom: 50px;
}
  @media only screen and ${device.laptopL} {
    padding: ${50 * 0.9}px;
    min-height: 337px;
}
  }
  @media only screen and ${device.desktop} {
    min-height: 376px;
  }
  @media only screen and ${device.desktopL} {
    padding: ${50 * 1.6}px;
    min-height: 640px;
  }
  @media only screen and ${device.desktopXL} {
    padding: ${50 * 2.2}px;
    min-height: 801px;
  } ;
`;
export const HighLighter = styled.mark`
  background: ${colors.softGreenColor};
  font-weight: 600;
  padding: 0 0.5rem;

  @media only screen and ${device.mobileS} {
    font-size: ${paragraphFontSize.XS};
  }
  @media only screen and ${device.tablet} {
    font-size: ${paragraphFontSize.XS};
  }
  @media only screen and ${device.laptopL} {
    font-size: ${paragraphFontSize.S};
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    font-size: ${paragraphFontSize.L};
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${paragraphFontSize.XL};
  } ;
`;

export const WhoWeAreIcon = styled.img`
  height: 40px;
  margin-bottom: 15px;

  @media only screen and ${device.mobileS} {
    height: ${40 * 0.9}px;
    margin-bottom: ${15 * 0.9}px;
  }
  @media only screen and ${device.mobileS} {
    height: ${40 * 0.9}px;
    margin-bottom: ${15 * 0.9}px;
  }
  @media only screen and ${device.laptopL} {
    height: ${40 * 0.9}px;
    margin-bottom: ${15 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
  }
  @media only screen and ${device.desktopL} {
    height: ${40 * 1.6}px;
    margin-bottom: ${15 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    height: ${40 * 2.2}px;
    margin-bottom: ${15 * 2.2}px;
  } ;
`;
