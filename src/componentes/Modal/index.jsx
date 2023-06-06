import { styled } from "styled-components"
import ImagemGaleria from "../ImagemGaleria"
import BotaoIcone from "../BotaoIcone"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 20%;
    background: transparent;
    padding: 0;
    border: 0;
    width: 90%;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`


const Modal = ({ foto, aberta, aoFecharModal, alternarFavorito }) => {

    return (
        <>
            {aberta && <Overlay />}
            <DialogEstilizado open={aberta} onClose={aoFecharModal}>
                {aberta && <>
                    <ImagemGaleria foto={foto} expandida={true} alternarFavorito={alternarFavorito}/>
                    <form method="dialog">
                        <BotaoIcone formMethod="dialog">
                            <img src="/imagens/icones/close.png" alt="Icone de fechar" />
                        </BotaoIcone>
                    </form>
                </>}
            </DialogEstilizado>
        </>
    )
}

export default Modal