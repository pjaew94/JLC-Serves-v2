import { FC } from "react";
import {
  Heading2,
  Heading3,
  PageContainer,
  Paragraph,
} from "../../globalStyles";
import {
  WhoWeAreHeading1,
  WhoWeArePageContainer,
  WhoWeArePageContainer2,
  WhoWeAreCard,
  WhoWeAreIcon,
  HighLighter,
} from "./WhoWeAre.elements";
import ourFaithIcon from "../../media/faith.svg";
import ourRootsIcon from "../../media/roots.svg";
import ourMissionIcon from "../../media/mission.svg";
import { useMediaQuery } from "react-responsive";

const WhoWeAre: FC = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 768px)",
  });

  const whoWeAreCardContent = [
    {
      title: "Our Roots",
      icon: ourRootsIcon,
      text:
        "Jesus Love Church was founded in 2014 by Pastor Gon Kim. Church was first established in Plymouth, PA. After couple of years, we have relocated to Lansdale, PA and have been here since!",
    },
    {
      title: "Our Faith",
      icon: ourFaithIcon,
      text:
        "With a concrete belief in Jesus Christ as our Savior, we walk each step of our journey with purpose: to put God and others before ourselves as Jesus did for us.",
    },
    {
      title: "Our Mission",
      icon: ourMissionIcon,
      text:
        "We were put onto this world with purpose. That purpose is to serve others and spread the gospel as God wanted us to.",
    },
  ];
  return (
    <>
      <WhoWeArePageContainer>
        <WhoWeAreHeading1>Who We Are</WhoWeAreHeading1>
        {isMobile ? (
          <Paragraph>
            {" "}
            We are <HighLighter>JESUS LOVE CHURCH</HighLighter>: a small
            Christian Church located in Lansdale, Pennsylvania. We have a duty
            to fulfill. This is to carry on God's work with{" "}
            <HighLighter>GREAT AMBITION</HighLighter> and{" "}
            <HighLighter>FAITH</HighLighter>.
          </Paragraph>
        ) : (
          <>
            <Paragraph>
              We are <HighLighter>JESUS LOVE CHURCH</HighLighter>: a small
              Christian Church located in Lansdale, Pennsylvania.
            </Paragraph>
            <Paragraph>
              We have a duty to fulfill. This is to carry on God's work with{" "}
              <HighLighter>GREAT AMBITION</HighLighter> and{" "}
              <HighLighter>FAITH</HighLighter>.
            </Paragraph>
          </>
        )}
      </WhoWeArePageContainer>
      <WhoWeArePageContainer2>
        {whoWeAreCardContent.map((item, i) => {
          return (
            <WhoWeAreCard key={i}>
              <WhoWeAreIcon src={item.icon} />
              <Heading3 marginBottom={"20px"} poppins>
                {item.title}
              </Heading3>
              <Paragraph>{item.text}</Paragraph>
            </WhoWeAreCard>
          );
        })}
      </WhoWeArePageContainer2>
    </>
  );
};

export default WhoWeAre;
