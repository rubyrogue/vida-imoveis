import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    display: flex;
    background: ${({primary}) => (primary ? '#000d1a' : '#CD853F')};
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    min-width: ${({big}) => (big ? '100px' : '50px')};
    max-width: ${({big}) => (big ? '200px' : '100px')};
    transition: 0.3s;
    text-decoration: none;
    border-radius: 5px;
    padding: ${({big}) => (big ? '6px 24px' : '0 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '15px')};
    cursor: pointer;
    &:hover{
        transform: translateY() -2px;
    }
`;

export const AddButton = styled(Link)`
    display: flex;
    background: #CD853F;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    min-width: 20px;
    max-width: 50px;
    min-height: 20px;
    max-height: 50px;
    transition: 0.3s;
    text-decoration: none;
    border-radius: 50%;
    text-align: center;
    padding: 0 20px;
    color: #000d1a;
    font-size: 30px;
    cursor: pointer;
    &:hover{
        transform: translateY() -2px;
    }
`;
