
import React, { Component } from "react";
import { HeaderComponent } from "../components";
import { logoutUser, regSelected, logSelected } from "../actions/login";
import { connect } from "react-redux";
import axios from 'axios';
import HeaderStyles from '../styles/HeaderStyles.css'

class HeaderView extends Component {
  state = {
    user: {}
  }
  // BTN SUBMITTED -- changes state if user is registering or logging in
  componentDidMount(){
    // console.log('++++++++++++++++++++++++++++++++++')
    axios.get(`${process.env.REACT_APP_BE_URL}/api/users/${this.props.userID}`)
      .then(res => {
        // console.log(res)
        this.setState({
          ...this.state,
          user: res.data.user
        })
      })
      .catch(err => console.log(err))
      // console.log(this.state)

  }  
  registerSubmit = e => {
    e.preventDefault();
    const text = e.target.textContent;
    if (text.includes("Up") || text.includes("Register")) {
      this.props.regSelected();
    } else {
      this.props.logSelected();
    }
  };

 

  render() {
    // console.log(this.state.user.photo_url)
    return (
      <HeaderComponent
        photo={this.state.user.photo_url}
        registerSubmit={this.registerSubmit}
        isRegistering={this.props.isRegistering}
        loggedIn={this.props.loggedIn}
        handleLogout={this.props.logoutUser}
        accountType={this.props.accountType}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    loggedIn: state.login.loggedIn,
    isRegistering: state.login.isRegistering,
    userID: state.login.user.user_id,
    accountType: state.login.user.account_type
  };
};
export default connect(
  mapStateToProps,
  { logoutUser, regSelected, logSelected }
)(HeaderView);
