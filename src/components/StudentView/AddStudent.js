import React, { Component } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addStudent, getAdminStudents } from "../../actions/admin";
import DropDownMenu from "@material-ui/core/MenuList";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

import axios from 'axios';
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
    console.log(this.state)
  };

  fileSelectHandler = event => {
    console.log(event.target.files[0]);
    
    const selectedFile = event.target.files[0];

    const fd = new FormData();
    fd.append('userImage', selectedFile, selectedFile.name);

    console.log(fd);
  
    axios.post(process.env.REACT_APP_BE_URL + '/api/uploads', fd)
        .then(response => {
  
          console.log("server response", response);
          this.setState({
            ...this.state, 
  
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

/*   fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('userImage', this.state.selectedFile, this.state.selectedFile.name);

    axios.post(process.env.REACT_APP_BE_URL + '/api/uploads', fd)
        .then(response => {
          this.setState({
            ...this.state, 

            student: {
              ...this.state.student,
              photo_url: `${process.env.REACT_APP_BE_URL}/${response.data}` 
            }
        
          });

        })
        .catch(e => {
            console.log("server error:", e.message);
        })
  } */

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
          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-first_name-simple">First Name</InputLabel>

            <TextField
                        className='labelSelection'

              id="filled-name"
              value={this.state.student.first_name}
              onChange={this.handleInputChange}
              name="first_name"
              margin="normal"
              variant="filled"

            />
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-last_name-simple">Last Name</InputLabel>

            <TextField
                        className='labelSelection'

              id="filled-name"
              value={this.state.student.last_name}
              onChange={this.handleInputChange}
              name="last_name"
              margin="normal"
              variant="filled"

            />
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-age-simple">Age</InputLabel>

            <TextField
                        className='labelSelection'

              id="filled-name"
              type="number"
              value={this.state.student.age}
              onChange={this.handleInputChange}
              name="age"
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-grade-simple">Grade</InputLabel>

          {/* <TextField
              id="filled-name"
              type="number"
              value={this.state.student.grade}
              onChange={this.handleInputChange}
              name="grade"
              margin="normal"
              variant="filled"

            /> */}
            <Select
            className='labelSelection'
              value={this.state.student.grade}
              onChange={this.handleInputChange}
              input={<FilledInput name="grade" id="filled-grade-simple" />}
            >
              <MenuItem value="Pre-K">Pre-K</MenuItem>
              <MenuItem value="1st">1st</MenuItem>
              <MenuItem value="2nd">2nd</MenuItem>
              <MenuItem value="3rd">3rd</MenuItem>
              <MenuItem value="4th">4th</MenuItem>
              <MenuItem value="5th">5th</MenuItem>
              <MenuItem value="6th">6th</MenuItem>
              <MenuItem value="7th">7th</MenuItem>
              <MenuItem value="8th">8th</MenuItem>
              <MenuItem value="9th">9th</MenuItem>
              <MenuItem value="10th">10th</MenuItem>
              <MenuItem value="11th">11th</MenuItem>
              <MenuItem value="12th">12th</MenuItem>
            </Select>
          </Grid>

          <Grid className='labelContainer' item>
            {/* <TextField
              id="filled-name"
              label="Photo URL"
              value={this.state.student.photo_url}
              onChange={this.handleInputChange}
              name="photo_url"
              margin="normal"
            /> */}

            <input type="file" name="userImage" onChange={this.fileSelectHandler}/>
            
            {/*<button onClick={this.fileUploadHandler}>Upload</button>*/}
          </Grid>

          <Grid className='labelContainer' item>
            <InputLabel variant="filled" htmlFor="filled-enrollment_status-simple">Enrollment Status</InputLabel>
            <Select
              value={this.state.student.enrollment_status}
              onChange={this.handleInputChange}
              input={<FilledInput name="enrollment_status" id="filled-enrollment_status-simple" />}
            >
              <MenuItem value="Current">Current</MenuItem>
              <MenuItem value="Removed">Removed</MenuItem>
              <MenuItem value="Graduated">Graduated</MenuItem>

            </Select>
          </Grid>

          <Grid  className='labelContainer' item>
            <InputLabel variant="filled" htmlFor="filled-has_insurance-simple">Insurance</InputLabel>
            <Select
                        className='labelSelection'

              value={this.state.student.has_insurance}
              onChange={this.handleInputChange}
              input={<FilledInput name="has_insurance" id="filled-has_insurance-simple" />}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={0}>No</MenuItem>
            </Select>
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-insurance_expiration-simple">Insurance Expiration</InputLabel>

            {/* <TextField
                        className='labelSelection'

              id="filled-name"
              value={this.state.student.insurance_expiration}
              onChange={this.handleInputChange}
              name="insurance_expiration"
              margin="normal"
              variant="filled"

            /> */}
            <TextField
              id="filled-name"
        type="date"
        onChange={this.handleInputChange}
        name="insurance_expiration"

        value={this.state.student.insurance_expiration}
        InputLabelProps={{
          shrink: true,
        }}
      />
          </Grid>

          <Grid  className='labelContainer' item>
             <InputLabel htmlFor="filled-has_birthcert-simple">Birth Certificate</InputLabel>
            <Select
                        className='labelSelection'
                        variant="filled"

              value={this.state.student.has_birthcert}
              onChange={this.handleInputChange}
              input={<FilledInput name="has_birthcert" id="filled-has_birthcert-simple" />}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={0}>No</MenuItem>
            </Select>
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="adornment-dues">Dues</InputLabel>
          <TextField
            id="adornment-dues"
            name='dues'
            variant="filled"

            value={this.state.student.dues}
            onChange={this.handleInputChange}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}          />
          </Grid>

          <Grid  className='labelContainer' className='labelContainer' item>
            <InputLabel htmlFor="filled-special_needs-simple">Special Needs</InputLabel>
            <Select
                          variant="filled"

                        className='labelSelection'

              value={this.state.student.special_needs}
              onChange={this.handleInputChange}
              input={<FilledInput name="special_needs" id="filled-special_needs-simple" />}
            >
              <MenuItem value={1}>Yes</MenuItem>
              <MenuItem value={0}>No</MenuItem>
            </Select>
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-contact_first_name-simple">Contact First Name</InputLabel>

            <TextField
                        className='labelSelection'
                        variant="filled"

              id="filled-name"
              value={this.state.student.contact_first_name}
              onChange={this.handleInputChange}
              name="contact_first_name"
              margin="normal"
            />
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-contact_last_name-simple">Contact Last Name</InputLabel>

            <TextField
                        className='labelSelection'
                        variant="filled"

              id="filled-name"
              value={this.state.student.contact_last_name}
              onChange={this.handleInputChange}
              name="contact_last_name"
              margin="normal"
            />
          </Grid>

          <Grid className='labelContainer' item>
          <InputLabel htmlFor="filled-contact_phone_number-simple">Contact Phone Number</InputLabel>

            <TextField
                        className='labelSelection'
                        variant="filled"

              id="filled-name"
              value={this.state.student.contact_number}
              onChange={this.handleInputChange}
              name="contact_number"
              margin="normal"
            />
          </Grid>
        </Grid>

        <Button id='addStudent' variant="outlined" type="submit">
          Add Student
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    schoolID: parseInt(state.login.user.schoolID)
  };
};

export default connect(
  mapStateToProps,
  { addStudent, getAdminStudents }
)(AddStudent);
