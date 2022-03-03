import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import thirdsecbg from "../../images/thirdbg.png"


import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "../../images/Res.jpeg";
import RT from "../../components/Cards";


const TempContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${thirdsecbg});
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;
const Thirdsectitle= styled.h1`
text-align:center;
align-items:center;
justify-content:center;
color:#000;
font-size: 34px;
  font-weight: bold;`

export default function ThirdSection(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <TempContainer>
      <Thirdsectitle>Resume Template</Thirdsectitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={isMobile ? 250 : 205}
        totalSlides={4}
        visibleSlides={isMobile ? 1 : 2}
        dragEnabled={false}
      >
        <Slider>
          <StyledSlide index={0}>
          
            <RT
              reviewText=" Lorem6"
              username="Technical"
              userImgUrl={User1Img}
              href="/Resume"
            />
            
          
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </TempContainer>
    
  );
}

