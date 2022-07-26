import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../GlobalStyles';
//import {Button} from '../Button';

export const InfoSection = ({heading, parag1, parag2, buttonLabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <p>{parag1}</p>
                    <p>{parag2}</p>
                    <Button homeSize='true' to='/imoveis'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='imoveis'/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

const Section = styled.div`
    margin: auto;
    display: flex;
    width: 100%;
    
    padding: 4rem 0rem;
    //max-width: 1000px;
`;

const Container = styled.div`
    display: grid;
    width: 90vw;
    padding: 3rem calc((100vw - 1300px) / 2);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        display: column;
        width: 80%;
    }
`;

const ColumnLeft = styled.div`
  
    line-height: 1.4;
    margin: auto;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    @media screen and (max-width: 768px){
        min-width: 20%!important;
        min-height: 100%!important;
        padding: 0 0;
    }

    h1{
        margin-bottom: 1rem;
        font-size: clam(1.5rem, 6vw, 2rem);

        @media screen and (max-width: 768px){
            font-size: 100%;
            font-weight: bold;
            margin-top: 10px;
        }
    }

    p{
        margin-bottom: 2rem;
        @media screen and (max-width: 768px){
            font-size: 90%;
            margin-right: 5px;
        }
    }
`;

const ColumnRight = styled.div`
    display: flex;
    //padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        order: ${({reverse}) => (reverse ? '1' : '2')};
        min-width: 200%!important;
        min-height: 100%!important;
    }

    @media screen and (max-width: 768px){
            width: 20%;
            height: 20%;
            background-size: 70%;
        } 

    img{
        width: 100%;
        height: 100%;
        //object-fit: cover;

        /* @media screen and (max-width: 768px){
            
        }  */
    }
`;
