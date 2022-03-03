import React from 'react'
import styled  from 'styled-components';
import { Element } from "react-scroll";
import { SectionTitle } from '../../components/sectionTitle';
import Begin1img from "../../images/beg1.png"
import Begin2img from "../../images/beg2.png"
import Begin3img from "../../images/beg3.png"
import { Marginer } from '../../components/marginer';
import Begin from '../../components/Begin';
const SecondContainer=styled(Element)`
width:100%;
min-height:1000px;
display:inline-block;
  text-align:center;
  padding-top:10px;
  align-itmes:center;
  background-color:black;
  
`
export default function SecondSection(props) {
    return (
        <SecondContainer classname="SecondSection">
            <SectionTitle color="white">
                Lorem ipsum dolor sit amet consectetur.
            </SectionTitle>
            <Marginer direction="vertical" margin="3em"/>
            <Begin title="Enter text relevant text here." description="Enter relevant text yet again if needed"
            imgUrl={Begin1img}/>

<Begin title="Enter text relevant text here." description="Enter relevant text yet again if needed"
            imgUrl={Begin2img} isReverse/>
             <Begin title="Enter text relevant text here." description="Enter relevant text yet again if needed"
            imgUrl={Begin3img}/>
        
        </SecondContainer>
    )
}

