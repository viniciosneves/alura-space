import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import ImagemGaleria from "../ImagemGaleria"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SectionFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 28px;
`

const Galeria = ({ fotos = [], setTag, aoZoomSolicitado, alternarFavorito }) => {

    return (
        <>
            <Titulo>Navegue pela galeria</Titulo>
            <GaleriaContainer>
                <SectionFluida>
                    <Tags setTag={setTag}/>
                    <ImagensContainer>
                        {fotos.map(foto => <ImagemGaleria 
                            alternarFavorito={alternarFavorito}
                            aoPedirZoom={aoZoomSolicitado} 
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SectionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria