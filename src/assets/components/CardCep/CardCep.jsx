import * as c from './style'

function CardCep({rua, correio, bairro, uf, localidade}) {
  return (
    <c.Wrapper>
        <c.P>Logradouro: {rua} </c.P>
        <c.P>Cep: {correio} </c.P>
        <c.P>Bairro: {bairro}</c.P>
        <c.P>Cidade: {localidade}</c.P>
        <c.P>Estado: {uf}</c.P>
    </c.Wrapper>
  )
}

export default CardCep