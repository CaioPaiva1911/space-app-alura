import { styled } from "styled-components"

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
    </HeaderStyled>)
}

export default Header