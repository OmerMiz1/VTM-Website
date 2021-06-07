import React from 'react';
import DropDownSummaryData from './DropDownUser.data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	MenuContainer, MenuList, MenuButton,
	MenuItem, ItemText
} from '../DropDown.style';


function DropDownUser({ close }) {

	return (
		<MenuContainer bottom='-94px' right='-30px'>
			<MenuList>
				{
					DropDownSummaryData().map((item, index) => {
						return (
							<MenuItem key={index}>
								<MenuButton onClick={() => {
									item.function(item.title);
									close();
								}}>
									<FontAwesomeIcon className='icon' icon={item.icon} />
									<ItemText>{item.title}</ItemText>
								</MenuButton>
							</MenuItem>
						)
					})
				}
			</MenuList>
		</MenuContainer>
	);
}

export default DropDownUser;
