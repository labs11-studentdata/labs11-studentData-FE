import React, { Component } from 'react';
import { HeaderComponent } from '../components';
import { logoutUser } from '../actions/login';
import { connect } from 'react-redux';

class HeaderView extends Component {

   // BTN SUBMITTED -- changes state if user is registering or logging in
   registerSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.textContent)
    const text = e.target.textContent;
    console.log(text)
    if(text.includes('Up') || text.includes('Register')){
        this.setState({isRegistering: true})
    } else {
        this.setState({isRegistering: false})}
        console.log(this.state)
}
    render() {
        console.log(this.props)
        return (
            <HeaderComponent
            registerSubmit={this.registerSubmit} 
            isRegistering={this.props.isRegistering}
            loggedIn={this.props.loggedIn}
            handleLogout={this.props.logoutUser} />
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        loggedIn: state.login.loggedIn
    }
}
export default connect(mapStateToProps, {logoutUser})(HeaderView);