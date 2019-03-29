import React, { Component } from 'react';
import requiresAuth from './auth/requiresAuth';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
import { LoginView, HeaderView, SponsorChildView, BoardView, StudentView, SocialWorkerView } from './views';
=======
import {  HeaderView, SponsorChildView, BoardView, StudentView, AdminDashboard } from './views';
import LoginView from './login/LoginView';
>>>>>>> master
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
        {/* <Route path='/login' component={LoginView} /> */}
        <Route path='/student/:id' render={props => <StudentView {...props} />} />
        <Route path='/add' component={AddStudent} />
        <Route path='/social' component={SocialWorkerView} />        
        <Route path='/admin' component={AdminDashboard} />
      </div>
    );
  }
}

export default App;
