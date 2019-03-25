import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VisitLog, StudentCounter, StudentTable, IssuesTracker } from '../components/index';

class BoardDashboard extends Component {

  state = {
    students: [],
    total: this.students.length
  }

  componentDidMount() {
    this.setState({

    })
  }

  render(){
    return (
      <div className='admin-db'>
        <VisitLog />
        <StudentCounter total={this.state.total}/>
        <StudentTable students={this.state.students}/>
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