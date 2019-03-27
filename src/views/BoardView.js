import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {getStudents, getVisits, getSchools, getStudentsByClass} from '../actions/index';
import { VisitLog, StudentCounter, StudentTable, IssuesTracker, SchoolSelect } from '../components/index';
import { all } from 'bluebird';

class BoardView extends Component {

  state = {
    schoolID: null,
    gradeID: null,
    students: [],
    visits: [],
  }

  componentDidMount() {
    this.props.getStudents();
    this.props.getSchools();
    this.props.getVisits();

  }
  
  setClass = (e, schoolID, gradeID) => {
    e.preventDefault();
    if(schoolID === 'all' && gradeID === 'all'){
      this.setState({
        ...this.state,
        schoolID: 'all',
        gradeID: 'all',
        students: this.props.students,
        visits: this.props.visits
      })
    }
    else if (schoolID !== 'all' && gradeID === 'all'){
      this.setState({
        ...this.state,
        schoolID: schoolID,
        gradeID: 'all',
        students: this.props.students.filter(student => student.schoolID === schoolID),
        visits: this.props.visits.filter(visit => visit.schoolID === schoolID)
      })
    }
    else {
      this.setState({
        ...this.state,
        schoolID: schoolID,
        gradeID: gradeID,
        students: this.props.students.filter(student => (student.gradeID === gradeID) && (student.schoolID === schoolID)),
        visits: this.props.visits.filter(visit => visit.schoolID === schoolID)
      });
    }
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
        <VisitLog visits={this.state.visits}/>
        <StudentCounter students={this.state.students}/>
        <StudentTable students={this.state.students}/>
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

export default connect(mapStateToProps, {getStudents, getVisits, getSchools})(BoardView);