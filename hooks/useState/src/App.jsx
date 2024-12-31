import React from 'react'
import Produto from './Produto'

const App = () => {
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClickCarregarProduto(event) {
    setLoading(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )
    const json = await response.json()
    setDados(json)
    setLoading(false)
  }

  return (
    <>
      <button onClick={handleClickCarregarProduto}>Notebook</button>
      <button onClick={handleClickCarregarProduto}>Smartphone</button>
      <button onClick={handleClickCarregarProduto}>Tablet</button>
      {loading && <p>Carregando ...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </>
  )
}

export default App
