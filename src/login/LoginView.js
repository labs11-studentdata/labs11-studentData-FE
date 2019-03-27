import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import '../styles/LoginStyles.css'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/login'
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
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
  
    // BTN SUBMITTED -- changes state if user is registering or logging in
    registerSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.textContent)
        const text = e.target.textContent;
        console.log(text)
        if(text.includes('Up')){
            this.setState({isRegistering: true})
        } else {
            this.setState({isRegistering: false})}
            console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <LoginComponent registerSubmit={this.registerSubmit} isRegistering={this.state.isRegistering} handleSubmit={this.handleSubmit} btns={btns}/>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {

    }
}
export default withRouter(connect(mapStateToProps, {loginUser})(LoginView));