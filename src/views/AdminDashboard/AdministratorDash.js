import React, { Component } from 'react';
import DashboardFrame from "../DashboardFrame";
import AdminSchoolListComp from './AdminSchoolListComp';
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
  
  class AdministratorDash extends Component {
    state = {
    };
  
    componentDidMount() {

    }
  
    Header = () => {
      return (
        <>
        </>
      );
    };
  
    Body = () => {
      return (
        <>
         <AdminSchoolListComp />
        </>
      );
    };
  
    Footer = () => {
      return (
        <>
        </>
        );
    };
  
    render() {
      console.log('BOARD VIEW STATE', this.state);
      console.log('BOARD VIEW PROPS', this.props);
      return (
        <>
          <DashboardFrame
            links={links}
            header={this.Header}
            body={this.Body}
          />
        </>
      );
    }
  }
  

  export default AdministratorDash;
  