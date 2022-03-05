import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { useMediaQuery } from "react-responsive";
import thirdsecbg from "../../images/thirdbg.png"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";


import "pure-react-carousel/dist/react-carousel.es.css";

import Template1 from "../../images/Res.jpeg";
import Template2 from "../../images/template2.png"
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
      <div style={{ display: 'block', width: 700, padding: 30 }}>
      <Carousel>
        <Carousel.Item interval={1500}>
        <Link to="/body">
          <img
            className="d-block w-100"
src={Template1}
            alt=" One" width="350px" height="550px"
            
          /></Link>
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <Link to="/body">
          <img
            className="d-block w-100"
src={Template2}
            alt=" Two" width="350px" height="550px"
          /></Link>
          <Carousel.Caption>
    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </TempContainer>
    
  );
}

