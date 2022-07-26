import React from 'react';
import {Button} from '../Button';
import {FaHome} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import {NavLink as Link} from 'react-router-dom';
import styled, {css} from 'styled-components/macro';


const Header = ({toggle}) => {

    return (
        <Nav>
            <Logo to='/administrador/logout'>
                VIDA IMÓVEIS
                <HomeIcon/>
            </Logo>
            <NavMenuLink  to='/administrador/logout'>
                <CloseBtn/>
            </NavMenuLink>
            <Button close='true' to='/administrador/logout'>
                Sair
            </Button>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: #370D32;
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

const NavMenuLink = styled(Link)`
    ${NavLink}
    margin-right: -5;
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
