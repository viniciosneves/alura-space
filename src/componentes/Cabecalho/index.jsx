import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 24px;
    display: flex;
    justify-content: space-between;
`

const Cabecalho = () => {
    return (<HeaderEstilizado>
        <img src="/imagens/logo.png" alt="" />
        <CampoTexto placeholder="O que você procura?"/>
    </HeaderEstilizado>)
}

export default Cabecalho