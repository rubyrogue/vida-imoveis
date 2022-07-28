import React, {useState} from 'react';
import {GlobalStyle} from '../GlobalStyles';
import ImoveisAxios from '../Helpers/imovel.js';

export const ImoveisDetails = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    ImoveisAxios.getImovel(/*id*/);

    return(
        <>
            <GlobalStyle/>
            {/* <Navbar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <InfoSection/>
            <Footer/> */}
        </>
    )
}