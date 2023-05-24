import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`

const Cabecalho = ({ filtro, setFiltro }) => {
    
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto 
            value={filtro}
            onChange={event => setFiltro(event.target.value)}
            placeholder="O que você procura?"
        />
    </HeaderEstilizado>)
}

export default Cabecalho