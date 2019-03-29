import React, { Component } from 'react';
import axios from 'axios';
import { AllVisits, VisitsBySchool, AddVisit } from '../components/index';

class SocialWorkerView extends Component {

    //I'm going to hide the addnot view by default and then make it an overlaying modal later
  state = {
    schoolID: null,
    visits: [],
    sortedVisits: [],
    addvisit: "hidden"
  }

  componentDidMount() {
    axios.get(`http://18.188.246.0:9000/api/social_worker_visits`)
            .then(res => {
                this.setState({ visits: res.data })
            })
            .catch(err => {
                console.log(err.message)
            })
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

export default SocialWorkerView;