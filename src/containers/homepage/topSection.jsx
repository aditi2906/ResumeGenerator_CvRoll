import React from 'react'
import styled from 'styled-components';
import bg1 from '../../images/rev.png';
import { Logo } from '../../components/logo';
import { Marginer } from '../../components/marginer';
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {MdSlowMotionVideo} from 'react-icons/md';
import { Button } from '../../components/button/Button';
import { DownArrow } from '../../components/downArrow';
import { Element,scroller } from "react-scroll";
import { Scroller } from 'react-scroll/modules/mixins/scroller';


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${bg1});
    
  position: relative;
  background-filter:black;
`;

const FirstText=styled.h1`

display: flex;
justify-content: left;
align-items: left;
margin-left:210px;
;`
const SecondText=styled.h2`
display: flex;
justify-content: left;
align-items: left;
margin-left:30px;




;`

const DownArrowContainer=styled.div`
position:absolute;
bottom:20px;
left:50%; 
transform:translateX(-50%);
;`
function TopSection(props) {
    const scrollToNextSection = () => {
        scroller.scrollTo("SecondSection", { smooth: true, duration: 1500 });
      };
    
    return (
      <Element name="topSection">
        <TopContainer>
           <Navbar/>
            <Marginer direction="vertical" margin="13em"/>
        
        <Marginer direction="vertical" margin="0em"/>
        <FirstText>Heading</FirstText>
        <SecondText>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</SecondText>
        <Link to='/Begin'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                     Get Started <MdSlowMotionVideo/>
                  </Button>
                </Link>
                <DownArrowContainer onClick={scrollToNextSection}>
                    <DownArrow/>
                </DownArrowContainer>
                
        
        </TopContainer>
        </Element>
        
    )
}

export default TopSection
