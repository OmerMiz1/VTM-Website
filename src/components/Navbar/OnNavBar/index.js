import React, { useContext } from 'react';
import BrandLogo from '../../BrandLogo';
import NavbarLogic from '../Navbar.logic';
import SearchNavBar from '../SearchNavBar';
import DropDownUser from '../../DropDown/DropDownUser';
import OnNavBarLogic from './OnNavBar.logic';

import {
	NavbarSection, NavLogoContainer, LineSeparator,
	NavLeftList, NavRightList, NavItem, NavLink
} from '../Navbar.style';

import OnNavBarData, { DataLeftLinks } from './OnNavBar.data';
import ToolTip from '../../ToolTip';
import { UserContext } from '../../../utils/context/UserContext';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddForm from '../../atoms/forms/AddForm'; //DELETEME


function NavBar({ usetransparent, PositionMarker, setFilterText }) {
	const { clickedOnMenu, closeMobileMenu } = NavbarLogic()
	const { isUserDropDown, toggleUserDropDown, useOutsideCloseMenu,
		wrapperRef } = OnNavBarLogic();
	const { DataIcons, showForm, toggleShow } = OnNavBarData();
	const { userAttributes } = useContext(UserContext);

	useOutsideCloseMenu(wrapperRef);


	return (
		<NavbarSection usetransparent={usetransparent}>
			<NavLogoContainer onClick={closeMobileMenu}>
				<BrandLogo size={40} color={usetransparent ? '#fff' : 'black'}></BrandLogo>
			</NavLogoContainer>

			<NavLeftList active={clickedOnMenu}>
				{
					DataLeftLinks(PositionMarker).map((item, index) => {
						return (
							<NavItem key={index}>
								<NavLink onClick={closeMobileMenu} to={item.link} border={item.border}
									usetransparent={usetransparent}>{item.title}</NavLink>
							</NavItem>
						)
					})
				}
			</NavLeftList>

			<NavRightList position='end' width='auto'>
				<NavItem>
					<SearchNavBar setFilterText={setFilterText} />
				</NavItem>

				{
					DataIcons.map((item, index) => {
						return (
							<NavItem key={index}>
								<ToolTip toolTipText={item.toolTipText}>
									{item.separator ?
										<LineSeparator ref={wrapperRef}>
											<FontAwesomeIcon onClick={toggleUserDropDown} icon={item.icon} />
											{isUserDropDown && <DropDownUser close={toggleUserDropDown} />}
										</LineSeparator> :
										<>
											<FontAwesomeIcon onClick={() => item.function()} icon={item.icon} />
											{item.toolTipText === 'Add' && showForm && <AddForm close={toggleShow} 
											authorName={userAttributes.username}/>}
										</>
									}
								</ToolTip>
							</NavItem>
						);
					})
				}
			</NavRightList>
		</NavbarSection>
	);
}

export default NavBar;

