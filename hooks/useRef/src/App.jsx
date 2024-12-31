import React from 'react'

const App = () => {
  const [input, setInput] = React.useState(0)
  const inputRef = React.useRef()
  const [cart, setCart] = React.useState(0)
  const [notification, setNotification] = React.useState(null)
  const timeoutRef = React.useRef()

  function handleClickAddToCart() {
    clearTimeout(timeoutRef.current)
    setCart(cart + (input < 1 ? 0 : Number(input)))
    setNotification(`Item${input > 1 ? 's' : ''} added to cart`)
    setNotification(
      `${
        input < 1
          ? 'Amount must be greater than 1'
          : `Item${input > 1 ? 's' : ''} added to cart`
      }`
    )
    timeoutRef.current = setTimeout(() => setNotification(null), 2000)
    setInput(0)
    inputRef.current.focus()
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '1rem',
        }}
      >
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          type='number'
          value={input}
          onChange={({ target }) => setInput(target.value)}
          ref={inputRef}
          style={{ width: 'auto' }}
        />
        <button onClick={handleClickAddToCart}>Add to Cart</button>
        <div
          style={{
            border: 'var(--color) solid',
            borderRadius: 'var(--radius)',
            color: 'var(--color-dark)',
            display: 'flex',
            padding: '0.8rem 1.6rem',
          }}
        >
          <span className='material-symbols-outlined'>shopping_cart</span>
          {cart}
        </div>
      </div>
      <p>{notification}</p>
    </>
  )
}

export default App
