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
    props.history.push(`home`);
  } else if (token.includes("account_type=admin")){
    props.history.push(`admindashboard`);
  } else if (token.includes("account_type=socialworker")) {
    props.history.push(`socialworkerdashboard`);
  } else if (token.includes("account_type=boardmember")) {
    props.history.push(`boardmemberdashboard`);
  } else {
    props.history.push(`onboarding`);
  }

  return (
    <Typography variant="h4" className={ classes.message }>
      REDIRECTING PLEASE WAIT...
    </Typography>
  )
}

export default withRouter(withStyles(styles)(Redirect));
