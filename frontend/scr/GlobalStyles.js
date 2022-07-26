import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body{
        overflow-x: hidden;
    }
`;


export const Div = styled.div`
    height: 100vh;
`;

export const DefaultButton = styled(Link)`
    display: inline;
    width: 100%;
    color: #FFF;
    background-color: ${({secondary}) => (secondary ? '#370D32' : '#9370DB')};
    align-items: center;
    padding: 10px;
    border: 0px;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 15px;
    transition: 0.4s;

    &:hover{
        background-color: #CCC;
    }
`;

export const Button = styled(Link)`
    display: flex;
    background: ${({primary}) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px; 
    transition: 0.3s;
    text-decoration: none;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 10px;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};

    @media screen and (max-width: 768px){
        max-width: ${({homeSize}) => (homeSize ? '120px' : '200px')};
        padding: ${({homeSize}) => (homeSize ? '10px 40px' : '14px 24px')};
        font-size: ${({homeSize}) => (homeSize ? '12px' : '14px')};
    }

    
    cursor: pointer;
    &:hover{
        transform: translateY() -2px;
    }
`;

const WhatsAppIcon = styled(FaWhatsapp)`
    color: green;
    font-size: 36px;
`;

export const WhatsappButton = styled.a`
    width: 50px;
    height: 50px;
    background-color: #ddd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 20px;
    bottom: 50%;
    box-shadow: 2px 2px 3px #000;
    &:hover{
        width: 48px;
        height: 48px;
        box-shadow: 0 0 0 0;
    }
    &:hover ${WhatsAppIcon}{
        font-size: 34px;
    }
`;

export const Button2 = styled(Link)`
    display: flex;
    background: ${({primary}) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px; 
    transition: 0.3s;
    text-decoration: none;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 10px;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};

    /* @media screen and (max-width: 768px){
        max-width: ${({homeSize}) => (homeSize ? '120px' : '200px')};
        padding: ${({homeSize}) => (homeSize ? '10px 40px' : '14px 24px')};
        font-size: ${({homeSize}) => (homeSize ? '12px' : '14px')};
    } */

    
    cursor: pointer;
    &:hover{
        transform: translateY() -2px;
    }
`;

export const ButtonDelete = styled(Link)`
    background: #370D32;
    color: #eee;
    border: 0;
    border-radius: 5px;
    outline: none;
    min-width: 50px;
    max-width: 100px;
    padding: 0 24px;
    font-size: 15px;
    margin-right: -100px;
`;

