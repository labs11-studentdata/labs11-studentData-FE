import React, { Component } from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { EditStudent } from '../components';


class StudentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          student: {},
        };   
    }

    componentDidMount() {
      
      const id = this.props.match.params.id;
      
      console.log(id);

      axios.get(`${process.env.REACT_APP_BE_URL}/api/students/${id}`)
        .then(res => {

          console.log(res.data);

          this.setState({
            student: res.data[0]
          })
        })
        .catch(err => console.log(err))
    }

    render() {
  
      console.log(this.state)
        return (
          
					<div>
            <Grid   
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
            <img 
                alt={`Photo of ${this.state.student.first_name} ${this.state.student.last_name}`} 
                src={`${this.state.student.photo_url}`} 
                height='400' width='400'
            />

            <div>
              <Typography variant='h2'>
                <p>{this.state.student.first_name} {this.state.student.last_name}</p>
              </Typography>

              <Typography variant='h5'>
                <p>Grade Level: {this.state.student.gradeID}</p>
              </Typography>

              <Typography variant='h3'>
                <p>Student Info</p>
              </Typography>

              <Typography variant='body1'>
                <p>School: {this.state.student.schoolID}</p>
                <p>Enrollment Status: {this.state.student.enrollment_status}</p>
                <p>Special Needs: {this.state.student.special_needs}</p>
                <p>Dues: {this.state.student.dues}</p>
                <p>Insurance: {this.state.student.has_insurance}</p>
                <p>Expiration: {this.state.student.insurance_expiration}</p>
                <p>Birth Certificate: {this.state.student.has_birthcert}</p>
                <p>Age: {this.state.student.age}</p>

                <p>Contact Name: {this.state.student.contact_first_name} {this.state.student.contact_last_name}</p>
                <p>Contact Phone: {this.state.student.contact_number}</p>
              </Typography>
            </div>

            </Grid>

            <EditStudent student={this.state.student}/>
					</div>

        )
    }
}

export default StudentView;