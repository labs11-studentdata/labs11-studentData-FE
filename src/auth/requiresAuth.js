import React from 'react';
import LoginView from '../login/LoginView';
import axios from 'axios';
import queryString from 'query-string';
import { LandingPage } from '../views';

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
      } 
      
    }
      render() {
          const token = localStorage.getItem('jwt');
          if(token && token.includes('token')) {
            return <Component {...this.props} />
          } else if (window.location.href.includes('login')){
            return <LoginView />
          } else {
            return <LandingPage {...this.props}/>
          }
          // return <>{token && token.includes('token')? <Component {...this.props} /> : <LoginView />}</>
      }
  } 


export default Authenticated