import React from 'react';
import {Button} from '../Button';
import {FaHome} from 'react-icons/fa';
import {IoCloseSharp} from 'react-icons/io5';
import {NavLink as Link} from 'react-router-dom';
import styled, {css} from 'styled-components/macro';

const Header = ({toggle}) => {

    return (
        <Nav>
            <Logo to='/'>
                VIDA IMÓVEIS
                <HomeIcon/>
            </Logo>
            <NavLogoutLink to='/'>
                <CloseBtn/>
            </NavLogoutLink>
            <Button to='/'>
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
    padding: 0 1rem;
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
    
    @media screen and (max-width: 768px){
        display: block;
    }
`;

const NavLogoutLink = styled(Link)`
    ${NavLink}
    margin-left: 40vw;
`;

const HomeIcon = styled(FaHome)`
    color: #fff;
    margin-left: 10px;
`;
