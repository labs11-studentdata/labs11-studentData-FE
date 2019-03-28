import React from "react";

import OnBoardingCard from "./OnBoardingCards";
import swIcon from ".././../imgs/social-worker-icon.png";
import saIcon from "../../imgs/school-admin-icon.png";
import bmIcon from "../../imgs/board-member-icon.png";
import OnBoardingForm from "./OnboardingForm";
import axios from 'axios';
import "./OnBoardingPage.css";

const user = { 
  email: "",
  photo_url: "",
  account_type:  "",
  user_permissions: ""
};
class OnBoarding extends React.Component {
  state = {
    selected: "",
    user: user
  };

  componentDidMount() {}
  handleChanges = (e) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state)
  }
  userTypeSelected = e => {
    if (e.includes("Admin")) {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          account_type: 1,
          user_permissions: e
        }
      })
    } else if (e.includes("Social")) {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          account_type: 2,
          user_permissions: e
        }
      })
    } else {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          account_type: 3,
          user_permissions: e
        }
      })
    }
    this.setState({ selected: e });
  };

  // HANDLE SUBMIT -- axios call to update user with client info
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.user.photo_url || this.state.user.email || this.state.user.user_permissions) {
      this.setState({...this.state, error: false})
      axios.get('/api/users/')
      
    } else {
      this.setState({...this.state, error: true})
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="onboarding-page">
        <h3>Tell us who you are!</h3>
        <div className="onboarding-container">
          <div className="card-holder">
            <OnBoardingCard
              userTypeSelected={e => this.userTypeSelected(e)}
              id={1}
              icon={saIcon}
              iconDescription={"Admin Icon"}
              title={"School Administrator"}
              subnames={""}
            />
            <OnBoardingCard
              userTypeSelected={e => this.userTypeSelected(e)}
              id={2}
              icon={swIcon}
              iconDescription={"Social Worker Icon"}
              title={"Social Worker"}
              subnames={""}
            />
            <OnBoardingCard
              userTypeSelected={e => this.userTypeSelected(e)}
              id={3}
              icon={bmIcon}
              iconDescription={"Board Member Icon"}
              title={"Board Member"}
              subnames={"Mentor, Trainer, Teacher, Advisor, etc."}
            />
            <div className='accountHeading'>
              {this.state.selected.length > 0 ?
                `I am a ${this.state.selected}` : 'Please select an account type.'}
            </div>
          </div>
          <OnBoardingForm handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} user={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default OnBoarding;
