import React from "react";
import LandingCardText from "../components/LandingPage/LandingCardText";
import LandingCardImg from "../components/LandingPage/LandingCardImg";
import LandingCardBtn from "../components/LandingPage/LandingCardBtn";
import Button from '@material-ui/core/Button';

import "../styles/LandingPage.css";
const baseURL = process.env.REACT_APP_FE_ROOT;

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="jumbotron">
          <h1>SchoolMe</h1>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href={`${baseURL}/login`}
>
            Login
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            href={`${baseURL}/login`}

          >
            Register
          </Button>
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
            btnText="Subscribe Now!"
            btnHandler={null}
          />
        </div>
        <div className="footer">
          <span>© 2019 Lambda School Student Data</span>
        </div>
      </div>
    );
  }
}

export default LandingPage;
