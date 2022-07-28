import React from "react";
import styled from "styled-components";

const Div = styled.div`
    padding: 100px 100px 200px 100px;
    margin: auto;
    //padding: 3rem calc((100vw - 1300px) / 2);
    
`;

const Text = styled.h4`
    @media screen and (max-width: 763px){
        font-size: 90%;
    }

    @media screen and (max-width: 657px){
        font-size: 50%;
    }
`;

const P = styled.p`
    @media screen and (max-width: 763px){
        font-size: 80%;
    }

    @media screen and (max-width: 657px){
        font-size: 40%;
    }
`;

const Row = styled.div`
    display: flex;
    margin: auto;
    grid-template-columns: repeat;
    justify-content: space-around;
    @media screen and (max-width: 763px){
        width: 100%;
    }

    @media screen and (max-width: 657px){
        width: ${({firstText}) => (firstText  ? '150%' : '100%' )};
        margin-left: ${({firstText}) => (firstText  ? '-25%' : '0   ' )};
    }
`;

const Column = styled.div`
    padding: 50px;
    background: #eee;
    border-radius:50px;
    margin: 0 10px;
    @media screen and (max-width: 763px){
        padding: 5%;
        //width: 150%;
        display: column;
        //order = -1;
        border-radius: 30px;
    }
`;

const DivImg1 = styled.div`
    width:100px;
    height:100px;
    border-radius:50%;
    background-image: url('/images/corretor1.jpeg');
    background-size: cover;
    margin-bottom:20px;
`;

const DivImg2 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url('/images/corretor2.jpeg');
    background-size: cover;
    margin-bottom: 20px;
`;

const DivImg3 = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url('/images/corretor3.jpeg');
    background-size: cover;
    margin-bottom: 20px;    
    background-position:right;
`;

const Title = styled.h4`
    @media screen and (max-width: 763px){
        font-size: 90%;
    }

    @media screen and (max-width: 657px){
        font-size: 50%;
    }
`;

const SubTitle = styled.h6`
    @media screen and (max-width: 763px){
        font-size: 90%;
    }

    @media screen and (max-width: 657px){
        font-size: 50%;
    }
`;

const QuemSomos = () => {
    return (
        <Div>
            <Row firstText='true'>
                <Column>
                    <Text>Quem Somos</Text>
                    <P>Ad quis aute dolore deserunt ea do deserunt nulla aute in proident duis. Est esse duis dolore elit ipsum proident velit veniam laborum aute nulla magna ullamco anim. Officia irure nostrud tempor sunt ut ullamco in est commodo laboris proident nostrud aliquip pariatur.</P>
                </Column>
                <Column>
                    <Text>Nossa História</Text>
                    <P>Ad quis aute dolore deserunt ea do deserunt nulla aute in proident duis. Est esse duis dolore elit ipsum proident velit veniam laborum aute nulla magna ullamco anim. Officia irure nostrud tempor sunt ut ullamco in est commodo laboris proident nostrud aliquip pariatur.</P>
                </Column>
            </Row>
            <Row><Text>Nossos Corretores</Text></Row>
            <Row>
                <Row>
                    <Column>
                        <DivImg1></DivImg1>
                        <Title>Jane Doe</Title>
                        <SubTitle>Gerente de Corretagem</SubTitle>
                        <P>ipsum proident velit veniam laborum aute nulla magna ullamco anim. Officia irure nostrud tempor sunt</P>
                    </Column>
                    <Column>
                        <DivImg2></DivImg2>
                        <Title>John Doe</Title>
                        <SubTitle>Assistente de Corretagem</SubTitle>
                        <P>ipsum proident velit veniam laborum aute nulla magna ullamco anim. Officia irure nostrud tempor sunt</P>
                    </Column>
                    <Column>
                        <DivImg3></DivImg3>
                        <Title>Marie Dee</Title>
                        <SubTitle>Corretora</SubTitle>
                        <P>ipsum proident velit veniam laborum aute nulla magna ullamco anim. Officia irure nostrud tempor sunt</P>
                    </Column>
                </Row>
            </Row>
        </Div>
    )
}

export default QuemSomos
