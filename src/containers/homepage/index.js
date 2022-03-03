import React from 'react'
import styled from 'styled-components';
import SecondSection from './SecondSection';
import TopSection from './topSection';
import ThirdSection from './templates';
import Footer from '../../components/Footer/Footer.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const PageContainer=styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;`

export default function Homepage(props) {
    return (
        <PageContainer>
        <TopSection />
        <SecondSection />
        <ThirdSection/>
        <Router> <Footer/> </Router>
      </PageContainer>
    )
}



