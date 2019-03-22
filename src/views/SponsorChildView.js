import React, { Component } from 'react';
import axios from 'axios';
import { SponsorChildComponent } from '../components';

class SponsorChildView extends Component {
    state = {
        students: [], 
        selectedStudent: {}
    }

    componentDidMount() {
      axios.get('http://18.188.246.0:9000/api/students')
        .then(res => {
          this.setState({
            students: res.data
          })
        })
        .catch(err => console.log(err))
    }
    sponsorSelected = (e, student) => {
      e.preventDefault();
      this.setState({selectedStudent: student})
    }

    render() {
      console.log(this.state)
        return (
            <>
            <SponsorChildComponent sponsorSelected={this.sponsorSelected} selectedStudent={this.state.selectedStudent} students={this.state.students}/>
            </>
        )
    }
}

export default SponsorChildView;
