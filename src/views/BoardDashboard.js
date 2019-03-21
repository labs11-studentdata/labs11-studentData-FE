import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VisitLog, StudentCounter, StudentGrid, IssuesTracker } from '../components/index';

class BoardDashboard extends Component {

  render(){
    return (
      <div className='admin-db'>
        <VisitLog />
        <StudentCounter />
        <StudentGrid />
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