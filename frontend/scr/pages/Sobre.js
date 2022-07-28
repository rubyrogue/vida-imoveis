import GlobalNavBar from "../GlobalNavBar";
import QuemSomos from "../components/Sobre/Body";
import React, {useEffect, useState} from 'react';
import { GlobalDropDown } from "../GlobalDropDown";
import { GlobalFooter } from "../GlobalFooter";
import { Footer } from "../components/ImoveisComponents/Footer";

export const Sobre = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <GlobalNavBar toggle={toggle}/>
            <GlobalDropDown isOpen={isOpen} toggle={toggle}/>
            <QuemSomos />
            <GlobalFooter />
        </>
    )
}