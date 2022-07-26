import axios from 'axios';
import * as XLSX from 'xlsx';
import { Button } from '../Button';
import { render } from 'react-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ImoveisAxios from '../../../Helpers/imovel'
import { storage } from '../../../data/Adm/firebaseConfg';
import { toast, ToastContainer } from 'react-toastify';
import { CSVLink } from "react-csv";

const headers = [
    { label: "Quarto", key: "quarto" },
    { label: "Banheiro", key: "banheiro" },
    { label: "Metragem", key: "metragem" },
    { label: "Preco", key: "preco" }
];

const Body = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState("");
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [dados, setDados] = useState([]);

    const [select, setSelect] = useState('');

    const initialValue = {
        desc: '',
        address: '',
        img: '',
        footage: 0.0,
        price: 0.0,
        wcs_num: '',
        rooms_num: '',
        alt: '',
        categoria: { 'codigo': 0, 'nome': '' },
    }

    const [values, setValues] = useState(initialValue);
    const history = useHistory();


    function onChange(ev) {
        const { name, value } = ev.target;
        console.log(values);

        if (value === 0) {
            toast.error("Selecione uma categoria!");
        } else {
            setValues({...values, [name]: value });
        }
    }

    function onChangeInt(e) {
        const { name, value } = e.target;
        console.log(values);
        let intValue = parseInt(value, 10);
        console.log(values);

        setValues({...values, [name]: intValue });
    }

    function onChangeFloat(e) {
        const { name, value } = e.target;
        console.log(values);
        let floatValue = parseFloat(value.replace(',', '.'));
        console.log(values);

        setValues({...values, [name]: floatValue });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(values))
        var obj = {
            titulo: values.alt,
            endereco: values.address,
            descricao: values.desc,
            qtdeQuarto: values.rooms_num,
            qtdeBanheiro: values.wcs_num,
            preco: values.price,
            metragem: values.footage,
            imagem: url,
            categoria: values.categoria
        }
        fetch('http://localhost:8090/imoveis/', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            }).then(res => res.json(
                console.log(res)
            ))
            .then(res => {
                toast.success("Imóvel adicionado com sucesso!");
                //history.push('/administrador/imoveis');
            })
            .catch((err) => {
                toast.error("Erro ao adicionar o imóvel!" + err);
            });

        var dado = {
            codigo: 0,
            quarto: 0,
            banheiro: 0,
            metragem: 0,
            preco: 0
        }

        ImoveisAxios.listarImoveis()
            .then(res => {
                console.log(res)
                if (res.data != []) {
                    res.data.forEach(element => {
                        console.log(element)
                        dado.codigo = element.codigo
                        dado.banheiro = element.qtdeBanheiro
                        dado.quarto = element.qtdeQuarto
                        dado.metragem = element.metragem
                        dado.preco = element.preco
                        setDados(dado)
                        dado = {
                            codigo: 0,
                            quarto: 0,
                            banheiro: 0,
                            metragem: 0,
                            preco: 0
                        }
                    });
                }
            })

    };

    const handleChange = e => {
        if (e.target.files[0]) {
            setImageName(e.target.name);
            setImage(e.target.files[0]);
        }
    };

    const handleSelect = (s) => {
        setSelect(s);
        let inserir = {}
        if (s == '1') {
            inserir = { 'codigo': 1, 'nome': 'Venda' }
        } else if (s == '2') {
            inserir = { 'codigo': 2, 'nome': 'Aluguel' }
        }
        setValues({...values, categoria: inserir });
    }

    const handleUpload = () => {
        const upload = storage.ref(`images/${image.name}`).put(image);
        setImageName(image.name);
        setValues({...values, img: image.name });
        console.log("IMAGE NAME: " + imageName);
        upload.on(
            'state_changed',
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => { console.log(error); },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        setUrl(url)
                    });
            }
        );
    };

    console.log('image: ', image);

    return ( 
    <>
        <Container style={{paddingBottom:0}}>
            <ToastContainer position = "top-right"
                autoClose = {5000}
                hideProgressBar = {false}
                newestOnTop = {false}
                closeOnClick rtl = {false}
                pauseOnFocusLoss draggable pauseOnHover/>
            <label> Imagem </label> 
            <progress value={progress} max='100'/>
            <input type = 'file'
            onChange={handleChange} required/> 
                {image && 
                <> 
                    <Button primary='true' onClick={handleUpload}> Carregar imagem </Button> 
                    <img src={url} alt='' id='img' name='img'/>
                </>
                } 
        </Container> 
        <form onSubmit={onSubmit}>
            <Container style={{paddingTop:0}}>
                <label> Título </label> 
                <input type='text' id='alt' name='alt' onChange={onChange} required/>
                <label> Descrição </label> 
                <input type='text' id='desc' name='desc' desc='true' onChange={onChange}/> 
                <label> Quartos </label> 
                <input type='text' id='rooms_num' name='rooms_num' onChange={onChangeInt} required/>
                <label> Banheiros </label> 
                <input type='text' id='wcs_num' name='wcs_num' onChange={onChangeInt} required/>
                <label> Endereço </label> 
                <input type='text' id='address' name='address' onChange={onChange}/> 
                <label> Metragem </label> 
                <input type='text' id='footage' name='footage' onChange={onChange}/> 
                <label> Categoria </label> 
                <Select onChange={s=>handleSelect(s.target.value)}>
                    <Option value={0} onChange={onChange}> Selecione uma Categoria </Option> 
                    <Option value={1}> Venda </Option> 
                    <Option value={2}> Aluguel </Option> 
                </Select> 
                <label> Valor </label> 
                <input type='text' id='price' name='price' onChange={onChangeFloat} required/>
                <Button big='true'> Adicionar </Button> 
            </Container> 
        </form> 
    </>
    )
}

export default Body;

const Container = styled.div `
    display: flex; 
    flex-direction: column;
    width: 80vw;
    height: 100vh - 20px;
    padding: 5rem calc((100vw - 1150px) / 2);
    margin-bottom: 15px;
    margin-left: 10vw;
    background: #FFF;

    @media screen and (max-width: 150px){
        display: none;
        align-items: center;
        margin-left: 0px;
    }

    > label{
        margin-bottom: 5px;
        margin-top: 3px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;

        .desc{
            padding: 10px 10px 10px 10px;
        }
    }

    > input{
        border: 1px solid #AAAAAA;
        border-radius: 8px;
        margin-bottom: 5px;
    }
`;

const Select = styled.select `
    padding: 5px;
    width: 220px;
    border: 1px solid #AAAAAA;
    border-radius: 8px;
    margin-bottom: 5px;
`;

const Option = styled.option `
    font-size: 1rem;
    font-weight: 300;
`;
