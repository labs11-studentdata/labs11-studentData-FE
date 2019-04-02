import React, { Component } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class SocialWorkerDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visits: [],
        };   
    }

    componentDidMount() {
      
      const id = this.props.match.params.id;
      
      console.log(id);

      axios.get(`${process.env.REACT_APP_BE_URL}/api/user/${id}`)
        .then(res => {

          console.log(res.data);

          this.setState({
            visits: res.data
          })

        })
        .catch(err => console.log(err))
    }

    render() {
  
      console.log(this.state)
        return (
            <div>
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
          </div>
          
        )
    }
}

export default SocialWorkerDashboard;