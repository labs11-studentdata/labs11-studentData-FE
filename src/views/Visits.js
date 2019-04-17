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
    userID: this.props.userID
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
    console.log(visit)
  }

  addVisit = (visit) => {
    axios.post(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits`, visit)
        .then(res => {
            let id = res.data[0]
            console.log(id)
            axios.get(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/user/${this.state.userID}`)
              .then(res => {
                this.setState({ visits: res.data });
                axios.get(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/${id}`)
                  .then(res => {
                    this.setState({ selectedVisit: res.data[0] });
                  })
                  .catch(err => {
                    console.log(err.message)
                  });
              })
              .catch(err => {
                console.log(err.message)
              });
        })
        .catch(err => {
            console.log(err.message)
        })
    this.setState({addOpen: false})
  }

  reload = e => {
    axios.get(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/user/${this.state.userID}`)
      .then(res => {
        this.setState({ visits: res.data });
      })
      .catch(err => {
        console.log(err.message)
      });
    this.setState({selectedVisit: null})
  }

  update = ( date, notes ) => {
    let updated = this.state.selectedVisit
    updated.visit_date = date;
    updated.notes = notes;
    this.setState({selectedVisit: updated})
  }

  componentDidMount() {
    this.setState({userID: this.props.userID})
    console.log(this.state.userID)
  
    axios.get(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/user/${this.state.userID}`)
      .then(res => {
        this.setState({ visits: res.data });
      })
      .catch(err => {
        console.log(err.message)
      });
  }
  


  render(){
    let displayedComponent = null;
  
    if( this.state.addOpen === false && this.state.editOpen === true) { displayedComponent = <UpdateVisit visit={this.state.selectedVisit} update={this.update} cancelEdit={this.cancelEdit} />;}
    else if( this.state.addOpen === true ) {displayedComponent = <AddVisit cancelAdd={this.cancelAdd} addVisit={this.addVisit} userID={this.state.userID} />}
    else if( this.state.selectedVisit ) {displayedComponent = <SingleVisit visit={this.state.selectedVisit} reload={this.reload} openEdit={this.openEdit} />}
    return (
      <div className="visits-container">
        <div className="visits-list">
        {/* <div className='visit-list'>
          <div className="list-header">
              <span>Date</span>
              <span>School</span>
              <Button variant="outlined" className="add-visit-btn" onClick={this.openAdd}>
              Add Visit
              </Button>
          </div>

          <div className="list-body">
            {props.visits.map(visit => {
              return(
                <div className="list-item" value={visit.id} onClick={this.setSelectedVisit}>
                  <span>{visit.visit_date}</span>
                  <span>{visit.school_name}</span>
                </div>
              )
            })}
          </div>
        </div> */}
        <VisitsByUser visits={this.state.visits} openAdd={this.openAdd} visitOnClick={this.setSelectedVisit} />
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