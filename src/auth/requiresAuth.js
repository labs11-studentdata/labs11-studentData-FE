import React, { Component } from 'react';
import LoginView from '../login/LoginView';
import axios from 'axios';


axios.interceptors.request.use(
    function(options) {
      options.headers.authorization = localStorage.getItem('jwt');
      return options;
    },
    function(error) {
      // do something with the error
      return Promise.reject(error);
    }
  );


export default function(Component) {
    return class Authenticated extends Component {
        render() {
            const token = localStorage.getItem('jwt');
            return <>{token ? <Component {...this.props} /> : <LoginView />}</>
        }
    } 
}