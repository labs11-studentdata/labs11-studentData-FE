import React from "react";
<<<<<<< HEAD
=======
import PropTypes from "prop-types";
>>>>>>> origin/master
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
function HeaderComponent(props) {
const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            SchoolMe
          </Typography>
          <Button color="inherit" href='/login'> Login </Button>
          <Button color="inherit" href='/sponsor'> Sponsor </Button>
          <Button color="inherit" href='/onboarding'> Onboarding </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(HeaderComponent);
