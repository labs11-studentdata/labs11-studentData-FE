import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  message: {
    marginTop: 200,
  },
};

const Redirect = props => {
  const { classes } = props;
  return (
    <Typography variant="h4" className={ classes.message }>
      REDIRECTING PLEASE WAIT...
    </Typography>
  )
}

export default withStyles(styles)(Redirect);
