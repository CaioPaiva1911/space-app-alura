import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

const SideBar = () => { 
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem 
                        activeIcon="/icones/home-ativo.png"
                        inactiveIcon="/icones/home-inativo.png"
                        active={true}
                    >
                        Home
                    </NavigationItem>
                    <NavigationItem
                        activeIcon="/icones/mais-vistas-ativo.png"
                        inactiveIcon="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </NavigationItem>
                    <NavigationItem
                        activeIcon="/icones/mais-curtidas-ativo.png"
                        inactiveIcon="/icones/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </NavigationItem>
                    <NavigationItem
                        activeIcon="/icones/surpreenda-me-ativo.png"
                        inactiveIcon="/icones/surpreenda-me-inativo.png"
                    >
                       Surpreenda-me
                    </NavigationItem>
                </StyledList>
            </nav>
        </aside>
    )
}

export default SideBar