# JSX

JavaScript XML / Extension. Estende a sintaxe do JavaScript, introduzindo elementos como XML que são convertidos em funções de React.

Exemplo:

```jsx
const App = () => {
  return <button id='btn'>Comprar</button>
}
```

_O `return` da função deve sempre ser um elemento único_

Transformado em:

```jsx
const App = () => {
  return React.createElement('button', { id: 'btn' }, 'Comprar')
}
```

&nbsp;

## Atributos

Atributos podem ser passados como no HTML.

```jsx
const App = () => {
  return (
    <a
      href='https://www.origamid.com'
      title='Site Origamid'
    >
      Origamid
    </a>
  )
}
```

Alguns casos podem ser diferentes do atributos convencionais do HTML. Pelo fato de `class` ser uma palavra reservada do JavaScript, o JSX resolveu mudar o nome para `className` para evitar conflitos.

```jsx
const App = () => {
  return <div className='grid'>Origamid</div>
}
```

Outro caso em que o atributo no JSX pode ser diferente, é a utilização do _camelCase_ quando temos mais de uma palavra no atributo HTML.

```jsx
const App = () => {
  return (
    <form>
      <label htmlFor='nome'>Nome</label>
      <input
        type='text'
        id='nome'
      />
    </form>
  )
}
```

https://reactjs.org/docs/dom-elements.html

&nbsp;

## **Expressões / Variáveis**

Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves `{}`.

```jsx
const App = () => {
  const nome = 'Danilo'
  const ativo = true
  const preco = 250
  const desconto = 50

  return (
    <div>
      <p className={ativo ? 'ativo' : 'inativo'}>{nome}</p>
      <p>{preco - desconto}</p>
    </div>
  )
}
```

&nbsp;

## **JSX Expressões**

Pode-se executar qualquer expressão dentro das chaves `{}`. Se o resultado da expressão for um número, string ou array de números/strings, o resultado irá aparecer na tela. Booleanos (true/false), undefined e null não irão resultar em nada na tela. Objetos irão retornar um erro.

```jsx
const App = () => {
  function meuNome() {
    return 'Danilo'
  }

  function quadrado(x) {
    return x * x
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  }

  return (
    <div>
      <p>{'MINHA EMPRESA'.toLowerCase()}</p>
      <p>{30 * 2}</p>
      <p>{true}</p>
      <p>{undefined}</p>
      <p>{(() => 'Função Executada')()}</p>
      <p>{meuNome()}</p>
      <p>{quadrado(2)}</p>
      <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
      <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
      <p>{Date.now()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>
        Marca: {carro.marca}, Rodas: {carro.rodas}
      </p>
    </div>
  )
}
```

&nbsp;

## **Style**

O style recebe um objeto com as propriedades do elemento em _camelCase_.

```jsx
const App = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  }

  return (
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>
    </div>
  )
}
```

&nbsp;

## JSX Arrays

O JSX lista cada um dos itens da array. É comum usar o `map` direto na array como uma expressão, retornando um elemento para cada item novo da Array. O JSX necessita de uma `key` única para cada elemento da Array. https://reactjs.org/docs/lists-and-keys.html

```jsx
const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight']

  return (
    <ul>
      {filmes.map(filme => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  )
}
```

### **Array de Objetos**

```jsx
const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ]

  return (
    <ul>
      {livros
        .filter(livro => livro.ano >= 1998)
        .map(livro => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul>
  )
}
```
