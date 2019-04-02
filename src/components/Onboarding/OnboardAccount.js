import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';




const styles = theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
  });
  
  class OnboardAccount extends React.Component {

  
    render() {
        console.log(this.props)
      const { classes } = this.props;
        
      return (
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Please select account type</FormLabel>
            <RadioGroup
              aria-label="accounttype"
              name="accounttype"
              className={classes.group}
              value={this.props.value}
              onChange={this.props.accountTypeSelected}
            >
              <FormControlLabel
                value="admin"
                control={<Radio color="primary" />}
                label="School Administrator"
                labelPlacement="start"
              />
              <FormControlLabel
                value="socialworker"
                control={<Radio color="primary" />}
                name="Social Worker" 
                label="Social Worker"                

                labelPlacement="start"
              />
              <FormControlLabel
                value="boardmember"
                control={<Radio color="primary" />}
                label="Board Memeber"
                labelPlacement="start"
              />
              
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
  }
  

  
  export default withStyles(styles)(OnboardAccount);