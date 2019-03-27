import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import { Component } from 'react';
import { SmallSponsor } from '../index';

const StudentTable = props => {

  const yOrN = val => {
    if(val === 1){
      return 'Y'
    }
    else {
      return 'N'
    }
  }

  //this is probably gonna need a refactor in terms of form before it matches the wireframe, but this should at least be able to verify that all the data is there
  return(
    <Paper className='student-table-container' style={{ overflowY: 'scroll', maxHeight: '300px', width: '1000px'}}>

      <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        <SmallSponsor student={props.student}/>
      </Modal>

      <Table className='student-table' deselectOnClickaway={false}>
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

        <TableBody style={{ overflow: 'scroll', maxHeight: '500px'}}>
          {props.students.map(student => {

            return(
              <TableRow key={student.student_id} onClick={e => props.handleOpen(e, student)}>
                <TableCell>{student.first_name} {student.last_name}</TableCell>
                <TableCell>{student.enrollment_status}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>{yOrN(student.has_insurance)}</TableCell>
                <TableCell>{yOrN(student.has_birthcert)}</TableCell>
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