import styled from "styled-components";
import {
  FlexContainer,
  PageContainer,
  Heading1,
  colors,
  device,
} from "./../../globalStyles";

export const AchievementsPageContainer = styled(PageContainer)`
  height: 25vh;
  justify-content: space-between;
  @media only screen and ${device.mobileS} {
    flex-wrap: wrap;
    justify-content: space-around;
}
  @media only screen and ${device.tablet} {
  }

  @media only screen and ${device.laptopL} {
    min-height: 200px;
    max-height: 200px;
    padding: 0 15%;
  }
  @media only screen and ${device.desktop} {
    min-height: 242px;
    max-height: 242px;
    padding: 0 15%;
  }
  @media only screen and ${device.desktopL} {
    min-height: 450px;
    max-height: 450px;
    padding: 0 12%;
  }
  @media only screen and ${device.desktopXL} {
    min-height: 540px;
    max-height: 540px;
    padding: 0 12%;
  }
`;

export const AchievementsFlexContainer = styled(FlexContainer)`
  flex-direction: column;
`;

export const AchievementsHeading1 = styled(Heading1)`
@media only screen and ${device.mobileS} {
    border-bottom: ${2}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 0.8}px;
}
  @media only screen and ${device.tablet} {
    border-bottom: ${2}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 0.8}px;
  }

  @media only screen and ${device.laptopL} {
    border-bottom: ${2 * 0.9}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    border-bottom: 2px solid ${colors.primaryColor};
    margin-bottom: 5px;
  }
  @media only screen and ${device.desktopL} {
    border-bottom: ${2 * 1.8}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 1.8}px;
  }
  @media only screen and ${device.desktopXL} {
    border-bottom: ${2 * 2.2}px solid ${colors.primaryColor};
    margin-bottom: ${5 * 2.2}px;
  }
`;
