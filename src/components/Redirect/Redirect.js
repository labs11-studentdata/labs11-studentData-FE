import React from 'react'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = {
  message: {
    marginTop: 200,
  },
};

const Redirect = props => {
  const { classes } = props;
  const token = localStorage.getItem('jwt');
  if(token === null){
    props.history.push(`${process.env.REACT_APP_FE_ROOT}/home`);
  } else if (token.includes("account_type=admin")){
    props.history.push(`${process.env.REACT_APP_FE_ROOT}/admindashboard`);
  } else if (token.includes("account_type=socialworker")) {
    props.history.push(`${process.env.REACT_APP_FE_ROOT}/socialworkerdashboard`);
  } else if (token.includes("account_type=boardmember")) {
    props.history.push(`${process.env.REACT_APP_FE_ROOT}/boardmemberdashboard`);
  } else {
    props.history.push(`${process.env.REACT_APP_FE_ROOT}/onboarding`);
  }

  return (
    <Typography variant="h4" className={ classes.message }>
      REDIRECTING PLEASE WAIT...
    </Typography>
  )
}

export default withRouter(withStyles(styles)(Redirect));
