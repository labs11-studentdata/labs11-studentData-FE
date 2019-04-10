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
import BoardSocial from '../components/BoardMember/BoardSocial';
import { withStyles } from '@material-ui/core/styles';
import SponsorChildView from '../views/SponsorChildView';
import Axios from "axios";
import BoardSocialSchoolSelect from "../components/BoardMember/BoardSocialSchoolSelect";


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
    grade: null,
    students: [],
    schools: [],
    bodyView: null,
    selectedStudent: null,
    socialVisits: [],
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

  componentDidUpdate(prevProps, prevState){
    // If prev state view was not social
    // and current state view is social
    // and there is a school selected
    
    // or
    
    // if current state view is social
    // and if the selected school has changed

    // fetch social worker visits by school

    console.log(`prevSBV ${prevState.bodyView} SBV${this.state.bodyView} prevSS${prevState.schoolID} SS${this.state.schoolID}`)

    if((prevState.bodyView !== "social" && 
        this.state.bodyView === "social" && 
        this.state.schoolID !== null) || 
        (this.state.bodyView === "social" &&
        this.state.schoolID !== null &&
        this.state.schoolID !== prevState.schoolID 
        )){
          Axios.get(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/school/nojoin/${this.state.schoolID}`)
            .then(res => {
              console.log("FETCHED SW VISITS", res.data);
              this.setState({
                ...this.state,
                socialVisits: res.data
              });
            })
            .catch(err => {
              console.log("Error fetching sw visits",err);
            })
        }
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

  socialSchoolSelect = schoolID => {
    this.setState({
      ...this.state,
      schoolID: schoolID
    })
  }

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
            <BoardSocialSchoolSelect 
              schools={this.props.schools}
              socialSchoolSelect={this.socialSchoolSelect}
            />
            <BoardSocial 
              bodyView={this.state.bodyView}
              schoolID={this.state.schoolID}
              socialVisits={this.state.socialVisits}
            />
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
    userID: state.login.user.user_id //this needs to get standardized eventually
  };
};

//this is where you hook up the functions from the actions index to this file
export default withStyles(styles)(connect(mapStateToProps,{ getStudents, getSchools })(BoardView));
