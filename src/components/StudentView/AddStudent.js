import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {

          id: null,
          gradeID: null,
          first_name: null,
          last_name: null,
          age: null,
          schoolID: null,
          photo_url: null,
          enrollment_status: null,
          has_insurance: null,
          insurance_expiration: null,
          has_birthcert: null,
          dues: null,
          special_needs: null,
          contact_first_name: null,
          contact_last_name: null,
          contact_number: null,

        };   
    }

    addStudent = (e) => {

        e.preventDefault();
    
        axios
        .post(process.env.REACT_APP_BE_URL + '/api/students', this.state)
        .then(response => {
            console.log("server response", response.data);
        })
        .catch(e => {

          console.log("server error:", e.message);

        })


        console.log("adding student", this.state)

    }

    handleInputChange = event => {
      let name = event.target.name;
      let value = event.target.value;

      this.setState({

        ...this.state,
        [name]: value

      });
    };
 
    render() {
  
      console.log(this.state)
      console.log("props", this.props);
        return (
            <div>
            <Grid
              container
              spacing={24}
              direction="row"
              justify="center"
              alignItems="center"
            >

              <Paper>

              <h1>Add Student</h1>  
              <form noValidate autoComplete="off" onSubmit={this.addStudent}>
              <Grid item>
                <TextField
                  id="filled-name"
                  label="First Name"

                  value={this.state.first_name}
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

                  value={this.state.last_name}
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

                  value={this.state.age}
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

                  value={this.state.gradeID}
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

                  value={this.state.schoolID}
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

                  value={this.state.photo_url}
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

                  value={this.state.enrollment_status}
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

                  value={this.state.has_insurance}
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

                  value={this.state.insurance_expiration}
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

                  value={this.state.has_birthcert}
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

                  value={this.state.dues}
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

                  value={this.state.special_needs}
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

                  value={this.state.contact_first_name}
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

                  value={this.state.contact_last_name}
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

                  value={this.state.contact_number}
                  onChange={this.handleInputChange}

                  name='contact_number'

                  margin="normal"
                  variant="filled"
                />
              </Grid>
              
              <br></br>
              
              <Button type="submit">Add Student</Button>

              </form>

                <Link to={`/admin`}>
                        <Button>Cancel</Button>
                </Link>

              </ Paper>
            </Grid>
            </div>


          
        )
    }
}

export default AddStudent;