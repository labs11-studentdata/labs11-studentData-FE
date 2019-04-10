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
import axios from 'axios';
import MenuItem from "@material-ui/core/MenuItem";
class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      student: {
        schoolID: "",
      },
      value: 2
    };
  }
  
  componentDidMount() {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        schoolID: this.props.schoolID
      }
    });
  }
  addStudent = e => {
    const baseURL = process.env.REACT_APP_BE_URL;
    e.preventDefault();
    axios.post(`${baseURL}/api/students`, this.state.student)
        .then(res => {
          console.log(this.state.user_id)
          this.props.getAdminStudents(this.state.user_id)
          this.props.handleClose()
        })
        .catch(error => console.log(error))
  }

  handleInputChange = e => {
    this.setState({
      ...this.state,
      student: {
        ...this.state.student,
        [e.target.name]: e.target.value
      }
    });
  };

  fileSelectHandler = event => {
    console.log(event.target.files[0]);
    this.setState({
        selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('userImage', this.state.selectedFile, this.state.selectedFile.name);
    console.log(fd);

    axios.post(process.env.REACT_APP_BE_URL + '/api/uploads', fd)
        .then(response => {

            console.log("server response", response);
          this.setState({

            student: {
              ...this.state.student,
              photo_url: `${process.env.REACT_APP_BE_URL}/${response.data}` 
            }
        
          });

        })
        .catch(e => {
            console.log("server error:", e.message);
        })
  }

  render() {
    return (
      <form
        className="addStudentModel"
        noValidate
        autoComplete="off"
        onSubmit={(e) => this.addStudent(e)}
      >
        <Grid
          container
          spacing={24}
          flex-direction="column"
          display="flex"
          justify="center"
          alignItems="center"
          maxwidth="800px"
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
              name="grade"
              margin="normal"
            />
          </Grid>

          <Grid item>
            {/* <TextField
              id="filled-name"
              label="Photo URL"
              value={this.state.student.photo_url}
              onChange={this.handleInputChange}
              name="photo_url"
              margin="normal"
            /> */}

            <input type="file" name="userImage" onChange={this.fileSelectHandler}/>
            <button onClick={this.fileUploadHandler}>Upload</button>
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
  console.log('+++++MSTP ADD STUDENT++++++++++')
  console.log(state)
  return {
    schoolID: parseInt(state.login.user.schoolID)
  };
};

export default connect(
  mapStateToProps,
  { addStudent, getAdminStudents }
)(AddStudent);
