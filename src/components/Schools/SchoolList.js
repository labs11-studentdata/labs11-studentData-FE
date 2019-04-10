import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
const baseURL = process.env.REACT_APP_BE_URL;

class SchoolList extends Component {
  state = {
    schools: []
  };

  componentDidMount() {
    axios
      .get(`${baseURL}/api/schools`)
      .then(res =>
        this.setState({
          ...this.state,
          schools: res.data
        })
      )
      .catch(error => console.log(error));
  }
  
  render() {


    return (
        <div className='schoolListContainer' style={{display: this.props.showList}}>
        {this.props.accountType.includes('board') || this.props.accountType.includes('social') ? <h3>Here is a preview of the schools you will be helping!</h3> : <h4>Please select school from list</h4>}
      <Paper style={{ overflowY: "scroll", maxHeight: "250px", width: "100%", margin: '10px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell align="right">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.schools.map(school => (
              <TableRow onClick={this.props.accountType.includes('admin') ? (e) => this.props.schoolSelected(e, school.schoolID): null}  className='schoolListRow' key={school.id}>
                <TableCell align="right">{school.school_name}</TableCell>
                <TableCell style={{ color: "#617D8B" }} align="right">
                  {school.location}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      </div>
    );
  }
}

export default SchoolList;
