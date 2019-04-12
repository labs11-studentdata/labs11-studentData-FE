import React from "react";
import LandingCardText from "../components/LandingPage/LandingCardText";
import LandingCardImg from "../components/LandingPage/LandingCardImg";
import LandingCardBtn from "../components/LandingPage/LandingCardBtn";
import { connect } from 'react-redux';
import { regSelected, logSelected, loginUser } from '../actions/login';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';
import "../styles/LandingPage.css";
import queryString from 'query-string';
const baseURL = process.env.REACT_APP_FE_ROOT;

class LandingPage extends React.Component {


    componentDidMount() {
      const query = this.props.history.location.pathname
      console.log(query)
      const parsed = queryString.parse(query)
      console.log(parsed)
      if(parsed.account_type === '') {
          window.location.href = '/onboarding'
      }
      if(query.length > 30) {
          this.props.loginUser(query);
  
      }
  }

  registerSubmit = e => {
    e.preventDefault();
    const text = e.target.textContent;
    if (text.includes("Register") && window.location.href.includes('login')) {
      this.props.regSelected();
    } else if (text.includes('Register')) {
      this.props.regSelected();
      window.location.href='/login'
    } else if(text.includes("Login") && window.location.href.includes('login')) {
      this.props.logSelected();
    } else {
      this.props.logSelected();
      window.location.href='/login'
    }
  };
  render() {
    return (
      <div className="landing-container">
        <div className="jumbotron">
          <h1>SchoolMe</h1>
          <div className="landingBtns">
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={(e) => this.registerSubmit(e)}
>
            Login
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={(e) => this.registerSubmit(e)}
          >
            Register
          </Button>
          </div>
         
        </div>
        <div className="landing-content row-1">
          <LandingCardImg class="left inlineImg hall" />
          <LandingCardText
            class="right inlineText"
            title="Our Mission Statement"
            text="We are SchoolMe, a non-profit web application for storing and sharing school related data between School Administrators, Social Workers, and Education Board Members. We want to create a platform to help board members connect with students in need across our organization. Board members are able to assist in paying the school dues of students who cannot pay themselves."
          />
        </div>
        <div className="landing-content row-2">
          <LandingCardText
            class="left inlineText"
            title="About Us"
            text="We are a team of developers working together on this project while taking instruction with Lambda School. This app is to be our Capstone Project to start us off. We want to create an app that will be useful to the people who really need it. "
          />
          <LandingCardImg class="right inlineImg class" />
        </div>
        <div className="landing-content row-3">
          <LandingCardBtn
            class="center inlineText"
            title="Would you like to start using SchoolMe"
            text="$60USD/Year"
          />
        </div>
        <div className="footer">
          <span>© 2019 Lambda School Student Data</span>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {regSelected, logSelected, loginUser})(LandingPage));
