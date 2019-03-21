import React, { Component } from 'react';
import { LoginView, HeaderView } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderView />
        <LoginView />
      </div>
    );
  }
}

export default App;
