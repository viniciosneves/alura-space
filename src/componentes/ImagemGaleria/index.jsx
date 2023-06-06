import { styled } from "styled-components"
import BotaoIcone from "../BotaoIcone"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '288px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`
//scss

const Imagem = styled.img`
    max-width: 100%;
    border-radius: 20px 20px 0 0;
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImagemGaleria = ({ foto, aoPedirZoom, alternarFavorito, expandida = false }) => {

    

    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <Imagem src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone onClick={() => alternarFavorito(foto)}>
                    {
                        foto.favorita 
                            ? <img src="/imagens/icones/favorito_preenchido.png" alt="Icone de favorito" />
                            : <img src="/imagens/icones/favorito.png" alt="Icone de favorito preenchido" />
                    
                    }
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoPedirZoom(foto)}>
                    <img src="/imagens/icones/open.png" alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default ImagemGaleria