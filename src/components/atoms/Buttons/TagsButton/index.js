import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemButtonTag = styled.li`
    display: inline-block;
    margin: ${(props) => props.theme.spacers.small};
    list-style-type: none;
    text-align: -webkit-match-parent;
`;

export const ButtonTag = styled.button`
    width: 100%;
    cursor: ${({ cursor }) => cursor === 'edit' ? 'default' : 'pointer'} ;
    padding: ${({ padding }) => padding ? padding : '5px 10px'};
    background-color: ${({ backColor }) => backColor ? backColor : '#fff'};
    color: black;
    font-size: ${({ fontSize }) => fontSize ? fontSize : '100%'};
    font-weight: 600;
    line-height: 1;
    border: 1.5px solid;
    border-color: ${(props) => props.theme.colors.gray};
    border-radius: 30px;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;

    &:hover {
        border-color: ${(props) => props.theme.colors.second};
        background-color: ${(props) => props.theme.colors.secondLite};
    }
`;

export const LinkTag = styled(Link)`
    display: block;
    color: gray;
    list-style-type: none;
    cursor: default;
`;
export const EditButton = styled.p`
    display: inherit;
    color: red;
    font-size: 10px;
    padding: 2px 2px;
    margin: 0 0px 0 10px;
    top: -6px;
    position: relative;
    border-radius: 30%;
    font-weight: 700;
    border: 1px solid gray;
    cursor: pointer;
`;

function TagsButton({ keyId, link, text, padding, fontSize, backColor, fun, editMode }) {
	return (
		<ItemButtonTag key={keyId} onClick={() => fun && !editMode ? fun(text) : NaN}>
			<LinkTag to={link}>
				<ButtonTag fontSize={fontSize} padding={padding} cursor={editMode}
					backColor={backColor} >{text}
					{
						editMode === 'edit' && <EditButton onClick={fun}>X</EditButton>
					}
				</ButtonTag>
			</LinkTag>
		</ItemButtonTag>
	)
}

export default TagsButton;
