import React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'remover':
      return state.filter(item => item !== action.content)
    case 'adicionar':
      return [...state, action.content]
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Item 1'])

  return (
    <div>
      <button onClick={() => dispatch({ type: 'remover', content: 'Item 1' })}>
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'adicionar', content: 'Item 2' })}
      >
        +
      </button>
      <p>{state}</p>
    </div>
  )
}

export default App
