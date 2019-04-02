import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import { SmallSponsor } from '../index';
import StripeComponent from '../Stripe/StripeComponent';
import {withStyles} from '@material-ui/core/styles';



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
    <Paper className='student-table-container' style={{ overflowY: 'scroll', maxHeight: '300px', width: 'auto'}}>

      {/* <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        <StripeComponent student={props.student}/>
      </Modal> */}

      <Table className='student-table' deselectOnClickaway={false} style={{ tableLayout: 'auto', padding: 'none' }}>
      {/* <colgroup>
        <col width="20%" />
        <col width="10%" />
        <col width="5%" />
        <col width="5%" />
        <col width="5%" />
        <col width="20%" />
        <col width="15%" />
        <col width="15%" />
      </colgroup> */}
        <TableHead>

          <TableRow>
            <TableCell style={{padding: '0px', width: '15%'}}>Name</TableCell>
            <TableCell style={{padding: '0px', width: '10%'}}>Status</TableCell>
            <TableCell style={{padding: '0px', width: '5%'}}>Age</TableCell>
            <TableCell style={{padding: '0px', width: '10%'}}>Insurance</TableCell>
            <TableCell style={{padding: '0px', width: '10%'}}>Birth Cert</TableCell>
            <TableCell style={{padding: '0px', width: '15%'}}>Contact</TableCell>
            <TableCell style={{padding: '0px', width: '15%'}}>Number</TableCell>
            <TableCell style={{padding: '0px', width: '20%'}}>Donate</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{ overflow: 'scroll', maxHeight: '500px'}}>
          {props.students.map(student => {

            return(
              <TableRow key={student.student_id} onClick={e => props.handleOpen(e, student)}>
                <TableCell style={{padding: '0px', width: '15%'}}>{student.first_name} {student.last_name}</TableCell>
                <TableCell style={{padding: '0px', width: '10%'}}>{student.enrollment_status}</TableCell>
                <TableCell style={{padding: '0px', width: '5%'}}>{student.age}</TableCell>
                <TableCell style={{padding: '0px', width: '10%'}}>{yOrN(student.has_insurance)}</TableCell>
                <TableCell style={{padding: '0px', width: '10%'}}>{yOrN(student.has_birthcert)}</TableCell>
                <TableCell style={{padding: '0px', width: '15%'}}>{student.contact_first_name} {student.contact_last_name}</TableCell>
                <TableCell style={{padding: '0px', width: '15%'}}>{student.contact_number}</TableCell>
                <TableCell style={{padding: '0px 0px 5px', width: '20%'}}><StripeComponent student={student}/></TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default StudentTable;