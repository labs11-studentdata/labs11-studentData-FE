import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

import InputLabel from '@material-ui/core/InputLabel';

function OnboardingForm(props){
  console.log(process.env.REACT_APP_BE_URL)
    return (
        <form >
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Enter School email</InputLabel>
          <Input onChange={(e) => props.handleChanges(e)} id="email" name="email" autoComplete="email" value={props.user.email} autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="photo_url">Add a photo url</InputLabel>
          <Input name="photo_url" value={props.user.photo_url} onChange={(e) => props.handleChanges(e)} id="photo_url" />
        </FormControl>
      
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={(e) => props.handleSubmit(e)}
        >
          Continue
        </Button>
      </form>
    )
}

export default OnboardingForm;