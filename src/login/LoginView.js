import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import '../styles/LoginStyles.css'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/login'
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import {HeaderView} from '../views'
const btns = ['Google', 'Facebook']

class LoginView extends Component {
    state = {
        isRegistering: false
    }

    componentWillMount() {
        const query = this.props.history.location.pathname.substring(17)
        if(query.length > 10) {
            this.props.loginUser(query)
        }
    }
  
   
 

    render() {
        console.log(this.state)
        return (
            <>
            <HeaderView isRegistering={this.state.isRegistering} />
            <LoginComponent  isRegistering={this.state.isRegistering} btns={btns}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}
export default withRouter(connect(mapStateToProps, {loginUser})(LoginView));