import React, {useState} from 'react';
import {InfoData2} from '../data/InfoData';
import {GlobalStyle} from '../GlobalStyles';
import {SliderData2} from '../data/SliderData';
import ImoveisAxios from '../Helpers/imovel.js';
import {Hero} from '../components/ImoveisComponents/Hero';
import Navbar from '../components/ImoveisComponents/Navbar';
import {Footer} from '../components/ImoveisComponents/Footer';
import {DropDown} from '../components/ImoveisComponents/DropDown';
import {InfoSection} from '../components/ImoveisComponents/InfoSection';
import SearchBar from '../components/ImoveisComponents/SearchBar/Index';

export const Imoveis = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [changeInput, setChangeInput] = useState('');
    const [changeSelect, setChangeSelect] = useState('');
  
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleChangeInput = (input) => {
        setChangeInput(input)
    }

    const handleChangeSelect = (select) => {
        setChangeSelect(select)
    }

    ImoveisAxios.listarImoveis()

    return (
        <>
            <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Hero slides={SliderData2}/>
            <SearchBar onChangeSelect={handleChangeSelect} onChangeInput={handleChangeInput} />
            <InfoSection buscaSelect={changeSelect} buscaInput={changeInput} />
            <Footer/>
        </>
    )
}

