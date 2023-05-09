import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

import bannerBackground from './assets/banner.png'

const MainEstilizado = styled.main`
  max-width: 100%;
  width: 1440px;
  margin: 0 auto;
`

const SectionEstilizada = styled.section`
  padding: 8px 24px;
  display: flex;
  gap: 24px;
`

function App() {
  return (
    <MainEstilizado>
      <EstilosGlobais />
      <Cabecalho />
      <SectionEstilizada>
        <BarraLateral />  
        <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={bannerBackground} />
      </SectionEstilizada>
    </MainEstilizado>
  )
}

export default App
