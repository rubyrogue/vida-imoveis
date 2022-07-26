import axios from "axios";
import styled from "styled-components";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const FaleConosco = () => {

    const [nome, setNome] = useState('')
    //const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = () => {
        axios.post('http://127.0.0.1:8090/email/', {
            destinatario: "imobiliariavidaimoveis@gmail.com",
            assunto:assunto,
            mensagem:"Mensagem de "+nome+": "+mensagem
        }).then((res)=>{
            toast.success('Mensagem enviada com sucesso!')

        }).catch((res)=> {
            toast.error('Erro ao tentar enviar mensagem...')
            }
        )
    }

    return (
        <Div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false} 
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <Row>
                {/* <Column>
                    <DivImg1></DivImg1>
                </Column> */}
                <Column>
                    <Text>Fale Conosco</Text>
                    <Label>Nome:</Label>
                    <Input type="text" value={nome} onChange={n => setNome(n.target.value)} required />
                    {/* <Label>Email:</Label>
                    <Input type="text" value={email} onChange={e => setEmail(e.target.value)} required /> */}
                    <Label>Assunto:</Label>
                    <Input type="text" value={assunto} onChange={a => setAssunto(a.target.value)} required />
                    <Label>Mensagem:</Label>
                    <TextArea required value={mensagem} onChange={m => setMensagem(m.target.value)}></TextArea>
                    <BtnSubmit type="submit" value="Enviar" onClick={handleSubmit} />
                </Column>
            </Row>
        </Div>
    )
}

export default FaleConosco


const Div = styled.div`
    padding: 150px 150px 550px 100px;
    max-height: 80%!important;
    min-height: 80%!important;
`;

const Text = styled.h4`
    text-align: center;
    margin-bottom: 10px;
`;

const Row = styled.div`
    display:flex;
    height: 80%;
    justify-content:center; 
    @media screen and (max-width: 730px){
        width: 150%;
    }
`;

const Column = styled.div`
    background: #eee;
    padding:10px;
    width: 50%;
    /* @media screen and (max-width: 1050px){
        width: 70%;
    } */
    @media screen and (max-width: 730px){
        width: 100%;
        height: 100%;
        margin-right: 20vw; 
    }
`;

// const DivImg1 = styled.div`
//     width:320px;
//     height:400px;
//     background-image: url('contato.jpg');
//     background-size: cover;
//     margin-bottom:20px;
//     background-position: right;
// `;

const Label = styled.label`
    display:block;
    font-weight:bold;
    color:#777;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid #ddd;
    margin-bottom:10px;
    outline:0;
`;

const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid #ddd;
    margin-bottom:10px;
    outline:0;
`;

const BtnSubmit = styled.input`
    width: 100%;
    border: 1px solid #ddd;
    margin-bottom:10px;
    background-color: #ddd;
    outline:0;
    color:#333;
    &:hover {
        background-color:#ccc;
        color:#444;
    }
`;

