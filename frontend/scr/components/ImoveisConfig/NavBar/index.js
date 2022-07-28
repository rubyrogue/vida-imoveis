import React from 'react'
import {Button} from '../Button';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import styled, {css} from 'styled-components/macro';


const Navbar = ({toggle}) => {

    return (
        <Nav>
            <Logo to='/administrador/logout'>
                VIDA IMÓVEIS
                <HomeIcon/>
            </Logo>
            <NavMenuLinks  to='/administrador/logout' big='true'>
                <CloseBtn/>
            </NavMenuLinks>
            <NavMenu>
                <NavMenuLinks>
                </NavMenuLinks>
                <NavMenuLinks>
                </NavMenuLinks>
            </NavMenu>
            <NavBtn>
                <Button to='/administrador/logout' big='true'>
                    Sair
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: #000d1a;
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

const CloseBtn = styled(IoCloseSharp)`
    display: none;
    cursor: pointer;
    color: #fff;
    visibility: hidden;

    @media screen and (max-width: 768px){
        display: block;
        visibility: visible;
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
    margin-right: -6.5vw;
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
