import { styled } from "styled-components"

const ItemEstilizado = styled.li`
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    gap: 22px;
    margin-bottom: 30px;
`

const ItemNavegacao = ({texto, iconeSrc, ativo = false}) => {
    return <ItemEstilizado $ativo={ativo}>
        <img src={iconeSrc}/>
        {texto}
    </ItemEstilizado>
}

export default ItemNavegacao