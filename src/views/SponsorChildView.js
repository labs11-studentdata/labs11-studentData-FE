import React, { Component } from 'react';
import { SponsorChildComponent } from '../components'

const mock = [
    
    {
    "student_id": 1,
    "student_fname": "Filippo",
    "student_lname": "Hooban",
    "about": "extend synergistic technologies",
    "dues": "$353.93",
    "img": "https://images.unsplash.com/photo-1527091924146-90bcd50aedde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 2,
    "student_fname": "Kip",
    "student_lname": "Swinerd",
    "about": "enhance integrated systems",
    "dues": "$305.49",
    "img": "https://images.unsplash.com/photo-1487546511569-62a31e1c607c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 3,
    "student_fname": "Zachery",
    "student_lname": "Gaynes",
    "about": "architect robust solutions",
    "dues": "$1269.87",
    "img": "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 4,
    "student_fname": "Clara",
    "student_lname": "Dunkerk",
    "about": "recontextualize plug-and-play mindshare",
    "dues": "$1378.83",
    "img": "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 5,
    "student_fname": "Josias",
    "student_lname": "Brabban",
    "about": "engineer killer technologies",
    "dues": "$1454.04", 
    "img": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },{
    "student_id": 1,
    "student_fname": "Filippo",
    "student_lname": "Hooban",
    "about": "extend synergistic technologies",
    "dues": "$353.93",
    "img": "https://images.unsplash.com/photo-1527091924146-90bcd50aedde?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 2,
    "student_fname": "Kip",
    "student_lname": "Swinerd",
    "about": "enhance integrated systems",
    "dues": "$305.49",
    "img": "https://images.unsplash.com/photo-1487546511569-62a31e1c607c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 3,
    "student_fname": "Zachery",
    "student_lname": "Gaynes",
    "about": "architect robust solutions",
    "dues": "$1269.87",
    "img": "https://images.unsplash.com/photo-1485110168560-69d4ac37b23e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 4,
    "student_fname": "Clara",
    "student_lname": "Dunkerk",
    "about": "recontextualize plug-and-play mindshare",
    "dues": "$1378.83",
    "img": "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }, {
    "student_id": 5,
    "student_fname": "Josias",
    "student_lname": "Brabban",
    "about": "engineer killer technologies",
    "dues": "$1454.04", 
    "img": "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }]

class SponsorChildView extends Component {
    state = {
        students: mock
    }

    componentDidMount() {

    }

    render() {
        return (
            <SponsorChildComponent students={this.state.students}/>
        )
    }
}

export default SponsorChildView;
