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
                <Card id={1} icon={null} iconDescription={"Admin Icon"} title={"School Administrator"} surnames={null} /> 
                <Card id={2} icon={null} iconDescription={"Social Worker Icon"} title={"Social Worker"} surnames={null} /> 
                <Card id={3} icon={null} iconDescription={"Board Member Icon"} title={"Board Member"} surnames={"Mentor, Trainer, Teacher, Advisor, etc."} /> 
            </div>
        );
    }
  }

  export default OnBoarding