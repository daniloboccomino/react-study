import React from 'react'
import Produto from './Produto'

const App = () => {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal !== null) setProduto(produtoLocal)
  }, [])

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto)
  }, [produto])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <>
      <h1>
        Preferência:{' '}
        {produto !== null ? (
          produto
        ) : (
          <span
            style={{
              color: '#aaa',
              fontFamily: 'sans-serif',
              fontStyle: 'italic',
              fontSize: '1.5rem',
              fontWeight: '100',
            }}
          >
            Sem preferência
          </span>
        )}
      </h1>
      <button
        onClick={handleClick}
        style={{ marginRight: '1rem' }}
      >
        Notebook
      </button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    </>
  )
}

export default App
