import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: #000d1a;
    color: #eee;
    padding: 1vw;
    font-family: 'Montserrat',sans-serif;
    @media screen and (max-width: 763px){
        //margin-top: 30%;
    }
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Column = styled.div`
    margin-right: 10px;
    @media screen and (max-width: 763px){
        
    }
`;
const Title = styled.h4`
    margin-left: 40px;
    @media screen and (max-width: 763px){
        font-size: 100%;
    }
`;
const Lista = styled.ul`

`;
const Item = styled.li`
    list-style: none;
    
    @media screen and (max-width: 763px){
        font-size: 60%;
    }
`;

export const Footer = () => {
    return (
        <Div>
            <Row>
                <Column>
                    <Title>Vida Imóveis</Title>
                    <Lista>
                        <Item>Compra</Item>
                        <Item>Venda</Item>
                        <Item>Locação</Item>
                    </Lista>
                </Column>
                <Column>
                    <Title>Atendimento</Title>
                    <Lista>
                        <Item>Segunda a Sexta: 08:00 - 16:00</Item>
                        <Item>Sábado - 08:00 - 12:00</Item>
                    </Lista>
                </Column>
                <Column>
                    <Title>Telefones</Title>
                    <Lista>
                        <Item>(37) 99999 - 9999</Item>
                        <Item>(37) 99999 - 9999</Item>
                    </Lista>
                </Column>
            </Row>
        </Div>
    )
}
