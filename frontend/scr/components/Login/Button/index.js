import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    display: flex;
    background: ${({primary}) => (primary ? '#CD853F' : '#370D32')};
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
    padding: ${({big}) => (big ? '10px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#000d1a' : '#fff')};
    font-size: ${({big}) => (big ? '20px' : '15px')};
    cursor: pointer;
    &:hover{
        transform: translateY() -2px;
    }
    @media screen and (max-width: 768px){
        display: none;
    }
`;
