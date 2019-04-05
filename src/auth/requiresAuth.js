import React, { Component } from 'react';
import LoginView from '../login/LoginView';
import axios from 'axios';
import queryString from 'query-string';

axios.defaults.baseURL = 'http://localhost:9000/'
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
      const parsed = queryString.parse(window.location.href)
      if(parsed.account_type) {
        window.location.href = `${parsed.account_type.replace(/\s/g, '').toLowerCase()}dashboard`
      } else if (parsed.account_type === '') {
        window.location.href = '/onboarding'
      }
      
    }
      render() {
          const token = localStorage.getItem('jwt');
          return <>{token && token.includes('token')? <Component {...this.props} /> : <LoginView />}</>
      }
  } 


export default Authenticated