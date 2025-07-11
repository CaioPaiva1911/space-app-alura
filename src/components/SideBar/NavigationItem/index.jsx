import styled from "styled-components";

const ItemListStyled = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$active ? 'GandhinSansBold' : 'GandhiSansRegular' };
    display: flex;
    align-items: center;
    gap: 22px;
`;

const NavigationItem = ({ children, activeIcon, inactiveIcon, active = false}) => {
    return <ItemListStyled $active={active}>
        <img src={active ? activeIcon : inactiveIcon} alt="Navigation Icon" />
        {children}
    </ItemListStyled>
}

export default NavigationItem