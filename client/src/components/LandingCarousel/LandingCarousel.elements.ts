import styled from "styled-components";
import { device } from "../../globalStyles";



export const CarouselContainer =styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`

export const PictureBoarder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 15px 15px 40px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #fff;
  margin: ${(props: { margin?: string }) => (props.margin ? props.margin : 0)};
  @media only screen and ${device.mobileS} {
    padding: ${15 * 0.8}px ${15 * 0.8}px ${40 * 0.8}px ${15 * 0.8}px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px ${2 * 0.8}px ${2 * 0.8}px ${2 * 0.8}px;
  }
  @media only screen and ${device.tablet} {
    padding: ${15 * 0.9}px ${15 * 0.9}px ${40 * 0.9}px ${15 * 0.9}px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px ${2 * 0.9}px ${2 * 0.9}px ${2 * 0.9}px;
  }

  @media only screen and ${device.laptopL} {
    padding: ${15 * 0.9}px ${15 * 0.9}px ${40 * 0.9}px ${15 * 0.9}px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px ${2 * 0.9}px ${2 * 0.9}px ${2 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    padding: 15px 15px 40px 15px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  @media only screen and ${device.desktopL} {
    padding: ${15 * 1.6}px ${15 * 1.6}px ${40 * 1.6}px ${15 * 1.6}px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px ${2 * 1.6}px ${2 * 1.6}px ${2 * 1.6}px;
  }
  @media only screen and ${device.desktopXL} {
    padding: ${15 * 2.2}px ${15 * 2.2}px ${40 * 2.2}px ${15 * 2.2}px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px ${2 * 2.2}px ${2 * 2.2}px ${2 * 2.2}px;
  }
`;

export const Image = styled.img`
    width: 600px;
    margin-bottom: 20px;
    @media only screen and ${device.mobileS} {
      width: 300px;
    }
    @media only screen and ${device.tablet} {
      width: 430px;
    }

    @media only screen and ${device.laptopL} {
      width: 500px;
    }
    @media only screen and ${device.desktop} {
      width: 600px;
    }
    @media only screen and ${device.desktopL} {
      width: 950px;
    }
    @media only screen and ${device.desktopXL} {
      width: 1300px;
    }
`;

export const HandWriting = styled.p`
  font-family: "Indie Flower", cursive;
  font-size: 1.2rem;
  @media only screen and ${device.mobileS} {
    font-size: ${1.2 * 0.8}rem
  }
  @media only screen and ${device.tablet} {
    font-size: ${1.2 * 0.8}rem
  }

  @media only screen and ${device.laptopL} {
    font-size: ${1.2 * 0.9}rem;
  }
  @media only screen and ${device.desktop} {
    font-size: 1.2rem;
  }
  @media only screen and ${device.desktopL} {
    font-size: ${1.2 * 1.6}rem;
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${1.2 * 2.2}rem;
  }
`;