import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

import bannerBackground from './assets/banner.png'
import Galeria from "./componentes/Galeria"
import { useEffect, useState } from "react"

import fotosGaleria from './fotos.json'
import Modal from "./componentes/Modal"
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
  const [fotoComZoom, setFotoComZoom] = useState(null)


  useEffect(() => {
    const fotosFiltradas = fotosGaleria.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotos(fotosFiltradas)
  }, [filtro, tag])
  const [modalAberta, setModalAberta] = useState(false)

  const aoFecharModal = () => {
    setModalAberta(false)
    const element = document.getElementById(`foto-${fotoComZoom.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setFotoComZoom(null)
  }

  const abrirModal = (foto) => {
    setModalAberta(true)
    setFotoComZoom(foto)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const alternarFavorito = (foto) => {
    setFotos(fotos.map(f => {
      if (foto.id === fotoComZoom?.id) {
        setFotoComZoom({
          ...fotoComZoom,
          favorita: !fotoComZoom.favorita
        })
      }
      return {
        ...f,
        favorita: f.id === foto.id ? !f.favorita : f.favorita
      }
    }));

  };


  return (
    <>
      <MainEstilizado>
        <EstilosGlobais />
        <Cabecalho filtro={filtro} setFiltro={setFiltro} />
        <SectionEstilizada>
          <BarraLateral />
          <Container>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
              alternarFavorito={alternarFavorito}
              aoZoomSolicitado={abrirModal}
              fotos={fotos}
              setTag={setTag}
            />
          </Container>
        </SectionEstilizada>
      </MainEstilizado>
      <Rodape />
      <Modal
        aberta={modalAberta && fotoComZoom}
        foto={fotoComZoom}
        aoFecharModal={aoFecharModal}
        alternarFavorito={alternarFavorito}
      />
    </>
  )
}

export default App
