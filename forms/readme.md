# FORMULARIOS

No `form` é possível definir uma função para lidar com o `onSubmit` e controlar o que acontece ao enviar o formulário. Para que o formulário seja reativo, é necessário definir o estado para o `value` e a função atualizadora para o `onChange`, para cada campo do formulário.

```jsx
const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input
        type='text'
        id='nome'
        value={nome}
        onChange={event => setNome(event.target.value)}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  )
}
```

Uma alternativa, é definir um objeto que contem todos os campos do formulário

```jsx
const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  })

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleChange({ target }) {
    const { id, value } = target
    // necessário desestruturar ...form para manter os valores antigos das outras propriedades
    // e utilizar [id] para transformar o valor de id como propriedade do objeto form
    setForm({ ...form, [id]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input
        type='text'
        id='nome'
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        id='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  )
}
```

Podemos definir um componente para cada tipo de campo do formulário. O componente pode receber parâmetros com os valores das respectivas propriedades.

```jsx
const App = () => {
  const [nome, setNome] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [termos, setTermos] = React.useState([])

  return (
    <form>
      <Input
        id='nome'
        label='Nome'
        value={nome}
        setValue={setNome}
        type='text'
      />
      <TextArea
        id='mensagem'
        label='Mensagem'
        value={mensagem}
        setValue={setMensagem}
        rows='5'
      />
      <Select
        options={['Notebook', 'Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Radio
        options={['Amarelo', 'Azul', 'Verde']}
        value={cor}
        setValue={setCor}
      />
      <Checkbox
        options={['Aceito os Termos e Condições']}
        value={termos}
        setValue={setTermos}
      />
    </form>
  )
}
```

## Input

```jsx
const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  )
}
```

## Textarea

No React o `textarea` é utilizado como um input, uma tag única sem abertura/fechamento e com o `value` para definir o seu valor interno.

```jsx
const TextArea = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  )
}
```

## Select

O `value` e `onChange` são definidos no select, e o primeiro valor como disabled e com uma string pura, assim o usuário terá que selecionar um valor. Para definir um valor inicial, coloque o mesmo no `useState`.

```jsx
const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option
        value=''
        disabled
      >
        Selecione
      </option>
      {options.map(option => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </select>
  )
}
```

## Radio

No radio comparamos o valor selecionado com o valor do input, dentro do atributo `checked`. O que retornar true irá marcar o botão.

```jsx
const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map(option => (
        <label key={option}>
          <input
            type='radio'
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  )
}
```

## Checkbox

O estado do checkbox está relacionado ao `checked`.

```jsx
const Checkbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      // necessário passar o array com os valores anteriores, e novo valor atual
      setValue([...value, target.value])
    } else {
      // se o checkbox não estiver marcado, devemos remover o item do array
      setValue(value.filter(valor => valor !== target.value))
    }
  }

  return (
    <>
      {options.map(option => (
        <label key={option}>
          <input
            type='checkbox'
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </>
  )
}
```

&nbsp;

## Validação

A validação pode ocorrer quando o campo perde o foco com a propriedade `onBlur`, e pode ser utilizado um regex. Outro momento para validar o formulário é no `onSubmit`, para impedir o envio do formulário caso exista erro no preenchimento.

```jsx
const App = () => {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value)
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validateCep(cep)) {
      console.log('Enviar')
    } else {
      console.log('Não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='CEP'
        id='cep'
        type='text'
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}
```

&nbsp;

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
