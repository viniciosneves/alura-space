import { styled } from "styled-components"

const Figure = styled.figure`
    max-width: 288px;
    margin: 0;
    display: flex;
    flex-direction: column;
    figcaption {
        background-color: #04244F;
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
    img {
        margin-left: 12px;
    }
`

const ImagemGaleria = ({ foto }) => {
    return (<Figure>
        <Imagem src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <img src="/imagens/icones/favorito.png" alt="Icone de favorito" />
                <img src="/imagens/icones/open.png" alt="Icone de expandir" />
            </Rodape>
        </figcaption>
    </Figure>)
}

export default ImagemGaleria