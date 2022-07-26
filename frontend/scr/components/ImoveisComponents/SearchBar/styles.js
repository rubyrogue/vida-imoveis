import styled from 'styled-components/macro';

export const Container = styled.div`
    background-color: #c9c9c9;
    width: 90%;
    height: 50px;
    color: #eee;
    z-index: 99;
    margin: auto;
    border-radius: 10px;
    margin-top: 0px;
    padding: 6px;
`;
export const AreaTitulo = styled.div`
    text-align: center;
`;
export const Titulo = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: #000;
`;
export const AreaConsulta = styled.div`
    display: flex;
`;
export const AreaInput = styled.div`
    display: flex;
    flex: 2;
    justify-content: center;
`;
export const Input = styled.input`
    border-radius: 5px;
    padding: 5px;
    width: 90%;
    font-size: 1rem;
    font-weight: 400;
`;
export const AreaSelect = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;
export const Select = styled.select`
    border-radius: 5px;
    padding: 5px;
    width: 90%;
`;
export const Option = styled.option`
    font-size: 1rem;
    font-weight: 400;
`;