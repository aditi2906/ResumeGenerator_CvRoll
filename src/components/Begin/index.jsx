import React from 'react'
import styled from 'styled-components'



const BeginContainer=styled.div`
display:flex;
align-items:center;
padding: 10px 0;
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({isReverse}) => isReverse && "row-reverse"};
  margin-bottom:2em;
;`

const BeginImg=styled.img`
width:19em;
height:15em;

;`

const DescriptionContainer=styled.div`
display:flex;
flex-direction:column;
max-width:60%;
align-items:center;`

const Title=styled.h2`
color:black;
font-size:28px;
font-weight:700;
margin:5px 0;`

const Details=styled.p`color: #7A7A7A;
font-size:19px;
text-align:center
`
export default function Begin(props) {
    const {title,description,imgUrl, isReverse}=props;
    return (
        <BeginContainer isReverse={isReverse}>
            <DescriptionContainer>
                <Title>
                   {title}
                </Title>
                <Details>
                {description}</Details>
            </DescriptionContainer>
            <BeginImg src={imgUrl}/>

            
        </BeginContainer>
    )
}
