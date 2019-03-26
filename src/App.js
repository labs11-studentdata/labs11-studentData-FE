import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { LoginView, HeaderView, SponsorChildView, BoardDashboard, StudentView } from './views';
import { Onboarding } from './components'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderView />
        <Route path='/login' component={LoginView} />
        <Route path='/onboarding' component={Onboarding} />
        <Route path='/sponsor' component={SponsorChildView} />
        <Route path='/board' component={BoardDashboard} />
        <Route path='/student/:id' render={props => <StudentView {...props} />} />
      </div>
    );
  }
}

export default App;
