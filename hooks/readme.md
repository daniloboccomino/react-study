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

## Regras

Não utilizar os hooks dentro de funções, loops ou condicionais, pois é criado um novo contexto e o React perde a referência de qual é o hook. Deve estar no primeiro nível do componente ou um custom hook.
