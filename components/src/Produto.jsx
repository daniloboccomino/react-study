import React from 'react'

const Produto = ({ name, specs }) => {
  return (
    <div>
      <p>{name}</p>
      <ul>
        {specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
