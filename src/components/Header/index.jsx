import { styled } from "styled-components"
import TextInput from '../TextInput'


const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = () => {
    return (<HeaderStyled>
        <img src="images/logo.png" alt="Logo" />
        <TextInput />
    </HeaderStyled>)
}

export default Header