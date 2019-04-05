import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import StripeComponent from '../Stripe/StripeComponent';
import {Elements, StripeProvider} from 'react-stripe-elements';

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
  const {handleOpen} = props;
  return (
    <Paper>
      <Typography className={classes.scName} variant="subtitle1">
        {`${student.first_name} ${student.last_name}`}
      </Typography>
      <Typography className={classes.scDues}>
        {`Amount due: \$${student.dues}`}
      </Typography>
      <Button color='primary' variant="outlined" className={classes.sdButton} onClick={e => handleOpen(e, student)}>DONATE</Button>
    </Paper>
    );
} 

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  // Resets value to 0 if filter changes top5
  componentDidUpdate(prevProps){
    if(prevProps.top5 !== this.props.top5){
      this.setState({value: 0})
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { top5 } = this.props;
    const {handleOpen} = this.props;
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
              {top5.map((student, index)=> {
                return <Tab key={index} label={`${top5[index].first_name} ${top5[index].last_name}`} />
              })}
            </Tabs>
          </AppBar>
          {top5.map((student, index) => {
            if(value === index){
              return <StudentCard student={student} classes={classes} handleOpen={handleOpen}/>
            }
          })}
          <Dialog
            open={this.props.open}
            onClose={this.props.handleClose}
          >
            <StripeProvider apiKey="pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb">
              <div className="example" style={{width: '400px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Elements>
                  <StripeComponent student={this.props.student} user_id={this.props.user_id}/>
                </Elements>
              </div>
            </StripeProvider>       
          </Dialog>
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

  // Added conditional to see if student owes dues first
  // students[students.length -1].dues > 0
  while(top5.length < 5 && students.length > 0 && students[students.length -1].dues > 0){
      top5.push(students.pop());
  }
  return (
    <Fragment>
    <Typography variant="h5">Highest Needs</Typography>
    <Typography component="div" style={{ padding: 8 * 3 }}>
      <ScrollableTabsButtonAuto top5={top5} classes={classes}
                open={props.activeSponsor}
                handleOpen={props.handleOpen}
                handleClose={props.handleClose}
                student={props.student}
                user_id={props.user_id}/>
    </Typography>
    </Fragment>
  )
}

export default withStyles(styles)(HighestDues);