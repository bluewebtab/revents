import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom'
import NavBar from '../../features/nav/NavBar/NavBar'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import HomePage from '../../features/home/HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>

        <Route path="/(.+)" 
        render={() => (
          <div>
          <NavBar/>
          <Container className="main">
            <Switch>
            <Route exact path='/events' component={EventDashboard}/>
            <Route exact path='/event/:id' component={EventDetailedPage}/>
            <Route exact path='/people' component={PeopleDashboard}/>
            <Route exact path='/profile/:id' component={UserDetailedPage}/>
            <Route exact path='/settings' component={SettingsDashboard}/>
            <Route exact path='/createEvent' component={EventForm}/>
            </Switch>
          </Container>
        </div>

        )}/>
        
      </div>
        
    );
  }
}

export default App;