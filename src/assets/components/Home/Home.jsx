import { useEffect, useState } from "react";
import CardCep from "../CardCep/CardCep";
import InputCep from "../InputCep/InputCep";
import * as c from "./style";

function Home() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState([]);

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const getCep = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCepData(data);
    setCep("");
    console.log(data);
  };

  useEffect(() => {
    if (cep.length === 8) {
      getCep(url);
    }
  }, [cep, url]);

  const handleChangeCep = (e) => {
    setCep(e.target.value);
  };
  return (
    <c.ContainerHome>
      <InputCep cep={cep} handleChangeCep={handleChangeCep} />
      <c.Titleh2>Endereço enontrado: </c.Titleh2>

      <CardCep
        rua={cepData.logradouro}
        correio={cepData.cep}
        bairro={cepData.bairro}
        localidade= {cepData.localidade}
        uf={cepData.uf}
      />
    </c.ContainerHome>
  );
}

export default Home;
