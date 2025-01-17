## useReducer

Serve para lidar com estados que possuam funções fixas responsáveis por modificar o mesmo.

```jsx
// Exemplo sem o useReducer
const App = () => {
  const [contar, setContar] = React.useState(0)

  function aumentar() {
    setContar(contar + 1)
  }

  function reduzir() {
    setContar(contar - 1)
  }

  return (
    <div>
      <button onClick={aumentar}>+</button>
      <button onClick={reduzir}>-</button>
      <p>{contar}</p>
    </div>
  )
}
```

O useReducer() recebe dois parâmetros:

- Função redutora responsável por atualizar o estado.
- Estado inicial.

O retorno do useReducer é um array com 2 valores:

- O estado atualizado.
- Função chamada de `dispatch`, que manda para o reducer as ações definidas que irão atualizar o estado.

```jsx
// Exemplo com o useReducer
function reducer(state, action) {
  // o retorno desta função será o novo estado
  switch (action) {
    case 'aumentar':
      return state + 1
    case 'reduzir':
      return state - 1
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, 0)

  return (
    <div>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('reduzir')}>-</button>
      <p>{state}</p>
    </div>
  )
}
```
