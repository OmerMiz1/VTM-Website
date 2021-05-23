import React, {useState, useRef} from 'react';

import {VeiwSummaryHeaderContainer, VeiwSummaryH1, VeiwSummaryH1Edit,
    InputAddTag, AddContainer, InputH1,  LinksContainer, VideoLink} from '.././VeiwSummary.style';

import AttributText from '../../../../components/atoms/Texts/AttributText';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';

import HeaderLogic from './Header.logic';

import HeaderIconsData, { EditIcons} from './HeaderIcons.data';
import Icon from '../../../../components/atoms/Icon';
import IconContainer from '../../../../containers/IconContainer';

function HeaderSection({viewSummary, updateSummary,  mode}) {

    const {titleInputRef, Title, modeToggle, updateTitle, editTitle,  toggleEditTitle} = HeaderLogic(updateSummary, mode, viewSummary)

    const IconData = HeaderIconsData(mode.mode, modeToggle);


    const [tags, setTags] = useState(viewSummary.tags);

    const deleteTag = (id, myTag) => {
        console.log(`delet id: `,id , ' and tag -> ' , myTag);
        const newTags = tags.filter(tag => tag !== myTag );
        setTags(newTags);
    }

    const addTag = (newTag) => {
        if (!tags.includes(newTag)) {
            const newTags = [... tags , newTag];
            setTags(newTags);
        }
    }



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
                            fun ={() => deleteTag(viewSummary.id, tag)} />
                        );
                    })}
                {
                    mode.mode === 'edit' &&
                    <AddContainer>
                    <Icon color={ EditIcons.plus.color} icon={ EditIcons.plus.icon}
                     funOnClick={() => addTag("neew")}/>
                     <InputAddTag type="text" placeholder="fasdfa"></InputAddTag>
                     <input value="Add" type="submit"></input>
                    </AddContainer>

                }
                </ListOfButtonsTags>
                <IconContainer justContent="flex-end">
                    {IconData.map((data, index) => {
                        return(
                            <Icon key={index} margin={data.margin} funOnClick={ () => data.function(data.title)}
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
