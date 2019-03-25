import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getStudents, getVisits} from '../actions/index';
import { VisitLog, StudentCounter, StudentTable, IssuesTracker } from '../components/index';

class BoardDashboard extends Component {

  state = {
    schoolID: '',
    gradeID: ''
  }

  componentDidMount() {
    this.props.getStudents();
    // this.props.getVisits();
  }

  render(){
    return (
      <div className='admin-db'>
        {/* <VisitLog /> */}
        <StudentCounter students={this.props.students}/>
        <StudentTable students={this.props.students}/>
        {/* <IssuesTracker /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.board.fetching,
    fetched: state.board.fetched,
    students: state.board.students,
    error: state.board.error
  }
}

export default connect(mapStateToProps, {getStudents, getVisits})(BoardDashboard);