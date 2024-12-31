# HOOKS

Os Hooks são funções especiais do React que permitem controlar o estado e o ciclo de vida de componentes funcionais.

O estado de uma aplicação representa as características dela naquele momento. Por exemplo, se os dados do usuário foram carregados, ou se o botão está ativo, ou se o usuário está na página de contato e etc.

```jsx
const App = () => {
  const [ativo, setAtivo] = React.useState(true)

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  )
}
```

&nbsp;

## useState

Função que retorna um array com 2 valores:

- dado do estado atual, que pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos.
- função utilizada para modificar o estado do primeiro valor.

Não se deve modificar o estado diretamente. Utiliza-se sempre a função de atualização do estado, pois quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado serão renderizados novamente.

Não existem limites para o uso do useState. Pode-se definir diversos no mesmo componente.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0)
  const [dados, setDados] = React.useState({ nome: '', idade: '' })
  const [items, setItems] = React.useState(['Item 1', 'Item 2'])
  // Callback no estado inicial, só será executado na criação do componente
  const [ativo, setAtivo] = React.useState(() => {
    return window.localStorage.getItem('ativo')
  })

  function handleClickReativo() {
    setItems([...items, 'Novo Item'])
  }

  // Callback recebendo um parâmetro que representa o valor anterior e irá modificar o estado para o valor retornado
  function handleClickCallback() {
    setAtivo(ativo => !ativo)
  }

  return (
    <>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <button onClick={handleClickReativo}>Adicionar Item</button>
      <button onClick={handleClickCallback}>
        {ativo ? 'Ativo' : 'Inativo'}
      </button>
    </>
  )
}
```

&nbsp;

## useEffect

Função que recebe um callback que será executado durante os momentos do ciclo de vida do componente, por exemplo quando é renderizado, atualizado ou destruído.

Além da função de callback, o useEffect recebe um array de dependências como segundo parâmetro. A lista de dependências serve para informar quando o efeito deve ocorrer.

```jsx
const App = () => {
  const [contar, setContar] = React.useState(0)
  const [dados, setDados] = React.useState(null)
  // Um array vazio indica que o efeito não possui dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente.
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    // Se o fetch estivesse fora do useEffect,
    // toda vez que o componente fosse atualizado, o mesmo seria executado.
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then(response => response.json())
      .then(json => setDados(json))
  }, [])

  React.useEffect(() => {
    console.log('Toda vez que atualiza o contar')
  }, [contar])

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  )
}
```

As vezes é necessário executar um efeito sempre que um componente for desmontado. Para isso deve-se utilizar um callback no retorno do callback do efeito.

```jsx
const Produto = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event)
    }
    window.addEventListener('scroll', handleScroll)
    // Limpa o evento quando o elemento é removido do DOM
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <p style={{ height: '200vh' }}>Produto</p>
}

const App = () => {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  )
}
```

&nbsp;

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

&nbsp;
