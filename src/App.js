import React, { Component } from 'react';
import requiresAuth from './auth/requiresAuth';
import { Route } from 'react-router-dom';
<<<<<<< Updated upstream
import { LoginView, HeaderView, SponsorChildView, BoardView, StudentView } from './views';
import { Onboarding, AddStudent } from './components'

=======
import { LoginView, HeaderView, SponsorChildView, BoardDashboard,  } from './views';
import { Onboarding, AllVisits } from './components'
>>>>>>> Stashed changes

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderView />
        <Route path='/onboarding' component={Onboarding} />
        <Route path='/sponsor' component={SponsorChildView} />
<<<<<<< Updated upstream
        <Route path='/board' component={BoardView} />
        <Route path='/student/:id' render={props => <StudentView {...props} />} />
        <Route path='/add' component={AddStudent} />
=======
        <Route path='/board' component={BoardDashboard} />
        <Route path='/visittest' component={AllVisits} />        
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default requiresAuth(App);
