import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const { produtos } = React.useContext(GlobalContext)
  return produtos === null ? null : (
    <div>
      Produtos:{' '}
      {produtos.map(produto => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  )
}

export default Produto
