import React, { Component } from 'react';
import requiresAuth from './auth/requiresAuth';
import { Route } from 'react-router-dom';
import { LoginView, HeaderView, SponsorChildView, BoardView, StudentView } from './views';
import { Onboarding, AddStudent } from './components'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderView />
        <Route path='/onboarding' component={Onboarding} />
        <Route path='/sponsor' component={SponsorChildView} />
        <Route path='/board' component={BoardView} />
        <Route path='/login' component={LoginView} />
        <Route path='/student/:id' render={props => <StudentView {...props} />} />
        <Route path='/add' component={AddStudent} />
      </div>
    );
  }
}

export default requiresAuth(App);
