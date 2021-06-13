import React from 'react';
import {
	ViewSummaryHeaderContainer, ViewSummaryH1, ViewSummaryH1Edit,
	AddContainer, InputH1, LinksContainer, VideoLink
} from '.././ViewSummary.style';
import AuthorName from '../../../../components/atoms/Texts/AttributeText';
import ListOfButtonsTags from '../../../../containers/ListOfButtonsTag';
import TagsButton from '../../../../components/atoms/Buttons/TagsButton';
import { SubmitButton } from '../../../../components/atoms/Buttons/SubmitButton';
import HeaderLogic from './Header.logic';
import HeaderIconsData, { EditIcons } from './HeaderIcons.data';
import Icon from '../../../../components/atoms/Icon';
import IconContainer from '../../../../containers/IconContainer';


function HeaderSection({ viewSummary, deleteSummary, updateSummary, mode }) {
	const { titleInputRef, Title, modeToggle, updateTitle, editTitle, toggleEditTitle,
		addTagInputRef, toggleShowAddTagInput, deleteTag,
		addTag, tags, showAddTagInput } = HeaderLogic(updateSummary, mode, viewSummary);
	const IconData = HeaderIconsData(mode.mode, modeToggle, deleteSummary);

	return (
		<ViewSummaryHeaderContainer>
			{
				editTitle ?
					<ViewSummaryH1Edit>
						<InputH1 ref={titleInputRef} type='text' defaultValue={Title}></InputH1>
						<Icon margin={EditIcons.check.margin} color={EditIcons.check.color} icon={EditIcons.check.icon}
							funOnClick={updateTitle} />
					</ViewSummaryH1Edit> :
					<ViewSummaryH1 onDoubleClick={toggleEditTitle}>{Title}</ViewSummaryH1>
			}
			{
				mode.mode === 'edit' ?
					<Icon color={!editTitle ? EditIcons.pen.color : EditIcons.times.color} icon={!editTitle ? EditIcons.pen.icon : EditIcons.times.icon}
						funOnClick={toggleEditTitle} /> :
					<> </>
			}

			<AuthorName attribution='Create By'
				textValue={viewSummary.authorName}></AuthorName>
			<LinksContainer>
				<VideoLink href={viewSummary.url} target="_blank" rel="noopener noreferrer">Link to Video!</VideoLink>
				<ListOfButtonsTags>
					{tags.map((tag, index) => {
						return (
							<TagsButton key={index} keyId={index} text={tag} editMode={mode.mode}
								link={mode.mode === 'edit' ? '#' : '/myHome/mySummaries/filter/tags/' + tag}
								fun={() => deleteTag(viewSummary.sid, tag)} />
						);
					})}
					{
						mode.mode === 'edit' &&
						<AddContainer>
							<Icon color={EditIcons.plus.color} icon={showAddTagInput === 'visible' ? EditIcons.minus.icon : EditIcons.plus.icon}
								funOnClick={toggleShowAddTagInput} />
							<SubmitButton visibility={showAddTagInput} ref={addTagInputRef}
								placeHolder='Enter new tag' submitValue='Add' submitFun={() => addTag()} />
						</AddContainer>

					}
				</ListOfButtonsTags>
				<IconContainer justContent="flex-end">
					{IconData.map((data, index) => {
						return (
							<Icon key={index} margin={data.margin} funOnClick={() => data.function(data.title)}
								color={data.color} icon={data.icon} />
						)
					})
					}
				</IconContainer>
			</LinksContainer>

		</ViewSummaryHeaderContainer>
	)
}

export default HeaderSection;
