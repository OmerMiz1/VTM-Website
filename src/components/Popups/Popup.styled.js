import styled from 'styled-components';
import Icon from '../atoms/Icon';


export const ContainerPopupForm = styled.div`


    // no popup
    max-width: 250px;
    min-width: 200px;
    padding: 10px;
    top: -30px;
    right: 100px;
    position: absolute;
    z-index: 1000;
    background-color: #fff;
    border-radius: 10px;
    background-color: #cccccc;
`;

export const CloseIcon = styled(Icon)`
    right: 20px;
    position: absolute;
    font-size: 18px;
    top: 8px;
`;
export const Title = styled.h1`
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    margin-bottom: 8px;
`;