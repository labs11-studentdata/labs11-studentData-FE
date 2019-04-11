import React, { Component } from "react";
import DashboardFrame from "../DashboardFrame";
import AdminSchoolListComp from "./AdminSchoolListComp";
import AdminStudentCount from "./AdminStudentCount";
import AddStudentModal from "../../components/StudentView/AddStudentModal";
import AdminHeader from "./AdminHeader";
import VisitListBySchool from "../../components/SocialWorker/VisitLists/visitsBySchool";
import AdminChildComponent from './AdminChildComponent';
import { connect } from "react-redux";
import { getAdminStudents, getSchoolVisits } from "../../actions/admin";
import Divider from '@material-ui/core/Divider';
import axios from "axios";
import AdminDonationList from './AdminDonationList';
import "./AdminDashboard.css";
import { Stats } from "fs";

// Setting up route links object for left side navigation 

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
    selected: 0,
    students: this.props.students,
    visits: this.props.visits.length > 5 ? this.props.visits.slice(0, 5) : this.props.visits,
    school: this.props.school,
    schoolDonations: [],
    links: [
      {
        title: "My Dashboard",
        onClick: () => {
          this.setState({
            ...this.state,
            selected: 0
          })
        }
      },
      {
        title: "My Students",
        onClick: () => {
          this.setState({
            ...this.state,
            selected: 1
          })
        }
      },
      {
        title: "My School Donations",
        onClick: () => {
          this.setState({
            ...this.state,
            selected: 2
          })
        }
      }
    ]
  }
  componentWillReceiveProps() {
    this.setState({
      ...this.state,
      students: this.props.students
    })
  }
  componentWillUpdate() {

  }
  componentDidMount() {
    const user_id = this.props.user_id;
    const school_id = this.props.school_id;
    const baseURL = process.env.REACT_APP_BE_URL
    axios.get(`${baseURL}/api/schools/${school_id}`)
      .then(res => {
        this.setState({
        ...this.state,
        school: res.data
      })
      this.props.getAdminStudents(user_id);
      this.props.getSchoolVisits(school_id);    
    })
      .catch(err => console.log(err))
    // Get School Donations
      axios.get(`${baseURL}/api/donations/school/${school_id}`)
        .then(res => {
          this.setState({
          
          ...this.state,
          schoolDonations: res.data.schoolDonations
        })})
        .catch(error => console.log(error))
        // Get School Visits
        axios.get(`${baseURL}/api/social_worker_visits/school/${school_id}`)
        .then(res => this.setState({
          ...this.state,
          visits: res.data.schoolVisits
        }))
        .catch(err => console.log(err))
  }

  Header = () => {
    if(this.state.selected === 0) {
      return (
        <>
          <AdminHeader school={this.state.school} />
          <Divider variant="middle" />
  
          <div className="adminHeaderContainer">
            <div className="headerLeft">
              <h3>Recent Social Worker Visits</h3>
              <div className="visitAdminContainer">
                <VisitListBySchool visits={this.state.visits}/>
              </div>
            </div>
  
            <div className="headerRight">
              <AddStudentModal user_id={this.props.user_id} school={this.state.school} />
              {this.state.students && <AdminStudentCount students={this.state.students} />}
              
            </div>
          </div>
        </>
      );
    }
    if(this.state.selected === 1) {
      return (
        <>
          <h1>Students</h1>
          <div className='adminStudentBtn'>
          <AddStudentModal />
          {this.state.students && <AdminStudentCount students={this.state.students} />}

          </div>
     
        </>  
      )
    }
    if(this.state.selected === 2) {
      return <h1>School Donations</h1>
    }
  };

  Body = () => {
    if(this.state.selected === 0) {
      return (
        <>
          {this.state.students && <AdminSchoolListComp students={this.state.students} />}
          
        </>
      );
      
    }
    if(this.state.selected === 1) {
      return <AdminChildComponent students={this.props.students} />
    }
    if(this.state.selected === 2) {
      return <AdminDonationList donations={this.state.schoolDonations} />
    }
  };

  Footer = () => {
    return <></>;
  };

  render() {
    return (
      <>
        <DashboardFrame links={this.state.links} header={this.Header} body={this.Body} />
      </>
    );
  }
}

const mapStateToProps = state => {

  const arr = []
  return {
    user_id: state.login.user.user_id,
    school_id: state.login.user.schoolID,
    visits: typeof state.admin.visits === "array" ? state.admin.visits : arr,
    students: state.admin.students === undefined ? [] : state.admin.students.students,
    allStudents: state.students.students
  };
};

export default connect(
  mapStateToProps,
  { getAdminStudents, getSchoolVisits }
)(AdministratorDash);
