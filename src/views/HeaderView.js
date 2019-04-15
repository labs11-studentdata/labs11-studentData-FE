
import React, { Component } from "react";
import { HeaderComponent } from "../components";
import { logoutUser, regSelected, logSelected } from "../actions/login";
import { connect } from "react-redux";

class HeaderView extends Component {
  // BTN SUBMITTED -- changes state if user is registering or logging in
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
    return (
      <HeaderComponent
        registerSubmit={this.registerSubmit}
        isRegistering={this.props.isRegistering}
        loggedIn={this.props.loggedIn}
        handleLogout={this.props.logoutUser}
      />
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    loggedIn: state.login.loggedIn,
    isRegistering: state.login.isRegistering
  };
};
export default connect(
  mapStateToProps,
  { logoutUser, regSelected, logSelected }
)(HeaderView);
