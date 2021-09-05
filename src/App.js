import { useEffect } from 'react'
import styled from 'styled-components'
// Components
import Main from './views/main/index'
import Header from './components/uikit/Header'
// Utils
import { vkInit } from './utils/api'

const App = () => {
  useEffect(() => {
    vkInit()
  }, [])

  return (
    <Container>
      <Header />
      <Main />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 196px;
`

export default App

