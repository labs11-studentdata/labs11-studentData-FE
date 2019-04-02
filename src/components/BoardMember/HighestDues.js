import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  scName: {
    paddingTop: 10,
  },
  scDues: {
    // paddingBottom: 10,
  },
  sdButton: {
    margin: 10,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

// TODO: Plug in donate button
const StudentCard = props => {
  const {student} = props;
  const {classes} = props;
  return (
    <Paper>
      <Typography className={classes.scName} variant="subtitle1">
        {`${student.first_name} ${student.last_name}`}
      </Typography>
      <Typography className={classes.scDues}>
        {`Ammount due: \$${student.dues}`}
      </Typography>
      <Button color='primary' variant="outlined" className={classes.sdButton}>DONATE</Button>
    </Paper>
    );
} 

// TODO: Map the top5 labels and selected
class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { top5 } = this.props;
    console.log("TOP5", top5);
    if(top5.length > 0){
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label={`${top5[0].first_name} ${top5[0].last_name}`} />
              <Tab label={`${top5[1].first_name} ${top5[1].last_name}`} />
              <Tab label={`${top5[2].first_name} ${top5[2].last_name}`} />
              <Tab label={`${top5[3].first_name} ${top5[3].last_name}`} />
              <Tab label={`${top5[4].first_name} ${top5[4].last_name}`} />
            </Tabs>
          </AppBar>
          {value === 0 && <StudentCard student={top5[0]} classes={classes}/>}
          {value === 1 && <StudentCard student={top5[1]} classes={classes}/>}
          {value === 2 && <StudentCard student={top5[2]} classes={classes}/>}
          {value === 3 && <StudentCard student={top5[3]} classes={classes}/>}
          {value === 4 && <StudentCard student={top5[4]} classes={classes}/>}
        </div>
      );
    } else {
      return (<div>ALL STUDENTS CAUGHT UP</div>);
    }
    
  }
}

const HighestDues = props => {
  const { classes } = props;
  // make new array from students
  const students = [...props.students];
  // console.log("STUDENTS BEFORE", students); // <--debugging
  // Compare students by dues ammount
  function compare(a, b) {
      const dues1 = a.dues;
      const dues2 = b.dues;
      let comparison = 0;
      if(dues1 > dues2){
      comparison = 1;
      } else if (dues2 > dues1) {
      comparison = -1;
      }
      return comparison
  }
  students.sort(compare);
  // console.log("STUDENTS AFTER", students); // <--debugging

  const top5 = [];
  while(top5.length < 5 && students.length > 0){
      top5.push(students.pop());
  }
  return (
    <Fragment>
    <Typography variant="h5">Highest Needs</Typography>
    <Typography component="div" style={{ padding: 8 * 3 }}>
      <ScrollableTabsButtonAuto top5={top5} classes={classes}/>
    </Typography>
    </Fragment>
  )
}

export default withStyles(styles)(HighestDues);