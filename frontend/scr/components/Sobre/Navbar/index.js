import { DefaultButton } from '../../../GlobalStyles';
import React, {useState} from 'react'
import styled, {css} from 'styled-components/macro';
import {NavLink as Link} from 'react-router-dom';
import {FaBars, FaHome, FaWhatsapp} from 'react-icons/fa';

const whatsDDD = '99';
const whatsNumber = '999999999';

const NavBar = ({toggle}) => {

    return (
        <Nav>
            <Logo to='/'>
                VIDA IMÓVEIS
                <HomeIcon/>
            </Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                <NavMenuLinks to='/sobre'>
                    Sobre
                </NavMenuLinks>
                <NavMenuLinks to='/imoveis'>
                    Imoveis
                </NavMenuLinks>
            </NavMenu>
            <NavBtn>
            <DefaultButton to='/contato'>
                Contato
            </DefaultButton>
            </NavBtn>
            <WhatsappButton href={`https://wa.me/55${whatsDDD}${whatsNumber}`} target='_blank'>
                <WhatsAppIcon />
            </WhatsappButton>
        </Nav>
    )
}

export default NavBar;

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: black;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    text-decoration: none;
    cursor: pointer;
`;

const Logo = styled(Link)`
    ${NavLink}
    color: #fff;
`;

const MenuBars = styled(FaBars)`
    display: none;
    cursor: pointer;
    color: #fff;

    @media screen and (max-width: 768px){
        display: block;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: --48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const HomeIcon = styled(FaHome)`
    color: #fff;
    margin-left: 10px;
`;

const WhatsAppIcon = styled(FaWhatsapp)`
    color: green;
    font-size: 36px;
`;

const WhatsappButton = styled.a`
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
