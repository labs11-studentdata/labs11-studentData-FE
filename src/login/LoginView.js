import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import { regSelected, logSelected } from '../actions/login';
import './/LoginStyles.css'
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/login'
import { connect } from 'react-redux';
import {HeaderView} from '../views'
import queryString from 'query-string';
import {Route } from 'react-router-dom';
const btns = ['Google', 'Facebook']

class LoginView extends Component {

    registerSubmit = e => {
        e.preventDefault();
        const text = e.target.textContent;
        if (text.includes("Up")) {
          this.props.regSelected();
        } else {
          this.props.logSelected();
        }
      };

    componentDidMount() {
        const query = this.props.history.location.pathname
        const parsed = queryString.parse(query)
        if(parsed.user_permissions === '') {
            window.location.href = '/onboarding'
        }
        if(query.length > 10) {
            this.props.loginUser(query);
        }
    }


    render() {
        return (
            <>
            <HeaderView />
            <LoginComponent registerSubmit={this.registerSubmit} isRegistering={this.props.isRegistering} btns={btns}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isRegistering: state.login.isRegistering
    }
}
export default withRouter(connect(mapStateToProps, {loginUser, logSelected, regSelected})(LoginView));