import { styled } from "styled-components"

const UlEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const ListaNavegacao = ({children}) => {
    return <UlEstilizada>
        {children}
    </UlEstilizada>
}

export default ListaNavegacao