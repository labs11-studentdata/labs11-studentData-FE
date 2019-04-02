import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, List, ListItem, ListItemText } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 16,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAliign: "center",
    color: theme.palette.text.secondary
  },
  sidenav: {
    padding: theme.spacing.unit * 2,
    textAliign: "center",
    color: theme.palette.text.secondary,
    height: "90vh"
  },
  link: {}
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function DashContainer(props) {
  const { classes } = props;
  const Header = props.header;
  const Body = props.body;
  const Footer = props.footer;
  console.log("DashContainer props", props);

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        {/* LEFT NAV */}
        <Grid item xs={12} md={3}>
          <Paper className={classes.sidenav}>
            <List component="nav">
              {props.links.map(link => (
                <ListItemLink href={link.url} key={link.text}>
                  <ListItemText primary={link.title} />
                </ListItemLink>
              ))}
            </List>
          </Paper>
        </Grid>
        {/* BODY */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={16}>
            {/* HEADER */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Header />
              </Paper>
            </Grid>
            {/* BODY */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Body />
              </Paper>
            </Grid>
            {/* FOOTER */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Footer />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(DashContainer);
