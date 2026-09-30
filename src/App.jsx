import './App.css'
import './index.css'
import Cabeca from './components/Menu.jsx'
import Secao1 from './components/Section1.jsx'
import Secao2 from './components/Section2.jsx'
import Secao3 from './components/Section3.jsx'
import Secao4 from './components/Section4.jsx'
import Rodape from './components/Rodape.jsx'

function App() {
  return (
    <>
      <div className="fundo"> 
        <main>
          <Cabeca />
          <Secao1 />
          <Secao2 />
          <Secao3 />
          <Secao4 />
          <Rodape />
        </main>
      </div>
    </>
  )
}

export default App