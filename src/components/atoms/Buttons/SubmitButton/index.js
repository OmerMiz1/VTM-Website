import styled from 'styled-components';
import React from 'react';

const InputAddTag = styled.input`
    display: block;
    position:absolute;
    top:45px;
    right:0;
    font-weight:700;
    
`;

const InputContainer = styled.div`
    visibility: ${({ visibility }) => visibility ? visibility : 'visible'};
`;
const SubmitInput = styled.input`
    display: block;
    position:absolute;
    background: #578457;
    color: white;
    border: 0;
    -webkit-appearance: none;
    cursor :pointer;    
`;


export const SubmitButton = React.forwardRef(({ visibility,
	submitFun, submitValue, placeHolder }, ref) => {
	return (
		<InputContainer visibility={visibility}>
			<InputAddTag ref={ref} type="text" placeholder={placeHolder}></InputAddTag>
			<SubmitInput value={submitValue} type="submit" onClick={submitFun}></SubmitInput>
		</InputContainer>
	)
})


