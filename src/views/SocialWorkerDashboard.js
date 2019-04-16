import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DashboardFrame from './DashboardFrame';

const links = [
  {
    title: "Dashboard",
    url: `${process.env.REACT_APP_FE_ROOT}/socialworkerdashboard`
  },
  {
    title: "My Visit Notes",
    url: `${process.env.REACT_APP_FE_ROOT}/visits`
  },
  {
    title: "Sponsor",
    url: `${process.env.REACT_APP_FE_ROOT}/sponsor`
  }
];

class SocialWorkerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visits: [],
        };   
    }

    componentDidMount() {
      
      //Use this to only get the visits for the currently logged in user
      //const id = this.props.userID;

      //our seeds have userID 3 and 4 set up as social workers with social worker visits added. 
      //setting this manually for demonstration purposes
      const id = 3;

      
      axios.get(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/user/${id}`)
        .then(res => {


          this.setState({
            visits: res.data
          })

        })
        .catch(err => console.log(err))
    }


    Header = () => {
      return (
        <Fragment>
          <div>
            <h2>All Visits: {this.state.visits.length}</h2>
          </div>
        </Fragment>
      );
    };

    Body = () => {
      return (
        <Fragment>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Visit Date</TableCell>
                    <TableCell align="left">Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.visits.map(visit => (
                    <TableRow key={visit.id}>
                      <TableCell align="left">{visit.visit_date}</TableCell>
                      <TableCell align="left">{visit.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
        </Fragment>
      );
    };


    /* optional footer placeholder     
      Footer = () => {
        return <Fragment>FOOTER</Fragment>;
      }; 
    */

    render() {
        
        return (
        <Fragment>
          <DashboardFrame
            links={links}
            header={this.Header}
            body={this.Body}
          />          
        </Fragment>
          
        )
    }
}

const mapStateToProps = state => {
  // console.log(state);

  return {
    userID: state.login.user.user_id
  }
}

export default connect(mapStateToProps, {})(SocialWorkerDashboard);