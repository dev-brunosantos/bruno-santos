import './styles/App.css'
import { Menu } from './components/Menu'
import Home from './app/home'
import Sobre from './app/sobre'
import Projetos from './app/projetos'
import Contatos from './app/contatos'
import { FooterContainer } from './components/Footer/Container'
import { CardRedes } from './components/Redes/CardRedes'

function App() {
  return (
    <>
      <Menu />
      <CardRedes />

      <main>
        <Home />
        <Sobre />
        <Projetos />
        <Contatos />
      </main>
      
      <footer>
        <FooterContainer />
      </footer>
    </>
  )
}

export default App
