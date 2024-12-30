import React from 'react'
import Title from './Title'
import Produto from './Produto'

const Produtos = () => {
  const produtos = [
    { id: 1, name: 'Notebook', specs: ['16gb ram', '512gb'] },
    { id: 2, name: 'Smartphone', specs: ['2gb ram', '128gb'] },
  ]
  return (
    <section>
      <Title title='Produtos' />
      {produtos.map(produto => (
        <Produto key={produto.id} {...produto} />
      ))}
    </section>
  )
}

export default Produtos
