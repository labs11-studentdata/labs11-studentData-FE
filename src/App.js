import React, { Component } from 'react';
import Authenticated from './auth/requiresAuth';
import { Route } from 'react-router-dom';
import {  HeaderView, SponsorChildView, BoardView, StudentView, SocialWorkerDashboard, LandingPage, Visits, MyAccountView } from './views';
// import LoginView from './login/LoginView';
import { OnboardingView, AddStudent } from './components';
import AdministratorDash from './views/AdminDashboard/AdministratorDash';
import CssBaseline from '@material-ui/core/CssBaseline';
import Redirect from './components/Redirect/Redirect';

import ImageUpload from './components/ImageUpload/ImageUpload';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <HeaderView />
        <Route path='/onboarding' component={OnboardingView} />
        <Route path='/sponsor' component={SponsorChildView} />
        <Route path='/boardmemberdashboard' component={BoardView} />
        <Route path='/student/:id' render={props => <StudentView {...props} />} />
        <Route path='/add' component={AddStudent} /> 
        <Route path='/socialworkerdashboard' component={SocialWorkerDashboard} />        
        <Route path='/admindashboard' component={AdministratorDash} />
        <Route path='/visits' component={Visits} />
        <Route path='/home' component={LandingPage} />
        <Route path='/myaccount' component={MyAccountView} />
        <Route path='/upload' component={ImageUpload} />
        <Route exact path="/" component={Redirect} />

      </div>
    );
  }
}

export default Authenticated(App);
