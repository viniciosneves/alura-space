import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"

const MainEstilizado = styled.main`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`

function App() {
  return (
    <MainEstilizado>
      <EstilosGlobais />
      <Cabecalho />
    </MainEstilizado>
  )
}

export default App
