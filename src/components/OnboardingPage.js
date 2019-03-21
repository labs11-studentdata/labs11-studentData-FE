import React from 'react';

import OnBoardingCard from './OnBoardingCards';
import swIcon from './../imgs/social-worker-icon.png';
import saIcon from './../imgs/school-admin-icon.png';
import bmIcon from './../imgs/board-member-icon.png';

import './OnBoardingPage.css';

class OnBoarding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {

      }

    render() {
      return(
        <div className="onboarding-page">
          <div className="onboarding-container">
            <h3>Tell us who you are!</h3>
            <div className="card-holder-1">
              <OnBoardingCard id={1} icon={saIcon} iconDescription={"Admin Icon"} title={"School Administrator"} subnames={''} /> 
              <OnBoardingCard id={2} icon={swIcon} iconDescription={"Social Worker Icon"} title={"Social Worker"} subnames={''} /> 
            </div>
            <div className="card-holder-2">
              <OnBoardingCard id={3} icon={bmIcon} iconDescription={"Board Member Icon"} title={"Board Member"} subnames={"Mentor, Trainer, Teacher, Advisor, etc."} /> 
            </div>
          </div>
        </div>
        );
    }
  }

  export default OnBoarding