import React from 'react'
import useForm from './hooks/useForm'
import Input from './form/Input'

const App = () => {
  const nome = useForm()
  const sobrenome = useForm(null, false)
  const cep = useForm('cep')
  const email = useForm('email')

  function handleSubmit(event) {
    event.preventDefault()
    if (nome.validate() && cep.validate() && email.validate()) {
      console.log('Enviar')
    } else {
      console.log('Não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id='nome'
        label='Nome'
        {...nome}
      />
      <Input
        id='sobrenome'
        label='Sobrenome'
        {...sobrenome}
      />
      <Input
        id='cep'
        label='CEP'
        placeholder='00000-000'
        {...cep}
      />
      <Input
        id='email'
        label='Email'
        {...email}
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
