import React from 'react';
import styled, {css} from 'styled-components/macro';
import {NavLink as Link} from 'react-router-dom';
import {FaBars, FaHome} from 'react-icons/fa';

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

const NavLogoutLink = styled(Link)`
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

const Header = () => {

    return (
        <Nav>
            <Logo to='/'>
                VIDA IMÓVEIS
                <HomeIcon/>
            </Logo>
            <NavLogoutLink to='/imoveis'>
                Voltar
            </NavLogoutLink>
        </Nav>
    )
}

export default Header;
