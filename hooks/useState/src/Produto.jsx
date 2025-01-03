import React from 'react'

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>{dados.vendido === 'true' ? 'Vendido' : `R$${dados.preco}`}</p>
    </div>
  )
}

export default Produto
