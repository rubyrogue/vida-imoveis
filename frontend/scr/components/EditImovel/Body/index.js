import {Button} from '../Button';
import styled from 'styled-components';
import {useParams} from 'react-router';
import React, {useEffect, useState} from 'react';
import {storage} from '../../../data/Adm/firebaseConfg';
import {toast, ToastContainer} from 'react-toastify';
import ImoveisAxios from '../../../Helpers/imovel'

const EditImovelBody = () => {
    const [image, setImage]         = useState(null);
    const [imageName, setImageName] = useState("");
    const [url, setUrl]             = useState("");
    const [progress, setProgress]   = useState(0);
    const [select, setSelect]       = useState('');
    const { id }                    = useParams();

    const initialValue = {
        codigo:'',
        titulo: '',
        endereco: '',
        descricao: '',
        qtdeQuarto: '',
        qtdeBanheiro: '',
        preco: '',
        metragem: '',
        imagem: url,
        categoria: {'codigo': 0, 'nome': ''},
    }

    const [values, setValues]       = useState(initialValue);

    useEffect(()=>{
        ImoveisAxios.getImovel(id).then((resp) => {
            setValues(resp.data)
            return resp.data
        })
    }, [])

    function onChange(ev){
        const {name, value} = ev.target;

        if (value === 0) {
            toast.error("Selecione uma categoria!");
        }else{
            setValues({ ...values, [name]: value});
        }
    }

    function onChangeInt(e){
        const {name, value} = e.target;
        let intValue = parseInt(value, 10);

        setValues({ ...values, [name]: intValue});
    }

    function onChangeFloat(e){
        const {name, value} = e.target;
        let floatValue = parseFloat(value.replace(',', '.'));

        setValues({ ...values, [name]: floatValue});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(values))
        
        fetch('http://localhost:8080/imoveis/', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }).then(res => {
            toast.success("Alterações salvas com sucesso!");
        }).catch((err) => {
            toast.error("Erro ao editar o imóvel!" + err);
        });
    };

    const handleChange = e => {
        if(e.target.files[0]){
            setImageName(e.target.name);
            setImage(e.target.files[0]);
        }
    };

    const handleSelect = (s) => {
        setSelect(s);
        let inserir = {}
        if(s == '1') {
            inserir = {'codigo':1, 'nome':'Venda'}
        } else if(s == '2') {
            inserir = {'codigo':2, 'nome':'Aluguel'}
        }
        setValues({ ...values, categoria: inserir});
    }

    const handleUpload = () => {
        const upload = storage.ref(`images/${image.name}`).put(image);
        setImageName(image.name);
        setValues({ ...values, img: image.name});
        console.log("IMAGE NAME: " + imageName);
        upload.on(
            'state_changed',
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100
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
                        setValues({ ...values, imagem: url});
                    });
            }
        );
    };

    return (
        <>      
            <Container style={{paddingBottom: 0}}>
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
                <label>Imagem</label>
                <progress value={progress} max='100'/>
                <input type='file' onChange={handleChange} defaultValue={values.imagem || ''} />
                {image &&
                    <>
                    <Button primary='true' onClick={handleUpload}>Carregar imagem</Button>
                    <img src={url} alt='' id='img' name='imagem'/>
                    </>
                }
                {!image &&
                    <img src={url || values.imagem} alt='' id='img' name='imagem'/>
                }
            </Container>
            <form onSubmit={onSubmit}>
                <Container style={{paddingTop: 0}}>
                    <label>Título</label>
                    <input type='text' id='alt' name='titulo' onChange={onChange} defaultValue={values.titulo || ''} required/>
                    <label>Descrição</label>
                    <input type='text' id='desc' name='descricao' desc='true' onChange={onChange} defaultValue={values.descricao || ''}/>
                    <label>Quartos</label>
                    <input type='text' id='rooms_num' name='qtdeQuarto' onChange={onChangeInt} defaultValue={values.qtdeQuarto || ''} required/>
                    <label>Banheiros</label>
                    <input type='text' id='wcs_num' name='qtdeBanheiro' onChange={onChangeInt} defaultValue={values.qtdeBanheiro || ''} required/>
                    <label>Endereço</label>
                    <input type='text' id='address' name='endereco' onChange={onChange} defaultValue={values.endereco || ''}/>
                    <label>Metragem</label>
                    <input type='text' id='footage' name='metragem' onChange={onChange} defaultValue={values.metragem || ''}/>
                    <label>Categoria</label>
                    <Select onChange={s=>handleSelect(s.target.value)} value={values.categoria.codigo}>
                                <Option value={0} onChange={onChange}>Selecione uma Categoria</Option>
                                <Option value={1}>Venda</Option>
                                <Option value={2}>Aluguel</Option>
                    </Select>
                    <label>Valor</label>
                    <input type='text' id='price' name='preco' onChange={onChangeFloat} defaultValue={values.preco || ''} required/>
                    <Button big='true'>Adicionar</Button>
                </Container>
            </form>
        </>
    )
}

export default EditImovelBody;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    width: 80vw;
    height: 100vh - 20px;
    padding: 5rem calc((100vw - 1150px) / 2);
    margin-bottom: 15px;
    margin-left: 10vw;
    background: #FFF;

    > .container1 {
        background-color: #000;
    }

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

const Select = styled.select`
    padding: 5px;
    width: 220px;
    border: 1px solid #AAAAAA;
    border-radius: 8px;
    margin-bottom: 5px;
`;

const Option = styled.option`
    font-size: 1rem;
    font-weight: 300;
`;
