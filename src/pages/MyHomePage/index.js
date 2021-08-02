import React from 'react';
import { SummariesContext } from '../../utils/context/SummariesContext';
import { FilterMySummariesContext } from '../../utils/context/FilterMySummariesContext';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummaries from './MySummaries';
import Footer from '../../components/Footer';

import MyHomePageLogic from './MyHomePage.logic';
import SummaryData from '../../data/Summary.data';

import TagView from './TagView';

import MyHomePageFilters from './MyHomePage.filters';
import { MyHomePageContainer } from './MyHomePage.style';
import Discover from './Discover';
import SharedWithMe from './SharedWithMe';
import MyTags from './MySummaries/MyTags';
import ViewSummary from './ViewSummary';
import ProfilePage from './Profile';
import Friends from './Friends';


function MyHomePage() {
	const { page } = useParams();
	const { path } = useRouteMatch();
	const { mySummaries, setMySummaries, isMySummaryEmpty,
        myFilterSummaries, setMyFilterSummaries,
        publicSummaries, setPublicSummaries, isPublicSummariesEmpty,
		sharedSummaries, setSharedSummaries, isSharedSummariesEmpty, 
        publicFilterSummaries, setPublicFilterSummaries} = SummaryData();

	const { SearchFilterData, myFilterSummariesTags,
		FilterDataByAttribute, UnFilter } = MyHomePageFilters(mySummaries, setMyFilterSummaries);
	
	const {
		getSummary,
		addSummary,
		updateSummary,
		deleteSummary,
		toggleFavorite,
		toggleLike,
		getMyLibraries,
		editAccess,
		setLoading,
		isLoading,
		getAccess,
		//shareSummary
        filterText,
        setFilterText,
	 } = MyHomePageLogic(mySummaries, setMySummaries, myFilterSummaries, setMyFilterSummaries)

     return (
		<SummariesContext.Provider value={{
			isMySummaryEmpty, mySummaries,
			isLoading, setLoading,
			myFilterSummaries, addSummary,
			deleteSummary, updateSummary,
			toggleFavorite,
			toggleLike, getMyLibraries,
			editAccess, publicSummaries,
			setPublicSummaries,	isPublicSummariesEmpty,
			sharedSummaries, setSharedSummaries,
			isSharedSummariesEmpty, getSummary
			}}>
			<FilterMySummariesContext.Provider value={{
				SearchFilterData, myFilterSummariesTags,
				FilterDataByAttribute, UnFilter,
                filterText, publicFilterSummaries, setPublicFilterSummaries
			}} >
				<OnNavbar usetransparent={0} PositionMarker={page} setFilterText={setFilterText} />
				
				<MyHomePageContainer>
					<SideNavBar />
					<Switch>
						<Route exact path={`${path}/:mode/:sid`} component={ViewSummary} />
						<Route exact path='/myHome/:page/:attribute' component={MyTags} />
						<Route exact path='/myHome/:page/:action/:attribute/:name' component={TagView} />
						<Route exact path='/myHome/:page'>
							{
								page === 'mySummaries' ? <MySummaries /> :
								page === 'discover' ? <Discover /> :
								page === 'myFriends' ? <Friends/> :
								page === 'sharedWithMe' ? <SharedWithMe /> :
								page === 'profile' ? <ProfilePage /> :
								<MySummaries />
							}
						</Route>
					</Switch>
				</MyHomePageContainer>

				<Footer />
			</FilterMySummariesContext.Provider>
		</SummariesContext.Provider>
	)
}

export default MyHomePage;