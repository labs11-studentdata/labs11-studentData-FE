import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

import InputLabel from '@material-ui/core/InputLabel';

function OnboardingForm(props){
    return (
        <form >
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Enter School email</InputLabel>
          <Input onChange={(e) => props.handleChanges(e)} id="email" name="email" autoComplete="email" value={props.user.email} autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          {/* <InputLabel htmlFor="photo_url">Add a photo url</InputLabel>
          <Input name="photo_url" value={props.user.photo_url} onChange={(e) => props.handleChanges(e)} id="photo_url" /> */}
            <input type="file" name="userImage" onChange={props.fileSelectHandler}/>
            <Button
              onClick={props.fileUploadHandler}>
                  Upload
                </Button>
        </FormControl>
      </form>
    )
}

export default OnboardingForm;