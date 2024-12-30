# COMPONENTES

O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo.

```jsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header />
      <p>Esse é o meu aplicativo</p>
      <Footer />
    </div>
  )
}

export default App
```

```jsx
import React from 'react'

const Header = () => {
  return (
    <header>
      <a href='./'>Marca</a>
      <nav>
        <a href='./'>Link 1</a>
        <a href='./'>Link 2</a>
      </nav>
    </header>
  )
}

export default Header
```

```jsx
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <p>Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
```

&nbsp;  
Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.

```jsx
import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <p>
        <label htmlFor='nome'>Nome</label>
        <Input />
      </p>
      <p>
        <label htmlFor='email'>Email</label>
        <Input />
      </p>
      <Button />
    </form>
  )
}

export default Form
```

```jsx
import React from 'react'

const Input = () => {
  return <input type='text' />
}

export default Input
```

```jsx
import React from 'react'

const Button = () => {
  return <button>Enviar</button>
}

export default Button
```

&nbsp;

## Return

Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX

```jsx
const Teste = () => {
  const active = true
  if (active) {
    return <p>Ativo</p>
  } else {
    return null
  }
}
```

### React Fragment

O `return` deve ser um elemento único. Caso seja necessário retornar mais de um elemento, deve-se envolve os elementos em uma `div` ou dentro do `<React.Fragment></React.Fragment>` ou `<></>`.

```jsx
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  )
}
```

ou

```jsx
const App = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  )
}
```

&nbsp;

## Propriedades

Assim como uma função pode receber argumentos, os componentes também podem receber argumentos. Esses são conhecidos como propriedades ou props.

```jsx
const Input = props => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type='text'
      />
    </div>
  )
}

const App = () => {
  return (
    <form>
      <Input
        id='nome'
        label='Nome'
      />
      <Input
        id='sobrenome'
        label='Sobrenome'
      />
    </form>
  )
}
```

É comum desestruturar as propriedades e utilizar o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

```jsx
const Input = ({ id, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type='text'
        {...props}
      />
    </div>
  )
}

const App = () => {
  return (
    <form>
      <Input
        id='email'
        label='Email'
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
      />
    </form>
  )
}
```

_Neste exemplo, a props `type="password"` passada como propriedade do componente `<Input />` sobrescreverá o valor da propriedade `type` da tag html `<input />`_

### Children

É possível utilizar o componente abrindo e fechando o mesmo, e o conteúdo interno deste será acessado através da propriedade `props.children`.

```jsx
const Input = ({ id, label, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type='text'
        {...props}
      />
    </div>
  )
}

const Form = ({ children }) => {
  return <form>{children}</form>
}

const App = () => {
  return (
    <Form>
      <Input
        id='email'
        label='Email'
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
      />
    </Form>
  )
}
```
