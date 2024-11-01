import Header from './components/UI/organisms/Header'
import GlobalStyle, { Container } from './styles'
import { ItensMenu } from './data/Menu'
import { MouseEvent, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import HeaderBlack from './components/themes/HeaderBlack'
import HeaderBlue from './components/themes/HeaderBlue'
import Main from './components/UI/organisms/Main'
import React from 'react'

function App() {
  const [temaDark, setTemaDark] = useState(true)
  const [textoButton, setTextoButton] = useState('Alterar cor Header')

  useEffect(() => {
    if (!temaDark) {
      setTextoButton('Alterar cor Header novamente')
    }
  }, [temaDark])

  return (
    <ThemeProvider theme={temaDark ? HeaderBlack : HeaderBlue}>
      <Container>
        <GlobalStyle />
        <Header itensMenu={ItensMenu} />
        <button
          onClick={(e: MouseEvent<HTMLButtonElement>) => setTemaDark(!temaDark)}
        >
          {textoButton}
        </button>
        <Main />
      </Container>
    </ThemeProvider>
  )
}

export default App
