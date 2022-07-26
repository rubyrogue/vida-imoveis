import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import * as C from './styles';

const SearchBar = (props) => {

    const [input, setInput] = useState('');
    const [select, setSelect] = useState('');

    useEffect(()=>{
        props.onChangeInput(input);
    }, [input])

    useEffect(()=>{
        props.onChangeSelect(select);
    }, [select])


    const handleInput = (t) => {
        setInput(t);
    }
    const handleSelect = (s) => {
        setSelect(s);
    }

    return (
        <C.Container>
            <C.AreaTitulo>
            </C.AreaTitulo>
            <C.AreaConsulta>
                <C.AreaInput>
                    <C.Input placeholder='Busca por endereço' value={input} onChange={t=>handleInput(t.target.value)} />
                </C.AreaInput>
                <C.AreaSelect>
                    <C.Select onChange={s=>handleSelect(s.target.value)}>
                        <C.Option value={0}>Busca por Finalidade</C.Option>
                        <C.Option value={1}>Venda</C.Option>
                        <C.Option value={2}>Aluguel</C.Option>
                    </C.Select>
                </C.AreaSelect>
            </C.AreaConsulta>
        </C.Container>
    )
}

export default SearchBar
