import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../components/SponsorAChild/SponsorAChild.css"

import { SchoolSelect, EditStudentModal } from '../components'
//import { DeleteStudent } from '../components';
import {getStudents, getSchools, } from '../actions/index';
import AddStudentModal from '../components/StudentView/AddStudentModal';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          students: [],
          schools: [],
        };   
    }

    componentDidMount() {
      //this hits the endpoints listed in actions/index.js and populates the redux store
      this.props.getStudents();
      this.props.getSchools();
      this.setState({
        ...this.state,
        students: this.props.students,
        schools: this.props.schools
      })
    }
      
    setClass = (e, schoolID, gradeID) => {
      e.preventDefault();
      if(schoolID === 'all' && gradeID === 'all'){
        this.setState({
          ...this.state,
          schoolID: schoolID,
          gradeID: gradeID,
          students: this.props.students,
        })
      }
      else if (schoolID !== 'all' && gradeID === 'all'){
        this.setState({
          ...this.state,
          schoolID: schoolID,
          gradeID: gradeID,
          students: this.props.students.filter(student => student.schoolID === schoolID),
        })
      }
      else {
        this.setState({
          ...this.state,
          schoolID: schoolID,
          gradeID: gradeID,
          students: this.props.students.filter(student => (student.gradeID === gradeID) && (student.schoolID === schoolID)),
        });
      }
    }
    render() {
  
      console.log(this.state)
        return (
        <div>

          <div>

            <AddStudentModal />

            <SchoolSelect
              schools={this.props.schools}
              setClass={this.setClass}
              schoolID={this.state.schoolID}
              gradeID={this.state.gradeID}
            />

          </div>
            
            <div className='sponsorChildContainer'>
            <div className="studentCardContainer">

            {this.state.students.map(student => (
              <Card key={student.student_id} className="studentCard">
                
                <Link to={`/student/${student.student_id}`}>

                <CardActionArea>
                  
                  <CardMedia
                    className=""
                    component="img"
                    alt={`Photo of ${student.first_name} ${student.last_name}`}
                    height="140"
                    background-size="cover"
                    src={`${student.photo_url}`}
                    title={`Photo of ${student.first_name} ${student.last_name}`}
                  />     

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {`${student.first_name} ${student.last_name} `}
                    </Typography>
                    <Typography component="p" />
                  </CardContent>

                </CardActionArea>

                </Link>

                <CardActions>
                  <EditStudentModal {...this.state={student}}/>
                  <div> Status: </div>
                  <Typography gutterBottom color="secondary" component="p">
                    {`${student.enrollment_status}`}
                  </Typography>
                </CardActions>

              </Card>
            ))}

          </div>
          </div>

        </div>
      )
    }
}

const mapStateToProps = state => {
  //these are references to the redux store reducers
  return {
    fetching: state.students.fetching,
    fetched: state.students.fetched,
    students: state.students.students,
    schools: state.schools.schools,
    error: state.students.error,
  }
}

export default connect(mapStateToProps, {getStudents, getSchools})(AdminDashboard);