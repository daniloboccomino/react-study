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
