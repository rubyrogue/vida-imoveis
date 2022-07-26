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
    min-width: 100px;
    max-width: 200px; //150px
    transition: 0.3s;
    text-decoration: none;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 10px;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '14px')};
    
    cursor: pointer;
    &:hover{
        transform: translateY() -2px;
    }
`;
