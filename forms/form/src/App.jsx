import React from 'react'
import Input from './form/Input'
import TextArea from './form/TextArea'
import Select from './form/Select'
import Radio from './form/Radio'
import Checkbox from './form/Checkbox'

const App = () => {
  const [nome, setNome] = React.useState('')
  const [mensagem, setMensagem] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [termos, setTermos] = React.useState([])

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Enviar</button>
    </form>
  )
}

export default App
