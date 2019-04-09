import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { SponsorChildComponent } from '../components';
import { getStudents } from "../actions/index";

class SponsorChildView extends Component {
    state = {
        students: [], 
        activeSponsor: false,
        student: null,
    }

    componentDidMount() {
      this.props.getStudents();
      this.setState({
        students: this.props.students
      })
    }
    // sponsorSelected = (e, student) => {
    //   e.preventDefault();
    //   this.setState({selectedStudent: student})
    // }

    handleOpen = (e, student) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        student: student,
        activeSponsor: true
      });
    };
  
  
    //closes both modals and resets the modal tracking in component state
    handleClose = () => {
      this.setState({
        ...this.state,
        student: null,
        activeSponsor: false,
      });
    };

    render() {
      console.log(this.state)
        return (
          <>
            <SponsorChildComponent
              students={this.state.students}
              open={this.state.activeSponsor}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              student={this.state.student}
              userID={this.props.userID}
            />
          </>
        )
    }
}

const mapStateToProps = state => {
  return {
    fetching: state.students.fetching,
    fetched: state.students.fetched,
    students: state.students.students,
    error: state.students.error,
    userID: state.login.user.userID
  }
}

export default connect(mapStateToProps, {getStudents})(SponsorChildView);
