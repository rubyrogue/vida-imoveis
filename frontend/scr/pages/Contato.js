import { Div } from "../GlobalStyles";
import React, { useState } from 'react';
import GlobalNavBar from "../GlobalNavBar";
import { GlobalFooter } from "../GlobalFooter";
import FaleConosco from "../components/Contato";
import { GlobalDropDown } from "../GlobalDropDown";

export const Contato = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Div>
                <GlobalNavBar toggle={toggle}/>   
                <GlobalDropDown isOpen={isOpen} toggle={toggle}/>
                <FaleConosco />
                <GlobalFooter />
            </Div>
        </>
    )
}