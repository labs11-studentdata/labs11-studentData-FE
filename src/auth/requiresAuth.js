import React, { Component } from 'react';
import LoginView from '../login/LoginView';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

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



const Authenticated = Component => 
  class extends Component {
    componentDidMount() {
      
    }
      render() {
          const token = localStorage.getItem('jwt');
          return <>{token ? <Component {...this.props} /> : <LoginView />}</>
      }
  } 


export default Authenticated