import * as c from "./style";

function InputCep({cep, handleChangeCep}) {
  return (
    <c.Container>
      <c.Title>Buscar cep</c.Title>
      <c.Input
        type="number"
        name="buscar_cep"
        placeholder="Digite seu cep"
        value={cep}
        onChange={handleChangeCep}
      />
    </c.Container>
  );
}

export default InputCep;
