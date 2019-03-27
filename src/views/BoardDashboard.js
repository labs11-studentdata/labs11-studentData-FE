import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {getStudents, getVisits, getSchools, getStudentsByClass} from '../actions/index';
import { VisitLog, StudentCounter, StudentTable, IssuesTracker, SchoolSelect } from '../components/index';

class BoardDashboard extends Component {

  state = {
    schoolID: '',
    gradeID: '',
  }

  componentDidMount() {
    this.props.getStudents();
    this.props.getSchools();
    this.props.getVisits();

  }

  setSchool = (e, schoolID) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      schoolID: schoolID
    })
  }

  setClass = (e, schoolID, gradeID) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      schoolID: schoolID,
      gradeID: gradeID
    });
    this.props.getStudentsByClass(schoolID, gradeID);
  }




  render(){
    return (
      <div className='board-db'>
        <SchoolSelect
          schools={this.props.schools}
          setSchool={this.setSchool}
          setClass={this.setClass}
          schoolID={this.state.schoolID}
          gradeID={this.state.gradeID}
        />
        <VisitLog visits={this.props.visits}/>
        <StudentCounter students={this.props.students}/>
        <StudentTable students={this.props.students}/>
        {/* <IssuesTracker /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.students.fetching,
    fetched: state.students.fetched,
    students: state.students.students,
    schools: state.schools.schools,
    error: state.students.error,
    visits: state.visits.visits
  }
}

export default connect(mapStateToProps, {getStudents, getVisits, getSchools})(BoardDashboard);