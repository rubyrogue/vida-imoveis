import axios from "axios";
import styled from 'styled-components';
import ImoveisAxios from '../../../Helpers/imovel'
import React, { useEffect, useState } from "react";
import {FaBed, FaDollarSign, FaToilet} from 'react-icons/fa';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export const ViewImovelBody = (props) => {

    const [hints, setHints]         = useState([])
    const [alert, setAlert]         = useState(false)
    const [imovel, setImovel]       = useState('')
    const [categoria, setCategoria] = useState('')
    
    const history = useHistory();

    useEffect(()=>{
        ImoveisAxios.filterImovel(props.id).then((resp) => {
            if(resp.data) {
                setImovel(resp.data)
                if(resp.data.categoria.nome === 'venda') {
                    setCategoria('Venda')
                } else {
                    setCategoria('Aluguel')
                }
                console.log(imovel)
                return resp.data
            } else {
                setAlert(true)
            }
        });
        axios.post('http://127.0.0.1:9000/add/', {id:props.id}).then((res)=>{
            setHints(res.data)
        })

    }, []) 

    const handleShow = (id) => {
        history.push(`/imoveis/view/${id}`);
        window.location.reload()
    }

    let rows = []
    let limit = 20
    if(hints.length > 0) {
        for (let i = 0; i < hints.length && i < limit; i++) {
            rows.push(
                <CardHints key={hints[i].codigo}>
                    <WrapperClick onClick={()=>handleShow(hints[i].codigo)}>
                        <ImageHints src={hints[i].imagem}/>
                        <InfoHints>
                            <TitleHints>{hints[i].titulo}</TitleHints>
                            {hints[i].descricao}<br/>
                            {hints[i].endereco}<br/>
                            {hints[i].metragem}<br/>
                            {/* {hints[i].categoria.nome}<br/>   */}
                            <IconsHints>
                                <RoomIcon/>{hints[i].qtde_quarto}
                                <WCIcon/>{hints[i].qtde_banheiro}
                            </IconsHints>
                            <FaDollarSign/>{hints[i].preco}<br/>
                        </InfoHints>
                    </WrapperClick>
                </CardHints>
            )
        }  
    }

    return (
        <>
        { !alert &&
        <SectionContainer>
            <Card key={imovel.codigo}>
                <Image src={imovel.imagem}/>
                <Info>
                    <Title>{imovel.titulo}</Title>
                    <Wrapper>
                        <b>Descrição:</b> {imovel.descricao}<br/>
                        <b>Endereço:</b> {imovel.endereco}<br/>
                        <b>Metragem:</b> {imovel.metragem}<br/>
                        <b>Categoria:</b> {categoria}<br/>  
                    </Wrapper>
                    <Icons>
                        <RoomIcon/> <b>Quartos:</b> {imovel.qtdeQuarto}<br/>
                        <WCIcon/> <b>Banheiros:</b> {imovel.qtdeBanheiro}
                    </Icons>
                    <FaDollarSign/><b>Preço:</b> {imovel.preco}<br/>
                </Info>
            </Card>
            </SectionContainer>
        }
        { alert && 
            <Card key={imovel.codigo}>
                <Image src={'/images/nao_encontrado.png'}/>
                <Info>
                    <Title><b>NENHUM IMÓVEL ENCONTRADO</b></Title> 
                </Info>
            </Card>
        }
        {hints.length > 0 &&
            <>
                <Title>Outros Imóveis Sugeridos:</Title>
                <SectionContainerHint>
                    <WrapperHints>
                        {rows}
                    </WrapperHints>
                </SectionContainerHint>
            </>
        }
        </>
    )
}

const SectionContainerHint = styled.div`
    display: flex;
    justify-content: center;
`;

const WrapperClick = styled.a`
    cursor: pointer;
    text-decoration:none;
    color:#333;
`;

const SectionContainer = styled.div`
display: flex;
 `;

 const Wrapper = styled.div`
    @media screen and (max-width: 948px){
        display: relative;
        width: 100%;        
        height: 50%;
        margin-top: 40%; 
        margin-right: 10%; 
    }
 `;

const Card = styled.div`
    display:fixed;
    @media screen and (max-width: 948px){
        width: 100%;        
        height: 50%;
        //margin-top: 40%; 
        margin-right: 100px; 
    }
`;

const Image = styled.img`
    margin:100px;
    width: 320px;
    border-radius:5px;
    box-shadow: 8px 8px 8px #36486b;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    @media screen and (max-width: 948px){
        width: 60%;        
        height: 70%;
    }

    &:hover {
        z-index:999;
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        cursor: zoom-in;
    }

`;

// const Heading = styled.h1`
// `;

const Title = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    text-align:center;
    border-bottom: 1px solid #ccc;
    margin-top:10px;
    margin-bottom:20px;
`;

const Info = styled.div`
    
    margin:100px;
    /* @media screen and (max-width: 948px){
        display: block;
        width: 60%;        
        height: 70%;
        margin-top: 40%; 
        margin-right: 80%; 
    } */
`;

const Icons = styled.div`
`;

const RoomIcon = styled(FaBed)`
`;

const WCIcon = styled(FaToilet)`
`;

const WrapperHints = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CardHints = styled.div`
    width: 160px;
    margin: 0 25px;
    justify-content: center;
`;

const ImageHints = styled.img`
    width: 100%;
    box-shadow: 3px 3px 3px #36486b;
    margin-bottom: 10px;
    
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;

    &:hover {
        z-index:999;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

const InfoHints = styled.div`
    font-size: 14px;
    line-height: 1.4;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    border: 1px;
    color: #000;
    text-decoration: none;
`;

const TitleHints = styled.h2`
    font-weight: 400;
    font-size: 18px;
    color: #000;
    text-decoration: none;
`;

const IconsHints = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`;
