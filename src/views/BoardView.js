import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getStudents, getSchools } from "../actions/index";
import {
  StudentCounter,
  StudentTable,
  IssuesTracker,
  SchoolSelect
} from "../components/index";
import DashboardFrame from "./DashboardFrame";
import HighestDues from '../components/BoardMember/HighestDues';
import { withStyles } from '@material-ui/core/styles';


// Setting up route links object for left side navigation
const links = [
  {
    title: "LINK TEST 1",
    url: "#"
  },
  {
    title: "LINK TEST 2",
    url: "#"
  },
  {
    title: "LINK TEST 3",
    url: "#"
  }
];

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class BoardView extends Component {
  state = {
    schoolID: null,
    gradeID: null,
    students: [],
    schools: [],
    activeSponsor: false,
    student: null,
  };

  componentDidMount() {
    this.props.getStudents();
    this.props.getSchools();
    this.setState({
      ...this.state,
      students: this.props.students
    });
  }

  //this is the function if you're looking for references for how to write the local filter
  //you'll only need one of the two ID parameters I think, so you can cut down on it significantly
  //to use it, you'll need to connect to the redux store
  setClass = (e, schoolID, gradeID) => {
    e.preventDefault();
    if (schoolID === "all" && gradeID === "all") {
      this.setState({
        ...this.state,
        schoolID: "all",
        gradeID: "all",
        students: this.props.students,
        activeSponsor: false,
        student: null
      });
    } else if (schoolID !== "all" && gradeID === "all") {
      this.setState({
        ...this.state,
        schoolID: schoolID,
        gradeID: "all",
        students: this.props.students.filter(
          student => student.schoolID === schoolID
        ),
        activeSponsor: false,
        student: null
      });
    } else {
      this.setState({
        ...this.state,
        schoolID: schoolID,
        gradeID: gradeID,
        students: this.props.students.filter(
          student =>
            student.gradeID === gradeID && student.schoolID === schoolID
        ),
        activeSponsor: false,
        student: null
      });
    }
  };

  //opens the student sponsorship modal
  handleOpen = (e, student) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      student: student,
      activeSponsor: true
    });
  };

  //opens the visit notes modal
  handleOpenVisit = (e, visit) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      visit: visit,
      activeVisit: true
    });
  };

  //closes both modals and resets the modal tracking in component state
  handleClose = () => {
    this.setState({
      ...this.state,
      student: null,
      activeSponsor: false,
    });
  };

  Header = () => {
    return (
      <Fragment>
        <StudentCounter students={this.state.students} />
      </Fragment>
    );
  };

  Body = () => {
    return (
      <Fragment>
        <SchoolSelect
          schools={this.props.schools}
          setClass={this.setClass}
          schoolID={this.state.schoolID}
          gradeID={this.state.gradeID}
          userType='board_member'
        />
        <br />
        <StudentTable
          students={this.state.students}
          open={this.state.activeSponsor}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          student={this.state.student}
          user_id={this.props.user_id}
        />
      </Fragment>
    );
  };

  Footer = () => {
    return (
      <Fragment>
        <HighestDues students={this.state.students} />
      </Fragment>
      );
  };

  render() {
    console.log('BOARD VIEW STATE', this.state);
    console.log('BOARD VIEW PROPS', this.props);
    return (
      <Fragment>
        <DashboardFrame
          links={links}
          header={this.Header}
          body={this.Body}
          footer={this.Footer}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  //these are references to the redux store reducers
  return {
    fetching: state.students.fetching,
    fetched: state.students.fetched,
    students: state.students.students,
    schools: state.schools.schools,
    error: state.students.error,
    user_id: state.login.user.user_id
  };
};

//this is where you hook up the functions from the actions index to this file
export default withStyles(styles)(connect(mapStateToProps,{ getStudents, getSchools })(BoardView));
