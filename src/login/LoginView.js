import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import '../styles/LoginStyles.css'
import axios from 'axios';

const btns = ['Google', 'Facebook']
class LoginView extends Component {
    state = {
        isRegistering: false
    }
    // BTN SUBMITTED -- for login with Google, Facebook or App
    handleSubmit = (e) => {
        let axiosConfig = {
            header: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        e.preventDefault();
        const text = e.target.textContent;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://localhost:9000/auth/google'
        if(text.includes('Google')) {
            axios.get(proxyurl + url)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
        // AXIOS CALLS TO 0AUTH ON SERVER
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
        return (
            <LoginComponent registerSubmit={this.registerSubmit} isRegistering={this.state.isRegistering} handleSubmit={this.handleSubmit} btns={btns}/>
        )
    }
}

export default LoginView;