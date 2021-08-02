import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 2px 10px;
    border-radius: 10%;
    margin: 0px 0px 10px 0px;
    font-size: 16px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
    background-color: #eee;
`

function AddButton({ children, onClickFun }) {
	return (
		<Button onClick={onClickFun}>{children}</Button>
	)
}

export default AddButton;
