import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DashboardFrame from './DashboardFrame';

const links = [
  {
    title: "My Visit Notes",
    url: "#"
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
      
      const id = this.props.userID;

      console.log(id);
      
      axios.get(`${process.env.REACT_APP_BE_URL}/api/social_worker_visits/${id}`)
        .then(res => {

          console.log(res.data);

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
              <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Visit Date</TableCell>
                    <TableCell align="right">Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.visits.map(visit => (
                    <TableRow key={visit.id}>
                      <TableCell align="right">{visit.visit_date}</TableCell>
                      <TableCell align="right">{visit.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
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
  console.log(state);

  return {
    userID: state.login.user.user_id
  }
}

export default connect(mapStateToProps, {})(SocialWorkerDashboard);