import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 30%;
    height: 100px;
    color: #eee;
    z-index: 99;
    margin: auto;
    border-radius: 10px;
    margin-top: -25px;
    margin-left: -12px;
    margin-bottom: -35px;
`;
export const AreaTitulo = styled.div`
    text-align: center;
`;
export const Titulo = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
`;
export const AreaSelect = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;
export const Select = styled.select`
    border-color: #AAAAAA;
    border-radius: 10px;
    padding: 5px;
    width: 90%;
`;
export const Option = styled.option`
    font-size: 1rem;
    font-weight: 400;
`;