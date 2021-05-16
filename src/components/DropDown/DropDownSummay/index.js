import React from 'react';
import DropDownSummaryData from './DropDownSummary.data'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MenuContainer, MenuList, MenuButton,
  MenuItem, ItemText} from '../DropDown.style';

function DropDownSummary(props) {
    const summaryId = props.summaryId;

 

    return (
       <MenuContainer bottom='95px' right='10px'>
          <MenuList>
              {DropDownSummaryData().map((item, index) => {
                return(
                  <MenuItem key={index}>
                    <MenuButton onClick={ () => item.function(summaryId)}>
                      <FontAwesomeIcon className='icon' icon={item.icon}/>
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
