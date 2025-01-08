# REACT

Curso de React da [Origamid](https://www.origamid.com/curso/react-completo/)

⚠️ _observação: este documento contém apenas algumas anotações e dicas do curso_

&nbsp;

### Content

- [Javascript](#javascript)
- [JSX](/jsx)
- [Components](/components)
- [Hooks](/hooks)
  - [useState](/hooks/#usestate)
  - [useEffect](/hooks/#useeffect)
  - [useRef](/hooks/#useref)
  - [useContext](/hooks/#usecontext)

&nbsp;  
&nbsp;  
&nbsp;

# JAVASCRIPT

Alguns conceitos de Javascript são muito utilziados em React, tais como:

## Destructuring

Possibilidade de desestruturar objetos e obter diretamente as propriedades deste objeto, se possuir o mesmo nome

```js
// formato convencional para propriedades do objeto event
function handleMouseMove(event) {
  const clientX = event.clientX
  const clientY = event.clientY
  console.log(clientX, clientY)
}

// desestruturar as propriedades do objeto event para constantes com o mesmo nome das propriedades
function handleMouseMove(event) {
  const { clientX, clientY } = event
  console.log(clientX, clientY)
}

// desestruturar as propriedades do objeto event como parâmetros da função
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY)
}

document.documentElement.addEventListener('mousemove', handleMouseMove)
```

É possível desestruturar arrays e os valores das novas constantes serão respectivos a ordem dos valores no array

```js
const frutas = ['Banana', 'Uva']
const [fruta1, fruta2] = frutas
// fruta1 = banana
// fruta2 = Uva

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado
  },
]
const [lados, area] = useQuadrado
// lados = 4
// area = 16
```

## Rest

Permite que uma função receba um número indefinido de parâmetros.

```js
function showList(empresa, ...clients) {
  clients.forEach(client => {
    console.log(client, empresa)
  })
}

showList('Google', 'Danilo', 'Boccomino')
```

## Spread

Permite definir um número indefinido de parâmetros para uma função, array ou objeto.

```js
// Arrays
const pares = [4, 6, 2, 8, 10]
Math.max(...pares) // 10

const numeros = [1, 3, ...pares, 5, 7, 9] // [1, 3, 4, 6, 2, 8, 10, 5, 7, 9]

// Objetos
const carro = {
  cor: 'azul',
  portas: 4,
  ano: 2020,
}

const cloneCarro = { ...carro }
const carroEsportivo = { ...carro, turbo: true }
```

## Module

Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.

```html
<!-- Só funciona em servidor, seja local ou online
Não irá funcionar se você abrir o html direto -->
<script
  type="module"
  src="./script.js"
></script>
```

```js
// quadrado.js
export function areaQuadrado(l) {
  return l * l
}

export function perimetroQuadrado(l) {
  return 4 * l
}
```

```js
// script.js
import { areaQuadrado, perimetroQuadrado } from './quadrado.js'

areaQuadrado(4)
perimetroQuadrado(5)
```

## Fetch

Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

```js
fetch('https://ranekapi.origamid.dev/json/api/produto')
  .then(response => response.json())
  .then(json => {
    console.log(json)
  })
```

## Async / Await

Fetch retorna uma promisse. É possível criarmos funções assíncronas, que irão esperar a promisse resolver, antes de continuar com o código.

```js
async function fetchProdutos(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

fetchProdutos('https://ranekapi.origamid.dev/json/api/produto')
```
