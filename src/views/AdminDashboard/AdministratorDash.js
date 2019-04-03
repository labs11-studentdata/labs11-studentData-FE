import React, { Component } from "react";
import DashboardFrame from "../DashboardFrame";
import AdminSchoolListComp from "./AdminSchoolListComp";
import AdminStudentCount from "./AdminStudentCount";
import AddStudentModel from "../../components/StudentView/AddStudentModal";
import AdminHeader from "./AdminHeader";
import VisitListBySchool from "../../components/SocialWorker/VisitLists/visitsBySchool";
import { connect } from "react-redux";
import axios from "axios";
import "./AdminDashboard.css";
const baseURL = process.env.REACT_APP_BE_URL;

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
    students: []
  };
  componentDidMount() {
    const user_id = this.props.user_id;
    axios
      .get(`${baseURL}/api/users/${user_id}/students`)
      .then(res => {
        this.setState({
          ...this.state,
          students: res.data.students.students,
          user: res.data.students.user
        });
      })
      .catch(err => console.log(err));
  }
  Header = () => {
    return (
      <div className="adminHeaderContainer">
        <div className="headerLeft">
          <AdminHeader />
          <div className="visitAdminContainer">
            <VisitListBySchool visits={visits} />
          </div>
        </div>

        <div className="headerRight">
          <AddStudentModel />
          <AdminStudentCount students={this.state.students} />
        </div>
      </div>
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
    console.log("BOARD VIEW STATE", this.state);
    console.log("BOARD VIEW PROPS", this.props);
    return (
      <>
        <DashboardFrame links={links} header={this.Header} body={this.Body} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user_id: state.login.user.user_id
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdministratorDash);