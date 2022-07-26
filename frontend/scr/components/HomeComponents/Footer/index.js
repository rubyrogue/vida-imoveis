import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <FooterContent>
                    <h4>Vida Imóveis</h4>
                    <ul className='list-unstyled'>
                        <li>Compra</li>
                        <li>Venda</li>
                        <li>Locação</li>
                    </ul>
                </FooterContent>
                <FooterContent>
                    <h4>Atendimento</h4>
                    <ul className='list-unstyled'>
                        <li>Segunda a Sexta: 08:00 - 16:00</li>
                        <li>Sábado         : 08:00 - 12:00</li>
                        <li>Locação</li>
                    </ul>
                </FooterContent>     
                <FooterContent>
                    <h4>Telefones</h4>
                    <ul className='list-unstyled'>
                        <li>(37) 99999-9999</li>
                        <li>(37) 98888-8888</li>
                    </ul>
                </FooterContent>   
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    min-height: 40vh;
    background-color: #000d1a;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 200px;
    margin-top: 40px;
    justify-content: space-between;
    
    h4, li{
        color: #fff;
    }

    h4{
        margin-bottom: 20px;
    }

    li{
        margin-top: 20px;
        margin-bottom: 5px;
        font-family: sans-serif;
    }
`;
