import { FC } from "react";
import { Paragraph, Button } from "../../globalStyles";
import {
  WWDPageContainer,
  WWDPictureContainer,
  WWDContentContainer,
  WWDButtonContainer,
  MiniPictureCard,
  MiniPicture,
  MiniHandWriting,
  WWDHeading1,
} from "./WhatWeDo.elements";
import { useMediaQuery } from "react-responsive";

const WhatWeDo: FC = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 768px)",
  });
  const miniPictures = [
    {
      src: "https://jlc-serves.s3.amazonaws.com/wwdImg1.jpg",
      text: "Young adult group with Pastor Kim on a hot summer day!",
    },
    {
      src: "https://jlc-serves.s3.amazonaws.com/wwdImg2.jpeg",
      text: "Pastor Kim with the Sleeping Bag Project founders!",
    },
  ];

  return (
    <WWDPageContainer>
      <WWDPictureContainer>
        {miniPictures.map((item, i) => {
          return (
            <MiniPictureCard key={i}>
              <MiniPicture src={item.src} alt={item.text} />
              <MiniHandWriting>{item.text}</MiniHandWriting>
            </MiniPictureCard>
          );
        })}
      </WWDPictureContainer>
      <WWDContentContainer>
        {isMobile ? (
          <>
            <WWDHeading1>Our Mission Is To</WWDHeading1>
            <WWDHeading1>Serve Others And</WWDHeading1>
            <WWDHeading1 marginBottom="10%">Spread The Gospel</WWDHeading1>
          </>
        ) : (
          <>
            <WWDHeading1>Our Mission Is To Serve Others</WWDHeading1>
            <WWDHeading1 marginBottom="10%">And Spread The Gospel</WWDHeading1>
          </>
        )}
        <Paragraph>
          Jesus Love Church's first mission to serve food and water to the
          homeless took place in Love Park, Philadelphia on the last Sunday of
          June 2020. Ever since, we've been blessed to be able to hand out 100
          lunch bags of food every week along with water, soup, coffee, and hot
          chocolate.{" "}
        </Paragraph>
        <Paragraph>
          After the first few weeks, we quickly realized that the homeless
          needed more than food. What started as a single pair of boots request
          from one homeless individual, grew into hundreds of requests. With the
          grace of God, we were able to fulfill these requests for them to wear
          in the cold weather conditions during the winter.
        </Paragraph>
        <Paragraph>
          Moreover, with the help of local churches, organizations, and stores,
          we were able to donate much more such as pastries, snacks, gloves,
          toiletries, and even sleeping bags!{" "}
        </Paragraph>
        <Paragraph>
          By donating, you will be making a direct impact on the lives of the
          homeless in Philadelphia. No donation will used for profiting our
          organization. Any additional funding will be used to support our local
          churches and the missionaries in North Korea, risking their lives to
          spread the gospel.
        </Paragraph>
        <WWDButtonContainer>
          <Button to="/donate" primary>
            Donate
          </Button>
          <Button to="/donations" primary={false}>
            See Donations
          </Button>
        </WWDButtonContainer>
      </WWDContentContainer>
    </WWDPageContainer>
  );
};

export default WhatWeDo;
