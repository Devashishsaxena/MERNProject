import React from 'react';
import Hero from "../Hero/Hero";
import Cliens from '../Cliens/Cliens';
import Skills from '../Skills/Skills'; 
import Cta from '../Cta/Cta';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Homes() {
    return (
        <React.Fragment>
            <Header />
            <Hero />
            <Cliens />
            <Skills />
            <Cta />
            <Footer/>
        </React.Fragment>
    );
}

export default Homes;