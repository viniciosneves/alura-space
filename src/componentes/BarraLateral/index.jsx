import ItemNavegacao from "../ItemNavegacao"
import ListaNavegacao from "../ListaNavegacao"

const BarraLateral = () => {
    return (<aside>
        <nav>
            <ListaNavegacao>
                <ItemNavegacao texto="Inicio" iconeSrc="/icones/home-ativo.png" ativo={true}/>
                <ItemNavegacao texto="Mais vistas" iconeSrc="/icones/mais-curtidas-inativo.png" />
                <ItemNavegacao texto="Mais curtidas" iconeSrc="/icones/mais-vistas-inativo.png" />
                <ItemNavegacao texto="Novas" iconeSrc="/icones/novas-inativo.png" />
                <ItemNavegacao texto="Surpreenda-me" iconeSrc="/icones/surpreenda-me-inativo.png" />
            </ListaNavegacao>
        </nav>
    </aside>)
}

export default BarraLateral