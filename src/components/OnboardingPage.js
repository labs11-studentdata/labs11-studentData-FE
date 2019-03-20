import React from 'react';
import Card from './OnBoardingCards';

class OnBoarding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {

      }

    render() {
      return(
            <div className="onboarding-container">
                <h3>Tell us who you are!</h3>
                <Card id={1} icon={''} iconDescription={"Admin Icon"} title={"School Administrator"} surnames={''} /> 
                <Card id={2} icon={''} iconDescription={"Social Worker Icon"} title={"Social Worker"} surnames={''} /> 
                <Card id={3} icon={''} iconDescription={"Board Member Icon"} title={"Board Member"} surnames={"Mentor, Trainer, Teacher, Advisor, etc."} /> 
            </div>
        );
    }
  }

  export default OnBoarding