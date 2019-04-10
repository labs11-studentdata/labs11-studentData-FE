import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

function CreateASchoolForm(props){
        return (
            <div className='schoolFormContainer'>
                

            <h4>Don't see your school? Create it here.</h4>
              <form noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="School Name"
              name="school_name"
              value={props.school.school_name}
              onChange={(e) => props.handleSchoolChanges(e)}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Location"
              name="location"
              value={props.school.location}
              onChange={(e) => props.handleSchoolChanges(e)}
              margin="normal"
            />
            <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={(e) => props.handleSchoolSubmit(e)}
        >
          Add School
        </Button>
            </form>
            </div>
        )
    }

export default CreateASchoolForm;