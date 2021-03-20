import { FC } from "react";
import LandingCarousel from "../LandingCarousel/LandingCarousel";
import { Button } from "../../globalStyles";
import {
  LandingPageContainer,
  LandingLeftFlexContainer,
  LandingRightFlexContainer,
  LandingButtonContainer,
  LandingHeading1FirstLine,
  LandingHeading1Margined,
  LandingHeading3,
  LandingParagraph,
  LandingPrimaryButton,
} from "./Landing.elements";
import { useMediaQuery } from "react-responsive";

const Landing: FC = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 768px)",
  });
  return (
    <>
      <LandingPageContainer>
        <LandingLeftFlexContainer>
          {isMobile ? (
            <>
              <LandingHeading1FirstLine>
                "Share with the
              </LandingHeading1FirstLine>
              <LandingHeading1Margined>
                Lord's people who
              </LandingHeading1Margined>
              <LandingHeading1Margined>are in need.</LandingHeading1Margined>
              <LandingHeading1Margined>
                Practice hospitality."
              </LandingHeading1Margined>
            </>
          ) : (
            <>
              <LandingHeading1FirstLine>
                "Share with the Lord's
              </LandingHeading1FirstLine>
              <LandingHeading1Margined>
                people who are in need.
              </LandingHeading1Margined>
              <LandingHeading1Margined>
                Practice hospitality."
              </LandingHeading1Margined>
            </>
          )}

          <LandingHeading3>&#8212; Romans 12:13</LandingHeading3>
          <LandingParagraph>
            Helping those who need it the most. Hoping for their salvation.
            Together, we can spread the gospel one step at a time.
          </LandingParagraph>
          <LandingButtonContainer>
            <LandingPrimaryButton to="/donate" primary>
              Donate
            </LandingPrimaryButton>
            <Button to="/donations" primary={false}>
              See Donations
            </Button>
          </LandingButtonContainer>
        </LandingLeftFlexContainer>
        <LandingRightFlexContainer>
          <LandingCarousel />
        </LandingRightFlexContainer>
      </LandingPageContainer>
    </>
  );
};

export default Landing;
