import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import colors from './Theme/color'

function App() {
  return (
    <>
    <ThemeProvider theme={colors}>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
    </ThemeProvider>
    </>
  )
}

export default App
