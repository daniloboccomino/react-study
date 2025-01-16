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
