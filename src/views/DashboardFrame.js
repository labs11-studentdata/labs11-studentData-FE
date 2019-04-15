import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, List, ListItem, ListItemText } from "@material-ui/core";
// import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    marginTop: 16,
    maxWidth: 1300,
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
    [theme.breakpoints.up('md')]: {
      height: "90vh",
    },
  },
  link: {},
  body: {
    maxHeight: 500,
    overflowY: 'scroll',
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function DashContainer(props) {
  const { classes } = props;
  const Header = props.header;
  const Body = props.body;

  // conditionally support footer
  let Footer;
  if (props.footer) {
    Footer = props.footer;
  }
  // console.log("DashContainer props", props);

  return (
    <div className={classes.root}>
      <Grid container spacing={16} style={{ width: "100%" }}>
        {/* LEFT NAV */}
        <Grid item xs={12} md={3}>
          <Paper className={classes.sidenav}>
            <List component="nav">
              {props.links.map(link => (
                <ListItemLink href={link.url} onClick={link.onClick} key={link.text}>
                  <ListItemText primary={link.title} />
                  {/* <Divider variant="middle" /> */}
                </ListItemLink>
              ))}
            </List>
          </Paper>
        </Grid>
        {/* BODY */}
        <Grid item xs={12} md={9} >
          <Grid container spacing={16} >
            {/* HEADER */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Header />
              </Paper>
            </Grid>
            {/* BODY */}
            <Grid item xs={12}>
              <Paper  className={`${classes.paper} ${classes.body}`}>
                <Body className={classes.body} />
              </Paper>
            </Grid>
            {/* FOOTER */}
            {Footer ? (
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Footer />
                </Paper>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(DashContainer);
