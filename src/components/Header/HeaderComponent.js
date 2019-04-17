import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/core/IconButton';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    // flexGrow: 1,
    display: "inline-block",
    // maxWidth: 200,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
  },
  container: {
    width: '100%',
    maxWidth: 1300,
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto'
  },
};
function HeaderComponent(props) {
  const { classes } = props;
  if (props.loggedIn) {
    const photo = props.photo && props.photo.replace(/ /g, "%20")
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <div className={classes.container}>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                SchoolMe
              </Typography>
              <div className='headerBtns'>
                {window.location.href.includes('myaccount') && <Button color="inherit" href={`${props.accountType}dashboard`} variant='outlined'> Dashboard </Button>}
                {!window.location.href.includes('myaccount') && <AccountCircle href='/myaccount' style={{ backgroundSize: "auto 100%", backgroundPosition: "center", width: "40px", height: "40px", backgroundImage: `url(${photo})`}} />}
                <Button color="inherit" onClick={props.handleLogout} variant='outlined'>
                  Logout
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
     
            <Typography variant="h6" color="inherit" className={classes.grow}>
             <a style={{color: "white", textDecoration: "none"}} href={`${process.env.REACT_APP_FE_ROOT}`}>SchoolMe</a> 
            </Typography>
            <Button color="inherit" onClick={(e) => props.registerSubmit(e)}>
              {props.isRegistering ? 'Login' : 'Register'}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderComponent);
