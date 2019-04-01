import React, { Component } from 'react';
import axios from 'axios';
import { AllVisits, VisitsBySchool, AddVisit } from '../components/index';
import { connect } from 'react-redux';

class SocialWorkerView extends Component {

    //I'm going to hide the addnot view by default and then make it an overlaying modal later
  state = {
    schoolID: null,
    visits: [],
    sortedVisits: [],
    addvisit: "hidden"
  }

  componentDidMount() {
    this.props.getVisitsByUserId(); //this needs to be passed the user ID that gets mapped to props
    this.props.getSchools();
    this.props.getStudents();
    this.setState({
      ...state,
      visits: this.props.visits
    });
  }

  render(){
    return (
      <div className='socialWorkerDash'>
        <AllVisits visits={this.state.visits} />
        <AddVisit className={this.state.addvisit}/>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  //these are references to the redux store reducers
  return {
    fetching: state.students.fetching,
    fetched: state.students.fetched,
    schools: state.schools.schools,
    visits: state.visits.visits,
    error: state.students.error,
    students: state.students.students,
    //user_id: this needs to pull user id from Leianne's stored login info
  }
}

export default connect(mapStateToProps, getSchools, getStudents, getVisitsByUserId)(SocialWorkerView);