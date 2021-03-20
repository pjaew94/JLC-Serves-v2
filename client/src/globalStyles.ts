import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=PT+Serif:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap');
* {
    margin: 0;
    padding: 0;
    font-size: 16px;
    box-sizing: border-box;
    background: transparent;
    ::-webkit-scrollbar {
        width: 0 !important;
    }
}
input[type="search"] {
    -webkit-appearance: none;
    -webkit-border-radius: 0px;
    border-radius: 0px;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
}

.link {
    text-decoration: none;
    color: black;
}

textarea:focus, input:focus{
    outline: none;
    border: none;
}
*:focus {
    outline: none;
}

button {
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
}

a {
    border: none;
    text-decoration: none;
}

`;

// Colors

export const colors = {
  primaryColor: "#50c38e",
  softGreenColor: "#f0faf7",
  softBlueColor: "#ecfffe"
}

// Font Sizes

const heading1Size = 2.6
const heading1FontSize = {
  default: `${heading1Size}rem`,
  XXS: `${heading1Size * 0.7}rem`,
  XS: `${heading1Size * 0.8}rem`,
  S: `${heading1Size * 0.9}rem`,
  L: `${heading1Size * 1.8}rem`,
  XL: `${heading1Size * 2.2}rem`
}


const heading2Size = 2.2
const heading2FontSize = {
  default: `${heading2Size}rem`,
  XS: `${heading2Size * 0.8}rem`,
  S: `${heading2Size * 0.9}rem`,
  L: `${heading2Size * 1.8}rem`,
  XL: `${heading2Size * 2.2}rem`
}

const heading3Size = 1.2
const heading3FontSize = {
  default: `${heading3Size}rem`,
  XS: `${heading3Size * 0.8}rem`,
  S: `${heading3Size * 0.9}rem`,
  L: `${heading3Size * 1.8}rem`,
  XL: `${heading3Size * 2.2}rem`
}

const paragraphSize = 1
const paragraphFontSize = {
  default: `${paragraphSize}rem`,
  XS: `${paragraphSize * 0.8}rem`,
  S: `${paragraphSize * 0.9}rem`,
  L: `${paragraphSize * 1.8}rem`,
  XL: `${paragraphSize * 2.2}rem`
}
const paragraphLineSize = 1.5
const paragraphLineHeight = {
  default: `${paragraphLineSize}rem`,
  XS: `${paragraphLineSize * 0.8}rem`,
  S: `${paragraphLineSize * 0.9}rem`,
  L: `${paragraphLineSize * 1.8}rem`,
  XL: `${paragraphLineSize * 2.2}rem`
}

const buttonSize = 1.3
const buttonFontSize = {
  default: `${buttonSize}rem`,
  XS: `${buttonSize * 0.8}rem`,
  S: `${buttonSize * 0.9}rem`,
  L: `${buttonSize * 1.8}rem`,
  XL: `${buttonSize * 2.2}rem`
}


// Media Queries
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1920px',
  desktopL: '2560px',
  desktopXL: '3000px',
}
export const device = {
  mobileS: `(min-width: ${size.mobileS}) and (max-width: 767px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 1439px)`,
  laptopL: `(min-width: ${size.laptopL}) and (max-width: 1919px)`,
  desktop: `(min-width: ${size.desktop}) and (max-width: 2559px)`,
  desktopL: `(min-width: ${size.desktopL}) and (max-width: 2999px)`,
  desktopXL: `(min-width: ${size.desktopXL})`
}

// Containers
export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0 15%;

  @media only screen and ${device.laptopL} {
    padding: 0 10%;
  }
  @media only screen and ${device.desktop} {
    padding: 0 15%;
  }
`;


export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

// Typography
type TypesHeading = {
  width?: string;
  height?: string;
  marginBottom?: string;
};
export const Heading1 = styled.h1<TypesHeading>`
  color: #000;
  font-size: ${heading1FontSize.default};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};

  @media only screen and ${device.mobileS} {
    font-size: ${heading1FontSize.XXS};
  }
  @media only screen and ${device.laptopL} {
    font-size: ${heading1FontSize.S};
  }
  @media only screen and ${device.desktop} {
    font-size: ${heading1FontSize.default};
  }
  @media only screen and ${device.desktopL} {
    font-size: ${heading1FontSize.L};
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${heading1FontSize.XL};
  };
`;

export const Heading2 = styled.h1<TypesHeading>`
  color: #000;
  font-size: ${heading2FontSize.default};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};

  @media only screen and ${device.mobileS} {
    font-size: ${heading2FontSize.XS}
  }
  @media only screen and ${device.laptopL} {
    font-size: ${heading2FontSize.S}
  }
  @media only screen and ${device.desktop} {
    font-size: ${heading2FontSize.default};
  }
  @media only screen and ${device.desktopL} {
    font-size: ${heading2FontSize.L};
  };
  @media only screen and ${device.desktopXL} {
    font-size: ${heading2FontSize.XL};
  };
`;

export const Heading3 = styled.h1<TypesHeading>`
  color: #000;
  font-size: ${heading3FontSize.default};
  font-family: "PT Serif", serif;
  font-weight: 400;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-bottom: ${(props) => props.marginBottom && props.marginBottom};

  @media only screen and ${device.mobileS} {
    font-size: ${heading3FontSize.XS}
  }
  @media only screen and ${device.laptopL} {
    font-size: ${heading3FontSize.S}
  }
  @media only screen and ${device.desktop} {
    font-size: ${heading3FontSize.default};
  }
  @media only screen and ${device.desktopL} {
    font-size: ${heading3FontSize.L};
  };
  @media only screen and ${device.desktopXL} {
    font-size: ${heading3FontSize.XL};
  };

`;

type TypesParagraph = {
  width?: string;
  height?: string;
  span?: string;
};
export const Paragraph = styled.p<TypesParagraph>`
  color: #000;
  font-size: ${paragraphFontSize.default};
  line-height: 1.5rem;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-style: ${(props) => props.span && "italic"};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};



  @media only screen and ${device.mobileS} {
    font-size: ${paragraphFontSize.XS};
    line-height: ${paragraphLineHeight.XS};
  }
  @media only screen and ${device.laptopL} {
    font-size: ${paragraphFontSize.S};
    line-height: ${paragraphLineHeight.S};
  }
  @media only screen and ${device.desktop} {
    font-size: ${paragraphFontSize.default};
    line-height: ${paragraphLineHeight.default};
  }
  @media only screen and ${device.desktopL} {
    font-size: ${paragraphFontSize.L};
    line-height: ${paragraphLineHeight.L};
  };
  @media only screen and ${device.desktopXL} {
    font-size: ${paragraphFontSize.XL};
    line-height: ${paragraphLineHeight.XL} 
  };
`;

// Buttons
type TypesButton = {
  large?: boolean;
  primary: boolean;
};
export const Button = styled(Link)<TypesButton>`
  font-size: ${(props) => (props.large ? "2.8rem" : `${buttonFontSize.default}rem`)};
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.primary ? "#fff" : "#50c38e")};
  padding: ${(props) => (props.large ? "50px 85px" : "20px 35px")};
  border: ${(props) =>
    props.large ? "2px solid #50c38e" : "1px solid #50c38e"};
  border-radius: 5px;
  background: ${(props) => (props.primary ? colors.primaryColor : "#fff")};
  transition: 0.3s all ease-in-out;

  &:hover {
    color: ${(props) => (props.primary ? colors.primaryColor : "#fff")};
    background: ${(props) => (props.primary ? "#fff" : colors.primaryColor)};
  }

  @media only screen and ${device.mobileS} {
    font-size: ${buttonFontSize.XS};
    padding: ${20 * 0.9}px ${35 * 0.6}px;
    border-radius: 2px;
  }

  @media only screen and ${device.desktop} {
    font-size: ${buttonFontSize.XS};
    padding: ${20 * 0.8}px ${35 * 0.8}px;
  }
  @media only screen and ${device.desktopL} {
    font-size: ${buttonFontSize.S};
    padding: ${20 * 0.9}px ${35 * 0.9}px;
  }
  @media only screen and ${device.desktop} {
    font-size: ${buttonFontSize.default};
    padding: 20px 35px;
  }
  @media only screen and ${device.desktopL} {
    font-size: ${buttonFontSize.L};
    padding: ${20 * 1.8}px ${35 * 1.8}px;
  }
  @media only screen and ${device.desktopXL} {
    font-size: ${buttonFontSize.XL};
    padding: ${20 * 2.2}px ${35 * 2.2}px;
  }
`;

export default GlobalStyle;
