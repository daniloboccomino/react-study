## Custom Hooks

Todo custom hook deve começar com a palavra `use`, como por exemplo: `useNomeDoHook`. O hook é uma função que possui outros hooks e retorna algo dessa função, e não um elemento React. O retorno deste hook pode ser um valor único, um array ou um objeto.

```jsx
const useLocalStorage = (key, initial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key)
    return local ? local : initial
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export default useLocalStorage
```

```jsx
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}
```
