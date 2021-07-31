import React, { useContext } from 'react';
import { SummariesContext } from '../../../utils/context/SummariesContext';
import {
	WarningText,
	Loading, LoadingContainerMotion, LoadingContainer,
	loadingCircleVariants, loadingCircleTransition, loadingContainerVariants
} from './Loading.style';


function LoadingComponent({page}) {
	const { isMySummaryEmpty, isLoading, myFilterSummaries } = useContext(SummariesContext);

	return (
		<div>
			{page === "mySummaries" && isMySummaryEmpty && !isLoading ? (
				<WarningText>No summaries found!</WarningText>
			) :
			page === "mySummaries" && myFilterSummaries.length === 0 && !isLoading && (
				<WarningText>Summary not found!</WarningText>
			)}
            {isLoading &&
				<LoadingContainer>
					<WarningText>Loading</WarningText>
					<LoadingContainerMotion
						variants={loadingContainerVariants}
						initial="start"
						animate="end">
						<Loading
							variants={loadingCircleVariants}
							transition={loadingCircleTransition}></Loading>
						<Loading
							variants={loadingCircleVariants}
							transition={loadingCircleTransition}></Loading>
						<Loading
							variants={loadingCircleVariants}
							transition={loadingCircleTransition}></Loading>
					</LoadingContainerMotion>
				</LoadingContainer>}
		</div>
	)
}

export default LoadingComponent;