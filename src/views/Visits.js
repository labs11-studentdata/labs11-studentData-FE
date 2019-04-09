import React, { Component } from 'react';
import axios from 'axios';
import { VisitsByUser, UpdateVisit, AddVisit, SingleVisit } from '../components/index';
import '../styles/VisitsStyles.css';

import { connect } from 'react-redux';

class Visits extends Component {
  state = {
    userID: "",
    visits: [],
    addOpen: false,
    editOpen: false,
    selectedVisit: null,
    selectedVisitSchool: ""
  }

  openAdd = e => {
    this.setState({addOpen: true, editOpen: false})
  }

  cancelAdd = e => {
    this.setState({addOpen: false})
  }

  openEdit = e => {
    this.setState({editOpen: true})
  }

  cancelEdit = e => {
    this.setState({editOpen: false})
  }

  setSelectedVisit = (visit) => {
    this.setState({selectedVisit: visit})
  }

  componentDidMount() {
    this.setState({userID: this.props.userID})
  
    axios.get(`${process.env.REACT_APP_BE_URL}/api/visits/${this.state.userID}`)
      .then(res => {
        this.setState({ visits: res.data });
      })
      .catch(err => {
        console.log(err.message)
      });

    this.state.visits.forEach(visit => {
      const id = visit.schoolID

      axios.get(`${process.env.REACT_APP_BE_URL}/api/schools/${id}`)
        .then(res => {
          visit.school = res.data
        })
        .catch(err => {
          console.log(err.message)
        });
    })
  }
  


  render(){
    let displayedComponent = null;
  
    if( this.state.addOpen === false && this.state.editOpen === true) { displayedComponent = <UpdateVisit visit={this.state.selectedVisit} cancelEdit={this.cancelEdit} />;}
    else if( this.state.addOpen === true ) {displayedComponent = <AddVisit cancelAdd={this.cancelAdd} />}
    else if( this.state.selectedVisit) {displayedComponent = <SingleVisit visit={this.state.selectedVisit} openEdit={this.openEdit} />}
    return (
      <div className="visits-container">
        <div className="visits-list">
          <VisitsByUser visits={this.state.visits} openAdd={this.openAdd} />
        </div>
        <div className="visit-display">
          {displayedComponent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    userID: state.login.user.user_id
  }
}

export default connect(mapStateToProps, {})(Visits);