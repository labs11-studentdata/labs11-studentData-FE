import React, { Component } from 'react';
import { LoginComponent } from '../components';
import '../styles/LoginStyles.css'

const btns = ['', 'Google', 'Facebook']
class LoginView extends Component {
    state = {
        isRegistering: false
    }
    // BTN SUBMITTED -- for login with Google, Facebook or App
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('connected')
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