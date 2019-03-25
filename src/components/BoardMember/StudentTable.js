import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => {

}

const StudentTable = props => {

  //this is probably gonna need a refactor in terms of form before it matches the wireframe, but this should at least be able to verify that all the data is there
  return(
    <Paper className='student-table-container'>
      <Table className='student-table'>
        <TableHead>

          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Insurance</TableCell>
            <TableCell>Birth Cert</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Number</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{ overflow: 'auto', height: '250px' }}>
          {props.students.map(student => {
            return(
              <TableRow>
                <TableCell>{student.first_name} {student.last_name}</TableCell>
                <TableCell>{student.enrollment_status}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.has_insurance}</TableCell>
                <TableCell>{student.has_birthcert}</TableCell>
                <TableCell>{student.contact_first_name} {student.contact_last_name}</TableCell>
                <TableCell>{student.contact_number}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default StudentTable;