import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import axios from 'axios';

class CreateASchoolForm extends Component{
    
    state = {
        school: {
            schoolID: 0
        }
    }
    handleChanges = (e) => {
        this.setState({
            ...this.state,
            school: {
                ...this.state.school,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const school = this.state.school
        axios.post('/api/schools/', school)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    render() {
        
        return (
            <div className='schoolFormContainer'>
                    {this.props.school.schoolID ? <h1> Joining {this.props.school.school_name} as a {this.props.selected} </h1>: <h1>Please select a school </h1>}

            <h2>Create A school</h2>
              <form noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="School Name"
              name="school_name"
              value={this.props.school.school_name}
              onChange={(e) => this.props.handleSchoolChanges(e)}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Location"
              name="location"
              value={this.props.school.location}
              onChange={(e) => this.props.handleSchoolChanges(e)}
              margin="normal"
            />
            <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={(e) => this.props.handleSchoolSubmit(e)}
        >
          Add School
        </Button>
            </form>
            </div>
        )
    }
    
}

export default CreateASchoolForm;