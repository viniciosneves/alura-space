import ItemNavegacao from "../ItemNavegacao"
import ListaNavegacao from "../ListaNavegacao"

const BarraLateral = () => {
    return (<aside>
        <nav>
            <ListaNavegacao>
                <ItemNavegacao texto="Inicio" iconeSrc="/imagens/icones/home-ativo.png" ativo={true}/>
                <ItemNavegacao texto="Mais vistas" iconeSrc="/imagens/icones/mais-curtidas-inativo.png" />
                <ItemNavegacao texto="Mais curtidas" iconeSrc="/imagens/icones/mais-vistas-inativo.png" />
                <ItemNavegacao texto="Novas" iconeSrc="/imagens/icones/novas-inativo.png" />
                <ItemNavegacao texto="Surpreenda-me" iconeSrc="/imagens/icones/surpreenda-me-inativo.png" />
            </ListaNavegacao>
        </nav>
    </aside>)
}

export default BarraLateral