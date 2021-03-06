//DUMMY COMMENT
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { UserContext } from './utils/context/UserContext';
// import UserData from './data/User.data';
// import UserApi from './api/User';
import Root from './Root';

// global style
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './utils/globalStyle/globalStyle.style';
import Theme from './utils/globalStyle/theme.style';

// pages
import NotFound404 from './pages/NotFound404';
import HomePage from './pages/HomePage';
import AccessAccountPage from './pages/AccessAccountPage';
import MyHomePage from './pages/MyHomePage';

function App() {
	// const { userAttributes, setUserAttributes, history } = UserData();
	// const { 
	// 	EditProfile,
	// 	ConfirmSignUpSubmit,
	// 	ResendConfirmSignUp,
	// 	Login,
	// 	ConfirmResetPassword,
	// 	ResendResetPassword,
	// 	ResetPassword,
	// 	Signup,
	// 	ChangePassword,
	// 	Logout
	//  } = UserApi(userAttributes, setUserAttributes, history);

	return (
		
		<Router>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
					{/* <UserContext.Provider value={{ userAttributes, setUserAttributes, EditProfile, ConfirmSignUpSubmit,
									ResendConfirmSignUp, Login, ConfirmResetPassword, ResendResetPassword,
										ResetPassword, Signup, ChangePassword, Logout }}> */}
				<Root>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route exact path='/home' component={HomePage} />
						<Route exact path='/about' component={HomePage} />
						<Route exact path='/getStarted' component={HomePage} />
						<Route exact path='/download' component={HomePage} />
						<Route path='/myHome/:page' component={MyHomePage} />
						<Route exact path='/access/:action' component={AccessAccountPage} />
						<Route exact path="/notFound404" component={NotFound404} />
						<Redirect to="/notFound404" />
					</Switch>
				</Root>
					{/* </UserContext.Provider> */}
			</ThemeProvider>
		</Router>
	);
}

export default App;
