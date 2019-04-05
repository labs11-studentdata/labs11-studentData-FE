import React, { Component } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {

          student: this.props.student

        };   
    }

    componentDidUpdate(){

      if(this.state.student.student_id === null){
        this.setState({...this.props.student});
      }

    }

    editStudent = (e) => {

        e.preventDefault();
    
        console.log(this.state.student);

        axios
        .put(process.env.REACT_APP_BE_URL + `/api/students/${this.state.student.student_id}`, this.state.student)
        .then(response => {
            console.log("server response", response.data);
        })
        .catch(e => {

          console.log("server error:", e.message);

        })


        console.log("requesting update", this.state)

    }

    handleInputChange = event => {
      let name = event.target.name;
      let value = event.target.value;

      console.log(value);

      this.setState({

        ...this.state,
        student: {...this.state.student, [name]: value}

      });
    };
 
    render() {
  
      console.log(this.state)
      console.log("props", this.props);
        return (
              <div>
              <h1>Edit Student</h1><br></br>  


              <form noValidate autoComplete="off" style={{height: "50%", width: "75%", display: 'flex', flexDirection: 'row'}} onSubmit={this.editStudent}>
              <Grid
              container
              spacing={24}
              flex-direction="column"
              display="flex"
              justify="center"
              alignItems="center"
              maxWidth="800px"
              >
              <Grid item>
                  <TextField
                    id="filled-name"
                    label="First Name"

                    value={this.state.student.first_name}
                    onChange={this.handleInputChange}

                    name='first_name'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Last Name"

                    value={this.state.student.last_name}
                    onChange={this.handleInputChange}

                    name='last_name'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Age"

                    value={this.state.student.age}
                    onChange={this.handleInputChange}

                    name='age'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Grade"

                    value={this.state.student.gradeID}
                    onChange={this.handleInputChange}

                    name='gradeID'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="School"

                    value={this.state.student.schoolID}
                    onChange={this.handleInputChange}

                    name='schoolID'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Photo URL"

                    value={this.state.student.photo_url}
                    onChange={this.handleInputChange}

                    name='photo_url'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Enrollment Status"

                    value={this.state.student.enrollment_status}
                    onChange={this.handleInputChange}

                    name='enrollment_status'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Insurance"

                    value={this.state.student.has_insurance}
                    onChange={this.handleInputChange}

                    name='has_insurance'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Insurance Expiration"

                    value={this.state.student.insurance_expiration}
                    onChange={this.handleInputChange}

                    name='insurance_expiration'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Birth Certificate"

                    value={this.state.student.has_birthcert}
                    onChange={this.handleInputChange}

                    name='has_birthcert'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Dues"

                    value={this.state.student.dues}
                    onChange={this.handleInputChange}

                    name='dues'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Special Needs"

                    value={this.state.student.special_needs}
                    onChange={this.handleInputChange}

                    name='special_needs'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Contact First Name"

                    value={this.state.student.contact_first_name}
                    onChange={this.handleInputChange}

                    name='contact_first_name'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Contact Last Name"

                    value={this.state.student.contact_last_name}
                    onChange={this.handleInputChange}

                    name='contact_last_name'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>

                <Grid item>
                  <TextField
                    id="filled-name"
                    label="Contact Phone"

                    value={this.state.student.contact_number}
                    onChange={this.handleInputChange}

                    name='contact_number'

                    margin="normal"
                    variant="filled"
                  />
                </Grid>
                          
            </Grid>

            <Button variant='outlined' type="submit">Save Changes</Button>

            </form>

            </div>
        )
    }
}

export default EditStudent;