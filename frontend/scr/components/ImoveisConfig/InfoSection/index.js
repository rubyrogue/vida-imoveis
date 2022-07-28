import {Spring} from 'react-spring';
import styled from 'styled-components';
import {Button, AddButton} from '../Button';
import React, {useEffect, useState} from 'react';
import ImoveisAxios from '../../../Helpers/imovel';
import {FaBed, FaDollarSign, FaToilet} from 'react-icons/fa';

export const InfoSection = ({data}) => {

    const [list, setList] = useState([])

    useEffect(()=>{
        ImoveisAxios.listarImoveis().then((resp) => {
            setList(resp.data)
            return resp.data
        })
    }, [])

    const handleDelete = (id) => {
        if( window.confirm('Confirma a exclusão do imóvel?') ) {
            ImoveisAxios.deletetImovel(id).then(()=>{
                ImoveisAxios.listarImoveis().then((resp) => {
                    setList(resp.data)
                    return resp.data
                })
            })
        } else {
            return false
        } 
    }

    return (
        <Spring>
            {props => (
                <div style={props}>
                    <SectionContainer>
                        <AddButton to='/administrador/imoveis/add'>+</AddButton>
                        <Wrapper>
                        {list.map((property, index) => {
                                return(
                                    <Card key={index}>
                                        {property.imagem !== '' &&
                                            <Image src={property.imagem}/>
                                        }
                                        {property.imagem === '' &&
                                            <Image src='/images/capacontato.jpg'/>
                                        }
                                        <Info>
                                            <Title>{property.titulo}</Title>
                                            {property.descricao}<br/>
                                            {property.endereco}<br/>
                                            {property.metragem}<br/>
                                            {property.categoria.nome}<br/>  
                                            <Icons>
                                                <RoomIcon/>{property.qtdeQuarto}
                                                <WCIcon/>{property.qtdeBanheiro}
                                            </Icons>
                                            <FaDollarSign/>{property.preco}<br/>
                                        </Info>
                                        <AreaButton>
                                            <Button to={`/administrador/imoveis/edit/${property.codigo}`}>Editar</Button>
                                            <ButtonDelete onClick={()=>handleDelete(property.codigo)}>Excluir</ButtonDelete>
                                        </AreaButton>
                                    </Card>
                                )
                            })}
                        </Wrapper>
                    </SectionContainer>
                </div>
            )}
        </Spring>
    )
}

const SectionContainer = styled.div`
    display: flex; 
    width: 97vw;
    height: 100vh - 20px;
    padding: 4rem calc((100vw - 1450px) / 2);
    margin-left: -2.5vw;
    background: #FFF;
    
    @media screen and (max-width: 150px){
        display: none;
        align-items: center;
        margin-left: 0px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    margin-right: 10px;
    margin-top: 40px;
`;

const Card = styled.div`
    margin: 0 2rem;
    margin-top: 30px;
    width: 300px;
    line-height: 2;
`;

const Image = styled.img`
    height: 300px;
    min-width: 400px;
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 8px 8px 8px #36486b;
`;

const Heading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

const Title = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

const Info = styled.div`
    font-size: 14px;
    line-height: 1.4;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 10px;
    border: 1px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;

const RoomIcon = styled(FaBed)`
    color: #36486b;
    margin-right: 10px;
`;

const WCIcon = styled(FaToilet)`
    color: #36486b;
    margin-right: 10px;
`;

const AreaButton = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonDelete = styled.button`
    background: red;
    color: #eee;
    border: 0;
    border-radius: 5px;
    outline: none;
    min-width: 50px;
    max-width: 100px;
    padding: 0 24px;
    font-size: 15px;
    margin-right: -100px;
`;
