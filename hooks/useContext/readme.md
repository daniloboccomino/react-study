## useContext

### createContext

O contexto permite passar dados a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos globais, como por exemplo dados do usuário logado.

### Provider

O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada `value`, que recebe os dados do contexto.

### useContext

O `useContext` é o hook que deve ser utilizado para consumir o contexto e ter acesso aos dados de `value`. Recebe o contexto criado como argumento.

### GlobalStorage

Utilizado para ter todos os estados e funções globais do contexto, retornando o `GlobalContext.Provider`. É possível passar qualquer coisa no value do context, incluindo estados e funções do `useState`.

```jsx
import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0)

  function adicionar() {
    setCarrinho(carrinho => carrinho + 1)
  }

  return (
    <GlobalContext.Provider value={{ carrinho, adicionar }}>
      {children}
    </GlobalContext.Provider>
  )
}
```

```jsx
import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext)

  function handleClick() {
    global.setCarrinho(carrinho => carrinho + 1)
  }

  return (
    <>
      <p>Total: {global.carrinho}</p>
      <button onClick={() => global.adiconar()}>Adicionar</button>
    </>
  )
}

export default Produto
```

```jsx
import React from 'react'
import Produto from './Produto'
import { GlobalStorage } from './GlobalContext'

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App
```
