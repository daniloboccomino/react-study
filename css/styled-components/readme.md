## [Styled Components](https://styled-components.com/)

Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único. O `styled` é um objeto com diferentes métodos que representam as tags de HTML.

### Instalação

1. `npm install styled-components`
2. Plugin de VS Code: vscode-styled-components

```jsx
import styled from 'styled-components'

const ProdutosContainer = styled.div`
  display: flex;
`

const Produto = styled.div`
  flex: 1;
`

const Titulo = styled.h1`
  font-size: 2em;
`

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`

const App = () => {
  return (
    <ProdutosContainer>
      <Produto>
        <Titulo>
          Notebook <Preco>R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
    </ProdutosContainer>
  )
}
```

Também é possível passar estado e propriedades para o styled component.

```jsx
const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  color: ${props => props.cor};
`

const App = () => {
  const [ativo, setAtivo] = React.useState(false)

  return (
    <Button
      ativo={ativo}
      cor='#fff'
      onClick={() => setAtivo(!ativo)}
    >
      Ativar
    </Button>
  )
}
```
