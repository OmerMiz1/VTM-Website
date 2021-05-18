import React, {useState, useRef} from 'react';

import {VeiwSummaryHeaderContainer, VeiwSummaryH1, VeiwSummaryH1Edit,
    InputH1,  LinksContainer, VideoLink} from '.././VeiwSummary.style';

import AttributText from '../../../../components/atoms/Texts/AttributText';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';

import HeaderIconsData, { EditIcons} from './HeaderIcons.data';
import Icon from '../../../../components/atoms/Icon';
import IconContainer from '../../../../containers/IconContainer';

function HeaderSection({viewSummary, editSummary,  mode}) {

    //TODO FIX THIS (PUT ON LOGIC!)

    const titleInput = useRef();

    const [editTitle, setEditTitle] = useState(false);
    const [Title, setTitle] = useState(viewSummary.title);

    const toggleEditTitle = () => {
        if (mode.mode === 'edit') {
            setEditTitle(!editTitle);
        }
    }

    const modeToggle =  () => {
        setEditTitle(false);
        mode.toggleMode();
    }

    const updateTitle = () =>  {
        console.log(`upadate!!!`, titleInput.current.value);
        setTitle(titleInput.current.value);
        // send the change!!!
        let copySummary = {...viewSummary};
        console.log(`copySummary`, copySummary);
        copySummary.title = titleInput.current.value;
        console.log(`copySummary2 --> `, copySummary);



        editSummary(viewSummary.id, copySummary );
        setEditTitle(false);           
    }

    const IconData = HeaderIconsData(mode.mode, modeToggle);


    return (
        <VeiwSummaryHeaderContainer>
                {
                    editTitle ?
                    <VeiwSummaryH1Edit>
                        <InputH1 ref={titleInput} type='text' defaultValue={Title}></InputH1>
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
                    {viewSummary.tags.map((tag, index) => {
                        return(
                            <TagsButton key={index} keyId={index} text={tag} editMode={mode.mode}
                            link={mode.mode === 'edit' ? '#' : '/myHome/mySummaries/filter/tags/' + tag } />
                        );
                    })}
                {
                    mode.mode === 'edit' &&
                    <Icon color={ EditIcons.plus.color} icon={ EditIcons.plus.icon}
                     funOnClick={() => EditIcons.plus.function( EditIcons.plus.title)}/>
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
