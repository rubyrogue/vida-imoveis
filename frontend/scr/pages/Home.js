import React, {useEffect, useState} from 'react';
import {GlobalStyle} from '../GlobalStyles';
import {SliderData} from '../data/SliderData';
import {InfoData1} from '../data/InfoData';
import {Hero} from '../components/HomeComponents/Hero';
import Navbar from '../components/HomeComponents/Navbar';
import {Footer} from '../components/ImoveisComponents/Footer';
import {DropDown} from '../components/HomeComponents/DropDown';
import {InfoSection} from '../components/HomeComponents/InfoSection';
import auth from '../data/Adm/firebaseConfg';

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData1}/>
            <Footer/>
        </>
    )
}
