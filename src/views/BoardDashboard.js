import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VisitLog, StudentCounter, StudentTable, IssuesTracker } from '../components/index';

class BoardDashboard extends Component {

  render(){
    return (
      <div className='admin-db'>
        <VisitLog />
        <StudentCounter />
        <StudentTable />
        <IssuesTracker />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, {})(BoardDashboard);