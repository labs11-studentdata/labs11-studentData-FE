import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputAdornment from '@material-ui/core/InputAdornment';

import Button from '@material-ui/core/Button';

// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';

function MyAccountForm(props) {
    return (
        
        <form className='editStudentModal' noValidate autoComplete="off"  >
        <Grid
        container
        spacing={24}
        flex-direction="column"
        display="flex"
        justify="center"
        alignItems="center"
        maxwidth="800px"
        >
    <Grid className='labelContainer' item>
    <InputLabel htmlFor="filled-first_name-simple">First Name</InputLabel>

      <TextField
                  className='labelSelection'

        id="filled-name"
        value={props.user.first_name}
        onChange={props.handleInputChange}
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
        value={props.user.last_name}
        onChange={props.handleInputChange}
        name="last_name"
        margin="normal"
        variant="filled"

      />
    </Grid>
          <Grid item>
            <TextField
              id="filled-name"
              label="Photo URL"

              value={props.user.photo_url}
              onChange={props.handleInputChange}

              name='photo_url'

              margin="normal"
              variant="filled"
            />
          </Grid>

      <Button id='editStudent' variant='outlined' type="submit">Save Changes</Button>
</Grid>
      </form>
    )
}

export default MyAccountForm;