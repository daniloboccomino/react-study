import React from 'react'

const Input = ({
  id,
  label,
  type = 'text',
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
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </>
  )
}

export default Input
