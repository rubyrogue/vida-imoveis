import React from 'react';
import styled from 'styled-components';

const FooterArea = styled.div`
    background-color: #CCC;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    bottom: 0;
    position: fixed;
    width: 100%;
`;

const Footer = () => {
    return (
        <>
            <FooterArea>
                © Vida Imóveis
            </FooterArea>
        </>
    )
}

export default Footer
