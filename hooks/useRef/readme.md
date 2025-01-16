## useRef

Objeto com a propriedade `current`. Pode ser utilizado para guardar valores que irão persistir por todo o ciclo de vida do elemento. Geralmente é utilizado para se referir a um elemento do DOM.

```jsx
const App = () => {
  const [comentarios, setComentarios] = React.useState([])
  const [input, setInput] = React.useState('')
  const inputElement = React.useRef()

  function handleClick() {
    setComentarios([...comentarios, input])
    setInput('')
    inputElement.current.focus()
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type='text'
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}
```

O uso da referência não é restrito apenas aos elementos do DOM. Também é utilizado para guardar a referência de qualquer valor, como por exemplo o `setTimeout()`.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0)
  const [notificacao, setNotificacao] = React.useState(null)
  const timeoutRef = React.useRef()

  function handleClick() {
    setContar(contar + 1)
    setNotificacao('Obrigado por comprar')
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null)
    }, 1000)
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  )
}
```
