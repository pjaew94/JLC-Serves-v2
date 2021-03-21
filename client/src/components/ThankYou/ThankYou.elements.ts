import styled from "styled-components";
import { colors, Heading1, PageContainer, device, FlexContainer } from './../../globalStyles';


export const TYPageContainer = styled(PageContainer)`
background: ${colors.softBlueColor};
padding-top: 5%;
padding-bottom: 5%;
flex-direction: column;

@media only screen and ${device.mobileS} {
    padding: 10% 5%;

  }
`

export const TYHeading1 = styled(Heading1)`
border-bottom: 3px solid ${colors.primaryColor};
margin-bottom: 80px;

@media only screen and ${device.mobileS} {
  border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  margin-bottom: ${80 * 0.5}px;
}
@media only screen and ${device.tablet} {
  border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  margin-bottom: ${80 * 0.9}px;
}
@media only screen and ${device.laptopL} {
  border-bottom: ${3 * 0.9}px solid ${colors.primaryColor};
  margin-bottom: ${80 * 0.9}px;
}
@media only screen and ${device.desktop} {
}
@media only screen and ${device.desktopL} {
  border-bottom: ${3 * 1.6}px solid ${colors.primaryColor};
  margin-bottom: ${80 * 1.6}px;
}
@media only screen and ${device.desktopXL} {
  border-bottom: ${3 * 2.2}px solid ${colors.primaryColor};
  margin-bottom: ${80 * 1.6}px;
} ;
`

export const TYLogoContainer = styled(FlexContainer)`
    justify-content: space-between;
    width: 100%;

    @media only screen and ${device.mobileS} {
        flex-direction: column;

    }
    @media only screen and ${device.tablet} {
      
    }
    @media only screen and ${device.laptopL} {

    }
    @media only screen and ${device.desktop} {
    }
    @media only screen and ${device.desktopL} {

    }
    @media only screen and ${device.desktopXL} {

    } ;
`

export const TYLogo = styled.img`
    width: 300px;
    @media only screen and ${device.mobileS} {
        width: ${300 * 0.7}px;
        margin-bottom: 50px;
      }
      @media only screen and ${device.tablet} {
        width: ${300 * 0.7}px;
      }
      @media only screen and ${device.laptopL} {
        width: ${300 * 0.9}px;
      }
      @media only screen and ${device.desktop} {
      }
      @media only screen and ${device.desktopL} {
        width: ${300 * 1.6}px;
      }
      @media only screen and ${device.desktopXL} {
        width: ${300 * 2.2}px;
      } ;
`