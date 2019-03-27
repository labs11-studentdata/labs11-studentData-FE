import React, { Component } from 'react';
import axios from 'axios';

//import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {

          student: this.props.student
          
        };   
    }

    editStudent = (e, id) => {

        e.preventDefault();
    
        const updatedStudent = {
            id: this.state.id,
            grade: this.state.gradeID,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            age: this.state.age,
            school: this.state.schoolID,
            photo: this.state.photo_url,
            enrollment_status: this.state.enrollment_status,
            insurance: this.state.insurance,
            insurance_expiration: this.state.insurance_expiration,
            birthcert: this.state.has_birthcert,
            dues: this.state.dues,
            special_needs: this.state.special_needs,
            contact_first_name: this.state.contact_first_name,
            contact_last_name: this.state.contact_last_name,
            contact_number: this.state.contact_number,
        }
    
        axios
        .put(`http://localhost:9000/api/students/${id}`, updatedStudent)
        .then(response => {
            this.setState({student: response.data})
        })
    }

    handleInputChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

    render() {
  
      //const { classes } = this.props;

      console.log(this.state)
        return (
            <div>
            <h1>Edit Student</h1>  
            <form noValidate autoComplete="off">

            <TextField
              id="filled-name"
              label="First Name"
              //className={classes.textField}
              value={this.state.student.first_name}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Last Name"
              //className={classes.textField}
              value={this.state.student.last_name}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Age"
              //className={classes.textField}
              value={this.state.student.age}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Grade"
              //className={classes.textField}
              value={this.state.student.gradeID}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />


            <TextField
              id="filled-name"
              label="School"
              //className={classes.textField}
              value={this.state.student.schoolID}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Photo URL"
              //className={classes.textField}
              value={this.state.student.photo_url}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Enrollment Status"
              //className={classes.textField}
              value={this.state.student.enrollment_status}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Insurance Expiration"
              //className={classes.textField}
              value={this.state.student.insurance_expiration}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Birth Certificate"
              //className={classes.textField}
              value={this.state.student.has_birthcert}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Dues"
              //className={classes.textField}
              value={this.state.student.dues}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Special Needs"
              //className={classes.textField}
              value={this.state.student.special_needs}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Contact First Name"
              //className={classes.textField}
              value={this.state.student.contact_first_name}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Contact Last Name"
              //className={classes.textField}
              value={this.state.student.contact_last_name}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-name"
              label="Contact Phone"
              //className={classes.textField}
              value={this.state.student.contact_number}
              onChange={this.handleInputChange}
              margin="normal"
              variant="filled"
            />
            
            </form>

            <Button onClick={this.editStudent}>Save Changes</Button>

            </div>


          
        )
    }
}

export default EditStudent;