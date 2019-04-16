import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// const {schools, socialSchoolSelect} = props;
// // schoolSelect(schoolID)

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    // margin: theme.spacing.unit,
    minWidth: 200,
    margin: '0 auto',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class BoardSocialSchoolSelect extends React.Component {

  handleChange = event => {
    this.props.socialSchoolSelect(event.target.value);
  }

  render(){
    const  classes  = this.props.classes
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="school-select" >School</InputLabel>
          <Select
            value={this.props.schoolID}
            onChange={this.handleChange}
            inputProps={{
              name: 'schoolID',
              id: 'school-select',
            }}
          >
            {this.props.schools.map(school => {
              return (
              <MenuItem value={school.schoolID}>
                {school.school_name}
              </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </form>
    )
  }
}

export default withStyles(styles)(BoardSocialSchoolSelect);
