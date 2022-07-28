import React, { useState } from 'react';
import {ViewImovelBody} from '../components/ViewImovel/Body';
import {Footer} from '../components/ImoveisComponents/Footer';
import GlobalNavBar from '../GlobalNavBar';
import { GlobalDropDown } from '../GlobalDropDown';

export const ViewImoveis = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <GlobalNavBar toggle={toggle}/>
            <GlobalDropDown isOpen={isOpen} toggle={toggle}/>
            <ViewImovelBody id={props.match.params.id}/>
            <Footer/>
        </>
    )
}