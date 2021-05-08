import styled from 'styled-components';

export const SearchBar = styled.input`
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: black;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    font-weight: bold;

`;

export const ContainerSearchBar = styled.div`
    position: absolute;
    top:10px;
    z-index:10;
    float:left;
    display:flex;


    /* top: 50%;
    left: 50%; */
    transform: translate(-100%, 0%);
    background: #bcd9e0;
    height: 40px;
    border-radius: 40px;
    padding: 0;
    &:hover {
        & .input {
            width: 240px;
            padding: 0 30px;
            font-weight: 600;

        };

        & .link {
            background: #eee;
            color: #55a1b2;
        };

    };
    
`;


export const SearcLink = styled.a`
    color: #e84118;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #55a1b2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    color: white;
    cursor: pointer;

    &:icon {
        color:white;
        font-size: 30px;
    }
   
`;
