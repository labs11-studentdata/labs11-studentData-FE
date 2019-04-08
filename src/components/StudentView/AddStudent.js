import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addStudent, getAdminStudents } from "../../actions/admin";
import DropDownMenu from "@material-ui/core/MenuList";
import Select from '@material-ui/core/Select';

import MenuItem from "@material-ui/core/MenuItem";
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      student: {
        schoolID: "",
        student_id: 0
      },
      value: 2
    };
  }
  componentDidUpdate() {
    console.log("*************CWRP*************");
  }
  componentDidMount() {
    console.log("**********SECOND**CDM************");
    console.log(this.state);
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        schoolID: this.props.schoolID
      }
    });
    this.props.getAdminStudents(this.state.user_id);
    console.log("************CDM********TWO");
  }
  addStudent = e => {
    e.preventDefault();
    this.props.addStudent(this.state.student);
    this.props.getAdminStudents(this.state.user_id);
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <form
        className="addStudentModel"
        noValidate
        autoComplete="off"
        onSubmit={this.addStudent}
      >
        <Grid
          container
          spacing={24}
          flex-direction="column"
          display="flex"
          justify="center"
          alignItems="center"
          maxWidth="800px"
          id="form"
        >
          <Grid item>
            <TextField
              id="filled-name"
              label="First Name"
              value={this.state.student.first_name}
              onChange={this.handleInputChange}
              name="first_name"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Last Name"
              value={this.state.student.last_name}
              onChange={this.handleInputChange}
              name="last_name"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Age"
              type="number"
              value={this.state.student.age}
              onChange={this.handleInputChange}
              name="age"
              margin="normal"
            />
          </Grid>

          <Grid item>
          <TextField
              id="filled-name"
              label="grade"
              type="number"
              value={this.state.student.grade}
              onChange={this.handleInputChange}
              name="gradeID"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Photo URL"
              value={this.state.student.photo_url}
              onChange={this.handleInputChange}
              name="photo_url"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Enrollment Status"
              value={this.state.student.enrollment_status}
              onChange={this.handleInputChange}
              name="enrollment_status"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Insurance"
              value={this.state.student.has_insurance}
              onChange={this.handleInputChange}
              name="has_insurance"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Insurance Expiration"
              value={this.state.student.insurance_expiration}
              onChange={this.handleInputChange}
              name="insurance_expiration"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Birth Certificate"
              value={this.state.student.has_birthcert}
              onChange={this.handleInputChange}
              name="has_birthcert"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Dues"
              value={this.state.student.dues}
              onChange={this.handleInputChange}
              name="dues"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Special Needs"
              value={this.state.student.special_needs}
              onChange={this.handleInputChange}
              name="special_needs"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Contact First Name"
              value={this.state.student.contact_first_name}
              onChange={this.handleInputChange}
              name="contact_first_name"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Contact Last Name"
              value={this.state.student.contact_last_name}
              onChange={this.handleInputChange}
              name="contact_last_name"
              margin="normal"
            />
          </Grid>

          <Grid item>
            <TextField
              id="filled-name"
              label="Contact Phone"
              value={this.state.student.contact_number}
              onChange={this.handleInputChange}
              name="contact_number"
              margin="normal"
            />
          </Grid>
        </Grid>

        <Button variant="outlined" type="submit">
          Add Student
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log("*******FIRST*****MSTP************");
  console.log(state);
  return {
    schoolID: parseInt(state.login.user.schoolID)
  };
};

export default connect(
  mapStateToProps,
  { addStudent, getAdminStudents }
)(AddStudent);
