import React, { Component } from 'react';
import Authenticated from './auth/requiresAuth';
import { Route } from 'react-router-dom';
import {  HeaderView, SponsorChildView, BoardView, StudentView, AdminDashboard, SocialWorkerView, SocialWorkerDashboard, LandingPage } from './views';
import LoginView from './login/LoginView';
import { OnboardingView, AddStudent } from './components'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderView />
        <Route path='/onboarding' component={OnboardingView} />
        <Route path='/sponsor' component={SponsorChildView} />
        <Route path='/boardmemberdashboard' component={BoardView} />
        <Route path='/login' component={LoginView} />
        <Route path='/student/:id' render={props => <StudentView {...props} />} />
        <Route path='/add' component={AddStudent} /> 
        <Route path='/socialworkerdashboard' component={SocialWorkerView} />        
        <Route path='/admindashboard' component={AdminDashboard} />
        <Route path='/social' component={SocialWorkerView} />        
        <Route path='/schooladministratordashboard' component={AdminDashboard} />
        <Route path='/home' component={LandingPage} />
      </div>
    );
  }
}

export default Authenticated(App);
