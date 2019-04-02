import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
function HeaderComponent(props) {
  const { classes } = props;
  if (props.loggedIn) {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              SchoolMe
            </Typography>
            <Button color="inherit" onClick={props.handleLogout}>
              Logout
            </Button>
            <Button color="inherit" href="/sponsor">
              {" "}
              Sponsor A Child{" "}
            </Button>
            <Button color="inherit" href="/board">
              {" "}
              Board Dash{" "}
            </Button>
            <Button color="inherit" href="/add">
              {" "}
              Admin-AddStudent{" "}
            </Button>
            <Button color="inherit" href="/onboarding">
              {" "}
              Onboarding{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              SchoolMe
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
