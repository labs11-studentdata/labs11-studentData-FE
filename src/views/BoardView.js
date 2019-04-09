import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getStudents, getSchools } from "../actions/index";
import {
  StudentCounter,
  StudentTable,
  SchoolSelect
} from "../components/index";
import DashboardFrame from "./DashboardFrame";
import HighestDues from '../components/BoardMember/HighestDues';
import { withStyles } from '@material-ui/core/styles';
import SponsorChildView from '../views/SponsorChildView';


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
    bodyView: null,
    selectedStudent: null,
    links: [
      {
        title: "DASHBOARD",
        onClick: () => {
          this.setState({
            ...this.state,
            bodyView: null,
          })
        }
      },
      {
        title: "SPONSOR A STUDENT",
        onClick: () => {
          this.setState({
            ...this.state,
            bodyView: "sponsor",
          })
        }
      },
      {
        title: "SOCIAL VISITS",
        onClick: () => {
          this.setState({
            ...this.state,
            bodyView: "social"
          })
        }
      }
    ],
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
  setClass = (e, schoolID, grade) => {
    e.preventDefault();
    if (schoolID === "all" && grade === "all") {
      this.setState({
        ...this.state,
        schoolID: "all",
        grade: "all",
        students: this.props.students,
        activeSponsor: false,
        student: null
      });
    } else if (schoolID !== "all" && grade === "all") {
      this.setState({
        ...this.state,
        schoolID: schoolID,
        grade: "all",
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
        gradeID: grade,
        students: this.props.students.filter(
          student =>
            student.grade === grade && student.schoolID === schoolID
        ),
        activeSponsor: false,
        student: null
      });
    }
  };

  //opens the student sponsorship modal



  //closes both modals and resets the modal tracking in component state


  Header = () => {
    return (
      <Fragment>
        <StudentCounter students={this.state.students} />
      </Fragment>
    );
  };

  Body = () => {
    switch(this.state.bodyView){
      // Sponsor body view
      case "sponsor":
      return (
          <Fragment>
            <SponsorChildView />
          </Fragment>
        );
        break;

      // Social visits view
      case "social":
        return (
          <Fragment>
            SOCIAL VISITS LIST
          </Fragment>
        );
        break;

      // Standard body view
      default:
        return (
        <Fragment>
          <SchoolSelect
          schools={this.props.schools}
          setClass={this.setClass}
          schoolID={this.state.schoolID}
          grade={this.state.grade}
          userType='board_member'
          />
          <br />
          <StudentTable
          students={this.state.students}
          open={this.state.activeSponsor}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          student={this.state.student}
          userID={this.props.userID}
          
          />
        </Fragment>
      );
    }


  };

  Footer = () => {
    return (
      <Fragment>
        <HighestDues
          students={this.state.students}
          open={this.state.activeSponsor}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          student={this.state.student}
          userID={this.props.userID}
        />
      </Fragment>
      );
  };

  render() {
    console.log('BOARD VIEW STATE', this.state);
    console.log('BOARD VIEW PROPS', this.props);
    return (
      <Fragment>
        <DashboardFrame
          links={this.state.links}
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
    userID: state.login.user.userID
  };
};

//this is where you hook up the functions from the actions index to this file
export default withStyles(styles)(connect(mapStateToProps,{ getStudents, getSchools })(BoardView));
