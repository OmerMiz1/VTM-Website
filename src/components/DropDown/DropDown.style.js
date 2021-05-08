import styled from 'styled-components';


export const MenuContainer = styled.section`
    display: block;
    position: absolute;
    bottom: ${({bottom}) => bottom ? bottom : '0'};
    right: ${({right}) => right ? right : '0'};
    z-index: 10;
    font-size: 15px;
`;


export const MenuList = styled.ul`
    min-width: 200px;
    list-style-type: none;
    padding-left: 0;
    background-color: #eee;
    box-shadow: 0 3px 10px rgb(0 0 0 / 15%);
    border-radius: 4px;

`;

export const MenuItem = styled.li`
    
    display:flex;
    width:100%;
    list-style-type: none;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin:0;

    
    

    .icon{
        flex: 30%;
        display: grid;
        place-items: center;
        font-size: ${props=> props.theme.fontSizes.medium}; 
    }    
    }

    & p {
        flex: 70%;
        display: grid;
        place-items: left;
    }

`;

export const ItemText = styled.p`
    line-height: 1.5rem;
    font-weight: 800;
    font-size: ${props=> props.theme.fontSizes.medium}


`;

export const MenuButton = styled.button`
    opacity: 1;
    cursor: pointer;
    width: 100%;
    display: flex;
    padding: 4px 20%;
    align-items: center;
    background-color: #fff;
    border: none;

    
    &:hover {
        background-color:${props => props.theme.colors.main};
        color: #fff;
    }
`;