import React from 'react';
import {DropDownMenuData} from './DropDownMenu.data'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MenuContainer, MenuList, MenuButton,
  MenuItem, ItemText} from './DropDownMenu.style'





function DropDownMenu() {
  
    return (
        <MenuContainer>
          <MenuList>
            {DropDownMenuData.map((item, index) => {
              return(
                <MenuItem key={index}>
                  <MenuButton>
                    <FontAwesomeIcon  className='icon' icon={item.icon}/>
                    <ItemText>{item.title}</ItemText>
                  </MenuButton>
                </MenuItem>
              )
            })}

          </MenuList>
          
      </MenuContainer>
    )
}

export default DropDownMenu
