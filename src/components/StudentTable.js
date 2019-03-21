import React from 'react';
<<<<<<< HEAD
=======
import { withStyles } from '@material-ui/core/styles';
>>>>>>> origin/master
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

<<<<<<< HEAD
=======
const styles = theme => {

}

>>>>>>> origin/master
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
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{student.insurance}</TableCell>
                <TableCell>{student.birthCert}</TableCell>
                <TableCell>{student.contact}</TableCell>
                <TableCell>{student.phone}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default StudentTable;