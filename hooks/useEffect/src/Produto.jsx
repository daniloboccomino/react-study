import React from 'react'

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then(response => response.json())
        .then(json => setDados(json))
    }
  }, [produto])

  return dados === null ? null : (
    <>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </>
  )
}

export default Produto
