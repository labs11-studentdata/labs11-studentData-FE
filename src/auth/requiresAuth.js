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
      console.log(parsed)
      if(parsed.user_permissions) {
        console.log(true)
        window.location.href = `${parsed.user_permissions.replace(/\s/g, '').toLowerCase()}dashboard`
      }
    }
      render() {
          const token = localStorage.getItem('jwt');
          console.log(token && token.includes('token'))
          return <>{token && token.includes('token')? <Component {...this.props} /> : <LoginView />}</>
      }
  } 


export default Authenticated