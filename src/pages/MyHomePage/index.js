import React from 'react';
import { SummariesContext } from '../../utils/context/SummariesContext';
import { FilterMySummariesContext } from '../../utils/context/FilterMySummariesContext';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import OnNavbar from '../../components/Navbar/OnNavBar';
import SideNavBar from '../../components/SideNavBar';
import MySummaries from './MySummaries'
import Footer from '../../components/Footer'
import MyHomePageData from './MySummary.data'
import SummaryApi from '../../api/Summary';
import MyHomePageFilters from './MyHomePage.filters';
import { MyHomePageContainer } from './MyHomePage.style';
import Discover from './Discover';
import MyTags from './MySummaries/MyTags';
import ViewSummary from './ViewSummary';
import ProfilePage from './Profile'


function MyHomePage() {
	const { page } = useParams();
	const { path } = useRouteMatch();
	const { mySummaries, setMySummaries, isMySummaryEmpty, myFilterSummaries,
		setMyFilterSummaries } = MyHomePageData();
	const { SearchFilterData, myFilterSummariesTags,
		FilterDataByAttribute, UnFilter } = MyHomePageFilters(mySummaries, setMyFilterSummaries);
	const { isLoading, setLoading, addSummary, deleteSummary, updateSummary,
		ShareSummary, toggleFavorite } = SummaryApi(mySummaries, setMySummaries,
			myFilterSummaries, setMyFilterSummaries);

	return (
		<SummariesContext.Provider value={{
			isMySummaryEmpty, mySummaries, isLoading, setLoading, myFilterSummaries, addSummary,
			deleteSummary, updateSummary, ShareSummary, toggleFavorite
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
								page === 'sharedWithMe' ? <h1>Shared With Me</h1> :
								page === 'myFriends' ? <h1>My Friends</h1> :
								page === 'settings' ? <h1>Setting</h1> :
								page === 'profile' ? <ProfilePage /> :
								<h1>ELSE</h1> //DELETEME
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


