import React, { Component } from "react";
import DashboardFrame from "../DashboardFrame";
import AdminSchoolListComp from "./AdminSchoolListComp";
import AdminStudentCount from "./AdminStudentCount";
import AddStudentModal from "../../components/StudentView/AddStudentModal";
import AdminHeader from "./AdminHeader";
import VisitListBySchool from "../../components/SocialWorker/VisitLists/visitsBySchool";
import { connect } from "react-redux";
import { getAdminStudents, getSchoolVisits } from "../../actions/admin";
import Divider from '@material-ui/core/Divider';
import axios from "axios";
import "./AdminDashboard.css";
import { Stats } from "fs";

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
    paddingBottom: theme.spacing.unit * 2
  }
});
const visits = [];
class AdministratorDash extends Component {
  state = {
    students: this.props.students,
    visits: this.props.visits.length > 5 ? this.props.visits.slice(0, 5) : this.props.visits,
    school: []
  };
  componentDidMount() {
    const user_id = this.props.user_id;
    console.log(user_id)
    const school_id = this.props.school_id;
    axios.get(`${process.env.REACT_APP_BE_URL}/api/schools/${school_id}`)
      .then(res => this.setState({
        ...this.state,
        school: res.data
      }))
      .catch(err => console.log(err))
      this.props.getAdminStudents(user_id);
      this.props.getSchoolVisits(school_id);
  }
  Header = () => {
    return (
      <>
        <AdminHeader school={this.state.school} />
        <Divider variant="middle" />

        <div className="adminHeaderContainer">
          <div className="headerLeft">
            <h3>Recent Social Worker Visits</h3>
            <div className="visitAdminContainer">
              <VisitListBySchool visits={this.state.visits} />
            </div>
          </div>

          <div className="headerRight">
            <AddStudentModal user_id={this.props.user_id} school={this.state.school} />
            <AdminStudentCount students={this.state.students} />
          </div>
        </div>
      </>
    );
  };

  Body = () => {
    return (
      <>
        <AdminSchoolListComp students={this.state.students} />
      </>
    );
  };

  Footer = () => {
    return <></>;
  };

  render() {
    return (
      <>
        <DashboardFrame links={links} header={this.Header} body={this.Body} />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('______________________', state)
  const arr = []
  return {
    user_id: state.login.user.user_id,
    school_id: state.login.user.schoolID,
    visits: typeof state.admin.visits === "array" ? state.admin.visits : arr,
    students: state.admin.students.students
  };
};

export default connect(
  mapStateToProps,
  { getAdminStudents, getSchoolVisits }
)(AdministratorDash);
