import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

//global style
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './utils/globalStyle/globalStyle.style';
import Theme from './utils/globalStyle/theme.style';

// pages
import NotFound404 from './pages/NotFound404';
import HomePage from './pages/HomePage'
import AccessAccountPage from './pages/AccessAccountPage';
import MyHomePage from './pages/MyHomePage';

// Contexts
import { UserContext } from './utils/context/UserContext';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ThemeProvider theme= {Theme}>
        <GlobalStyle/>
        <UserContext.Provider value={{user, setUser}}>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/about' component={HomePage}/>
            <Route exact path='/getstart' component={HomePage}/>
            <Route exact path='/download' component={HomePage}/>
            <Route path='/myHome/:page' component={MyHomePage}/> 
            <Route exact path='/access/:action' component={AccessAccountPage}/>
            <Route exact path="/notFound404" component={NotFound404}/>
            <Redirect to="/notFound404" />
          </Switch>
        </UserContext.Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
