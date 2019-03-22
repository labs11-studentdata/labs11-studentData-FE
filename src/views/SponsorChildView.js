import React, { Component } from 'react';
import axios from 'axios';
import { SponsorChildComponent } from '../components';
const mock = [
    
    {
    "student_id": 1,
    "first_name": "Filippo",
    "last_name": "Hooban",
    "about": "extend synergistic technologies",
    "dues": "$353.93",
    "img": "https://images.unsplash.com/photo-1527091924146-90bcd50aedde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 2,
    "first_name": "Kip",
    "last_name": "Swinerd",
    "about": "enhance integrated systems",
    "dues": "$305.49",
    "img": "https://images.unsplash.com/photo-1487546511569-62a31e1c607c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 3,
    "first_name": "Zachery",
    "last_name": "Gaynes",
    "about": "architect robust solutions",
    "dues": "$1269.87",
    "img": "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 4,
    "first_name": "Clara",
    "last_name": "Dunkerk",
    "about": "recontextualize plug-and-play mindshare",
    "dues": "$1378.83",
    "img": "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 5,
    "first_name": "Josias",
    "last_name": "Brabban",
    "about": "engineer killer technologies",
    "dues": "$1454.04", 
    "img": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },{
    "student_id": 6,
    "first_name": "Filippo",
    "last_name": "Hooban",
    "about": "extend synergistic technologies",
    "dues": "$353.93",
    "img": "https://images.unsplash.com/photo-1527091924146-90bcd50aedde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 7,
    "first_name": "Kip",
    "last_name": "Swinerd",
    "about": "enhance integrated systems",
    "dues": "$305.49",
    "img": "https://images.unsplash.com/photo-1487546511569-62a31e1c607c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 8,
    "first_name": "Zachery",
    "last_name": "Gaynes",
    "about": "architect robust solutions",
    "dues": "$1269.87",
    "img": "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 9,
    "first_name": "Clara",
    "last_name": "Dunkerk",
    "about": "recontextualize plug-and-play mindshare",
    "dues": "$1378.83",
    "img": "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 10,
    "first_name": "Josias",
    "last_name": "Brabban",
    "about": "engineer killer technologies",
    "dues": "$1454.04", 
    "img": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }]

class SponsorChildView extends Component {
    state = {
        students: mock, 
        selectedStudent: {}
    }

    componentDidMount() {
      axios.get('http://localhost:9000/api/students')
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
