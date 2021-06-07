import React from 'react';

import {VeiwSummaryHeaderContainer, VeiwSummaryH1, VeiwSummaryH1Edit,
    AddContainer, InputH1,  LinksContainer, VideoLink} from '.././VeiwSummary.style';

import AttributText from '../../../../components/atoms/Texts/AttributText';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';
import {SubmitButton} from '../../../../components/atoms/Buttons/SubmitButton';
import HeaderLogic from './Header.logic';

import HeaderIconsData, { EditIcons} from './HeaderIcons.data';
import Icon from '../../../../components/atoms/Icon';
import IconContainer from '../../../../containers/IconContainer';

function HeaderSection({viewSummary, deleteSummary, updateSummary,  mode}) {

    const {titleInputRef, Title, modeToggle, updateTitle, editTitle, toggleEditTitle,
        addTagInputRef, toggleShowAddTagInput, deleteTag,
        addTag, tags, showAddTagInput} = HeaderLogic(updateSummary, mode, viewSummary);
    


    const IconData = HeaderIconsData(mode.mode, modeToggle, deleteSummary);


    return (
        <VeiwSummaryHeaderContainer>
                {
                    editTitle ?
                    <VeiwSummaryH1Edit>
                        <InputH1 ref={titleInputRef} type='text' defaultValue={Title}></InputH1>
                        <Icon margin={EditIcons.check.margin} color={ EditIcons.check.color} icon={EditIcons.check.icon} 
                        funOnClick={updateTitle}/>
                    </VeiwSummaryH1Edit>:
                    <VeiwSummaryH1 onDoubleClick= {toggleEditTitle}>{Title}</VeiwSummaryH1>
                }
                {
                    mode.mode === 'edit'  ? 
                    <Icon color={ !editTitle ? EditIcons.pen.color : EditIcons.times.color} icon={ !editTitle ? EditIcons.pen.icon : EditIcons.times.icon} 
                     funOnClick={toggleEditTitle }/>:
                     <> </>
                }
                

                <AttributText attribution='Create By'
                    textValue={viewSummary.autorName}></AttributText>
            <LinksContainer>
                <VideoLink href={viewSummary.url} target="_blank" rel="noopener noreferrer">Link to Video!</VideoLink>
                <ListOfButtonsTags>
                    {tags.map((tag, index) => {
                        return(
                            <TagsButton key={index} keyId={index} text={tag} editMode={mode.mode}
                            link={mode.mode === 'edit' ? '#' : '/myHome/mySummaries/filter/tags/' + tag }
                            fun ={() => deleteTag(viewSummary.sid, tag)} />
                        );
                    })}
                {
                    mode.mode === 'edit' &&
                    <AddContainer>
                    <Icon color={EditIcons.plus.color} icon={ showAddTagInput === 'visible' ? EditIcons.minus.icon: EditIcons.plus.icon }
                     funOnClick={toggleShowAddTagInput}/>
                     <SubmitButton visibility= {showAddTagInput} ref={addTagInputRef} 
                     placeHolder = 'Enter new tag' submitValue='Add' submitFun={() => addTag()} />
                    </AddContainer>

                }
                </ListOfButtonsTags>
                <IconContainer justContent="flex-end">
                    {IconData.map((data, index) => {
                        return(
                            <Icon key={index} margin={data.margin} funOnClick={ () => data.function(viewSummary.sid)}
                            color={data.color} icon={data.icon}/>
                        )
                    })
                    }
                </IconContainer>
            </LinksContainer>
        
        </VeiwSummaryHeaderContainer>
    )
}

export default HeaderSection
