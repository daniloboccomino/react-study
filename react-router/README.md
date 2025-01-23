# [React Router](https://reactrouter.com/)

É uma extensão que permite gerenciarmos as rotas do React. `npm install react-router-dom`. Essa extensão possui alguns componentes para definir as rotas e elementos.

O `BrowserRouter` deve ser o componente pai que envolve tudo que depender do react-router. O `Routes` define a área em que vamos colocar os nossos `Route`. O `Route` recebe um caminho em `path`, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de `element={}`. No `path` é possível definir `*` que renderiza um elemento para todas as rotas que não foram definidas em path.

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contato from './Contato'
import Sobre from './Sobre'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='sobre'
          element={<Sobre />}
        />
        <Route
          path='contato'
          element={<Contato />}
        />
        <Route
          path='*'
          element={<Error404 />}
        />
      </Routes>
    </BrowserRouter>
  )
}
```

O `Link` irá modificar a rota e renderizar o novo componente sem recarregar a página.

```jsx
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='sobre'>Sobre</Link>
      <Link to='contato'>Contato</Link>
    </nav>
  )
}
```

```jsx
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}
```

O `NavLink` funciona da mesma forma que o `Link`, mas adiciona uma classe `active` ao link da página que estiver ativa no momento. Por conta da página Home possuir apenas um `/` no `to`, é necessário colocar a propriedade `end`.

```jsx
// possibilidade de importar um css com a regra .active { ... } para estilizar o link ativo no momento, por conta do NavLink
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink
        to='/'
        end
      >
        Home
      </NavLink>
      <NavLink to='sobre'>Sobre</NavLink>
      <NavLink to='contato'>Contato</NavLink>
    </nav>
  )
}
```

O hook `useNavigate` permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.

```jsx
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  function handleClick() {
    console.log('Faz o login')
    navigate('/sobre')
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}
```

O uso de `:id` irá definir uma rota dinâmica, onde o `id` poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como `produto/notebook` ou `produto/smartphone`. O hook `useParams` terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro. O hook `useLocation` retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.

```jsx
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='produto/:id/*'
          element={<Produto />}
        />
      </Routes>
    </BrowserRouter>
  )
}
```

```jsx
import { useParams } from 'react-router-dom'

const Produto = () => {
  const params = useParams()
  const location = useLocation()
  const search = new URLSearchParams(location.search) // devolve os parametros de busca da URL que estão após o `?`

  return (
    <div>
      <h1>Produto</h1>
      <p>id: {params.id}</p>
    </div>
  )
}
```

## **Head**

React não tem acesso direto as tags e informações do `<head>`. Porém com o uso de rotas, podemos fazer isso através de um componente ou custom hook.

```jsx
const Head = props => {
  React.useEffect(() => {
    document.title = props.title
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description)
  }, [props])

  return <></>
}
```

```jsx
import Head from './Head'

const Home = () => {
  return (
    <div>
      <Head
        title='Página Home'
        description='Descrição da home'
      />
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  )
}
```

### [Helmet](https://github.com/nfl/react-helmet)

Extensão que retorna um componente que pode definir tags do `<head>` dentro do mesmo. `npm install react-helmet`.

```jsx
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Página Home</title>
        <meta
          name='description'
          content='Conteúdo da descrição'
        />
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  )
}
```
