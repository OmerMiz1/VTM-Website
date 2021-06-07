import React, { useContext } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';

import {
	WarningText,
	Lodaing, LodaingContanirMotion, LoadingConainer,
	loadingCircleVariants, loadingCircleTransition, loadingContainerVariants
} from './Loading.style'
function LoadingComponent() {

	// context from api
	const { isMySummaryEmpty, isLoading, myFilterSummaries } = useContext(SummariesContext);
	return (
		<div>
			{isMySummaryEmpty && !isLoading && (
				<WarningText>No Summaries are published yet!</WarningText>
			)}

			{myFilterSummaries.length === 0 && !isLoading && (
				<WarningText>Not found!!</WarningText>
			)}
			{isLoading &&
				<LoadingConainer>
					<WarningText>Loading</WarningText>
					<LodaingContanirMotion
						variants={loadingContainerVariants}
						initial="start"
						animate="end">
						<Lodaing
							variants={loadingCircleVariants}
							transition={loadingCircleTransition}></Lodaing>
						<Lodaing
							variants={loadingCircleVariants}
							transition={loadingCircleTransition}></Lodaing>
						<Lodaing
							variants={loadingCircleVariants}
							transition={loadingCircleTransition}></Lodaing>

					</LodaingContanirMotion>
				</LoadingConainer>}
		</div>
	)
}

export default LoadingComponent
