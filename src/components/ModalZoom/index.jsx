import styled from "styled-components"
import Image from "../Gallery/Image"
import IconButton from "../IconButton"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;    
`

const StyledDialog = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1156px;
    display: flex;
    max-width: 800px;
    background-color: #001634;
    border: none;
    border-radius: 20px;
    padding: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ photo, onClose }) => {
    return (
        <>
            {photo && <>
                <Overlay />
                <StyledDialog open={!!photo} onClose={onClose}>
                    <Image photo={photo} expanded={true}/>
                    <form method="dialog">
                        <IconButton formMethod="dialog">
                            <img src="/icones/fechar.png" alt="Icone de fechar" />
                        </IconButton>
                    </form>
                </StyledDialog>
            </>}
        </>
    )
}

export default ModalZoom