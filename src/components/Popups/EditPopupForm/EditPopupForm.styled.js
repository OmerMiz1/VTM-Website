import styled from 'styled-components';
import Icon from '../../atoms/Icon';


export const ContanerPopUpForm = styled.div`
    transform: translate(-50%, -50%);
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: #fff;
    padding: 40px;
    z-index: 1000;
`;

export const CloseIcon = styled(Icon) `
    right: 15px;
    position: absolute;
    top: 15px;
`;