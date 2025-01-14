import React from 'react'

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

export default Checkbox
