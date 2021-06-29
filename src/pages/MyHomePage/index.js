import React from 'react';
import { SummariesContext } from '../../utils/context/SummariesContext';
import { FilterMySummariesContext } from '../../utils/context/FilterMySummariesContext';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
<<<<<<< HEAD
// import MiniDrawer from '../../components/SideNavBar/SideBarMaterial';

import MySummaries from './MySummaries'
import Footer from '../../components/Footer'
=======
import MySummaries from './MySummaries';
import Footer from '../../components/Footer';
>>>>>>> a9fdea86112724f23a6cc1e250776f9ade057933

import MyHomePageLogic from './MyHomePage.logic';
import SummaryData from '../../data/Summary.data';
import SummaryApi from '../../api/Summary';

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
		sharedSummaries, setSharedSummaries, isSharedSummariesEmpty} = SummaryData();

	const { SearchFilterData, myFilterSummariesTags,
		FilterDataByAttribute, UnFilter } = MyHomePageFilters(mySummaries, setMyFilterSummaries);
	
	const {
		addSummary,
		updateSummary,
		deleteSummary,
		toggleFavorite,
		toggleLike,
		getMyLibraries,
		editAccess,
		setLoading,
		isLoading,
		//TODO
		getAccess
		//shareSummary
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
			isSharedSummariesEmpty
			}}>
			<FilterMySummariesContext.Provider value={{
				SearchFilterData, myFilterSummariesTags,
				FilterDataByAttribute, UnFilter
			}} >
				<OnNavbar usetransparent={0} PositionMarker={page} />
				
				<MyHomePageContainer>
					<SideNavBar />
					<Switch>
						<Route exact path={`${path}/:mode/:sid`} component={ViewSummary} />
						<Route exact path='/myHome/:page/:attribute' component={MyTags} />
						<Route exact path='/myHome/:page/:action/:attribute/:name' component={MySummaries} />
						<Route exact path='/myHome/:page'>
							{
								page === 'mySummaries' ? <MySummaries /> :
								page === 'discover' ? <Discover /> :
								page === 'myFriends' ? <Friends/> :
								page === 'sharedWithMe' ? <SharedWithMe /> :
								page === 'settings' ? <h1>Setting</h1> :
								page === 'profile' ? <ProfilePage /> :
								<h1>ELSE</h1> //TODO? mySummaries
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


