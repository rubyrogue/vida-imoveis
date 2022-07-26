import React from 'react';
import styled from 'styled-components';

import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import { menuData } from './data/MenuData';
import { Button } from './GlobalStyles';

export const GlobalDropDown = ({isOpen, toggle}) => {
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <Wrapper>
                <Menu>
                    {menuData.map((item, index) => (
                        <DropDownLink to={item.link} key={index}>
                            {item.title}
                        </DropDownLink>
                    ))}
                </Menu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contato'>
                        Contato
                    </Button>
                </BtnWrap>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
    cursor: pointer;
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

const Wrapper = styled.div`
    
`;

const Menu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropDownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    list-style: none;
    cursor: pointer;

    &:hover{
        color:#000d1a;
    }
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;

`;