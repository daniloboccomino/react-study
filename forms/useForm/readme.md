## useForm

Para otimizar a validação para vários campos input do formulário, podemos definir um custom hook que possui os `types` com suas respectivas regex.

```jsx
const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
}

const useForm = type => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function validate(value) {
    // realiza a validação para os campos dos formulários
  }

  function onChange({ target }) {
    // realiza a atualização do valor
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  }
}
```

_Obs: como o `useForm` retorna um objeto com algumas propriedades específicas, podemos utilizar o `{...props}` no componente, porém será necessários fazer ajustes no componente Input e desestruturar as propriedades específicas a serem utilizadas no componente pois o React não reconhece algumas propriedades do objeto retornado como propriedade da DOM, como por exemplo o `setValue`._

```jsx
const Input = ({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </>
  )
}
```

```jsx
const App = () => {
  return (
    <form>
      <Input
        id='cep'
        label='CEP'
        type='text'
        placeholder='00000-000'
        {...cep}
      />
      <button>Enviar</button>
    </form>
  )
}
```
