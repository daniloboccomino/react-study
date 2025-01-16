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
