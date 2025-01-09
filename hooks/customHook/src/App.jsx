import React from 'react'
import useFetch from './hooks/useFetch'

const App = () => {
  const { data, loading, error, request } = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      await request('https://ranekapi.origamid.dev/json/api/produto')
    }
    fetchData()
  }, [request])

  return (
    <>
      <h1>Lista de Produtos</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {data && (
        <ul>
          {data.map(produto => (
            <li key={produto.id}>{produto.nome}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App
