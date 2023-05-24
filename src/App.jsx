import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import { useEffect, useState } from "react"

import fotosGaleria from './fotos.json'
import Rodape from "./componentes/Rodape"

const MainEstilizado = styled.main`
  width: 1440px;
  margin: 0 auto;
  overflow-x: scroll;
`
const SectionEstilizada = styled.section`
  display: flex;
  gap: 24px;
`
const Container = styled.section`
  flex-grow: 1;
`
function App() {
  const [fotos, setFotos] = useState(fotosGaleria)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)

  useEffect(() => {
    const fotosFiltradas = fotosGaleria.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotos(fotosFiltradas)
  }, [filtro, tag])

  return (
    <>
      <MainEstilizado>
        <EstilosGlobais />
        <Cabecalho filtro={filtro} setFiltro={setFiltro} />
        <SectionEstilizada>
          <BarraLateral />
          <Container>
            <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={bannerBackground} />
            <Galeria fotos={fotos} setTag={setTag} />
          </Container>
        </SectionEstilizada>
      </MainEstilizado>
      <Rodape />
    </>
  )
}

export default App
