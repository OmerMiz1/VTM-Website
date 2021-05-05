import React from 'react';
import {DropDownMenuData} from './DropDownSummary.data'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MenuContainer, MenuList, MenuButton,
  MenuItem, ItemText} from './DropDownSummary.style'





function DropDownSummary() {
  
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

export default DropDownSummary
