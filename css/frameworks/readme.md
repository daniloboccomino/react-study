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
