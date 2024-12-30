import React from 'react'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos'

const App = () => {
  let Page = Home
  const { pathname } = window.location
  switch (pathname.slice(1)) {
    case 'produtos':
      Page = Produtos
  }
  return (
    <>
      <Header />
      <Page />
    </>
  )
}

export default App
