# CSS

A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript.

```jsx
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <p className='text'>Meu site</p>
    </div>
  )
}
```

Ao importar componentes, os estilos importados nos componentes são automaticamente adicionados ao CSS final, mesmo se não utilizar o componente. Isso pode gerar conflitos de estilos e o recomendado é definir nomes únicos para os componentes e classes css com os mesmos nomes dos componentes para garantir que os seletores sejam específicos, evitando os conflitos.

&nbsp;

## CSS Modules

O CSS Modules garantem que as classes utilizada sejam sempre únicas. Para isso, basta definir o nome do arquivo css com `.module`. Ex: `Produto.module.css`. Também é necessário definir um nome para a importação, que será transformada em um objeto que possui nomes únicos para as classes.

```jsx
import styles from './Produto.module.css'

const Produto = () => {
  return (
    <div>
      <h1 className={styles.tituloPrincipal}>Notebook</h1>
      <p className={styles.preco}>R$2000</p>
      <button>Comprar</button>
    </div>
  )
}
```

Também é recomendado utilizar camelCase `tituloPrincipal`, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens `titulo-principal`.

```css
.tituloPrincipal {
  color: #43c;
}

.preco {
  font-weight: bold;
}
```

&nbsp;

## **Styled Components**

Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único. O `styled` é um objeto com diferentes métodos que representam as tags de HTML.

### **Instalação**

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

&nbsp;

## CSS Frameworks

React permite adicionar qualquer framework de css, como por exemplo o Bootstrap. Bastar executar o comando `npm install bootstrap` e importar as dependências no projeto.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

```jsx
const App = () => {
  return (
    <div
      className='card bg-dark text-white m-5'
      style={{ maxWidth: '18rem' }}
    >
      <div className='card-header'>Notebook</div>
      <div className='card-body'>
        <h5 className='card-title'>R$ 2500</h5>
        <p className='card-text'>
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </p>
      </div>
    </div>
  )
}
```

Existem frameworks de CSS que te fornecem componentes prontos para serem utilizados. O `react-bootstrap` utiliza em sua base o bootstrap, mas fornece componentes React. A instalação é similar ao Bootstrap: `npm install react-bootstrap bootstrap`.

```jsx
import Card from 'react-bootstrap/Card'

const App = () => {
  return (
    <Card
      bg='dark'
      text='white'
      style={{ maxWidth: '18rem' }}
      className='m-5'
    >
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
```

&nbsp;

## SVG

Um svg pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo.

```jsx
import Dog from './img/dog.svg'

const App = () => {
  return (
    <>
      <Dog />
    </>
  )
}
```

Além da importação direto como componentes, podemos também definirmos cada SVG como um componente. Lembre-se, propriedades que tiverem hífens serão modificadas: `fill-rule` vira `fillRule`.

```jsx
const DogSvg = ({ color }) => {
  return (
    <svg
      width='28'
      height='22'
      viewBox='0 0 28 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z'
        fill={color}
      />
      <circle
        cx='21'
        cy='3'
        r='3'
        fill={color}
      />
      <circle
        cx='7'
        cy='3'
        r='3'
        fill={color}
      />
    </svg>
  )
}
```
