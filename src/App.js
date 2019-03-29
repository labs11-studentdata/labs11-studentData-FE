import React, { Component } from 'react';
import requiresAuth from './auth/requiresAuth';
import { Route } from 'react-router-dom';
import {  HeaderView, SponsorChildView, BoardView, StudentView, AdminDashboard, SocialWorkerView } from './views';
import LoginView from './login/LoginView';
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
        <Route path='/social' component={SocialWorkerView} />        
        <Route path='/admin' component={AdminDashboard} />
      </div>
    );
  }
}

export default App;
