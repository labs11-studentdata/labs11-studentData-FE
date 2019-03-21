import React, { Component } from 'react';
import { LoginView } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <LoginView />
        </header>
      </div>
    );
  }
}

export default App;
