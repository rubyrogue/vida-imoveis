import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled.button`
    display: flex;
    background: ${({primary}) => (primary ? '#666666' : '#370D32')};
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    min-width: ${({big}) => (big ? '100px' : '130px')};
    max-width: ${({big}) => (big ? '200px' : '100px')};
    transition: 0.3s;
    text-decoration: none;
    border-radius: 5px;
    padding: ${({big}) => (big ? '6px 24px' : '0 24px')};
    margin-bottom: 5px;
    color: #fff;
    font-size: ${({big}) => (big ? '20px' : '15px')};
    cursor: pointer;
    &:hover{
        transform: translateY() -2px;
    }
    @media screen and (max-width: 768px){
        display: ${({close}) => (close ? 'none' : 'block')};
    }
`;
