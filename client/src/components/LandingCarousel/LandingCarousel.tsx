import { FC } from "react";
import Carousel from "react-material-ui-carousel";

import { Paper, Button } from "@material-ui/core";
import {
  PictureBoarder,
  Image,
  HandWriting,
  CarouselContainer,
} from "./LandingCarousel.elements";


const LandingCarousel: FC = () => {
  const landingPictures = [
    {
      src: "https://jlc-serves.s3.amazonaws.com/landingImg1.JPEG",
      alt: "Young Adult Group",
      text: "Young adult group's first month of missions!",
    },
    {
      src: "https://jlc-serves.s3.amazonaws.com/landingImg2.JPEG",
      alt: "Young Adult Group Prayer",
      text:
        "Young adult group praying before handing out food and beverages!",
    },
    {
      src: "https://jlc-serves.s3.amazonaws.com/landingImg4.JPEG",
      alt: "Adult Group",
      text: "Adult group during missions in the rain!",
    },
    {
      src: "https://jlc-serves.s3.amazonaws.com/landingImg6.jpg",
      alt: "Youth Group Preparing",
      text: "Youth group preparing food, drinks, and masks for missions!",
    },
  ];
  return (
    <Carousel className='carousel' interval={6000} navButtonsAlwaysInvisible={true} timeout={1000}>
      {landingPictures.map((item, i) => (
        <CarouselContainer key={i}>
          <PictureBoarder>
            <Image src={item.src} alt={item.alt} />
            <HandWriting>{item.text}</HandWriting>
          </PictureBoarder>
        </CarouselContainer>
      ))}
    </Carousel>
  );
};

export default LandingCarousel;
