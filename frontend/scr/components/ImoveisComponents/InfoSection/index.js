import React from "react";
import { Spring } from "react-spring";
import styled from "styled-components";
import { useEffect, useState } from "react";
import ImoveisAxios from "../../../Helpers/imovel";
import { FaBed, FaDollarSign, FaToilet } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const InfoSection = (props) => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const history = useHistory();

  useEffect(() => {
    ImoveisAxios.listarImoveis().then((resp) => {
      setList(resp.data);
      setFilteredList(resp.data);
      return resp.data;
    });
  }, []);

  useEffect(() => {
    let busca = props.buscaInput.toLowerCase();
    let newList = [];
    list.forEach((item) => {
      let fonte = item.endereco.toLowerCase();
      if (fonte.indexOf(busca) > -1) {
        newList.push(item);
      }
    });
    setFilteredList(newList);
  }, [props.buscaInput]);

  useEffect(() => {
    let busca = props.buscaSelect;
    let newList = [];
    if (busca === '0') {
      list.forEach((item) => {
        newList.push(item);
      });
    } else {
      list.forEach((item) => {
        if (parseInt(busca) === parseInt(item.categoria.codigo)) {
          newList.push(item);
        }
      });
    }
    setFilteredList(newList);
  }, [props.buscaSelect]);

  const handleShow = (id) => {
    history.push(`/imoveis/view/${id}`);
  };

  return (
    <Spring>
      {(props) => (
        <div style={props}>
          <SectionContainer>
            <Wrapper>
              {filteredList.map((property, index) => {
                return (
                  <Card key={index}>
                    <WrapperClick onClick={() => handleShow(property.codigo)}>
                      <Image src={`${property.imagem}`} />
                      <Info>
                        <Title> {property.titulo} </Title>
                        {property.descricao} <br />
                        {property.endereco} <br />
                        {property.metragem} <br />
                        {property.categoria.nome} <br />
                        <Icons>
                          <RoomIcon />
                          {property.qtdeQuarto}
                          <WCIcon />
                          {property.qtdeBanheiro}
                        </Icons>
                        <FaDollarSign />
                        {property.preco} <br />
                      </Info>
                    </WrapperClick>
                  </Card>
                );
              })}
            </Wrapper>
          </SectionContainer>
        </div>
      )}
    </Spring>
  );
};

// const SectionContainerHint = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 90%;
//   margin: auto;
//   max-width: 768px;
// `;

const WrapperClick = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #333;
`;

const SectionContainer = styled.div`

`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Card = styled.div`
  width: 400px;
  margin: 20px;
`;

const Image = styled.img`
  width: 90%;
  height: 300px;
  border-radius: 5px;
  box-shadow: 8px 8px 8px #36486b;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &:hover {
    z-index: 999;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Heading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Info = styled.div`
  font-size: 14px;
  line-height: 1.4;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
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
