import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';

const VisitLog = props => {
  
  const visitObject = () => {
    if(props.visit !== null) {
      return(
        <Paper>
            <p>Visit {props.visit.visitID}</p>
            <p>{props.visit.visit_date}</p>
            <p>{props.visit.notes}</p>
        </Paper>
      )
    }
  }
  
  return(
    <Paper className='student-table-container' style={{ overflowY: 'scroll', maxHeight: '200px', width: '300px'}}>
      <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        {visitObject()}
      </Modal>
      
      <Table>
        <TableHead>Visit log</TableHead>
        <TableBody>
          {props.visits.map(visit => {
            return (
              <TableRow className='visit' key={visit.visitID} onClick={e => props.handleOpen(e, visit)}>
                <TableCell>Visit {visit.visitID}</TableCell>
                <TableCell>{visit.visit_date}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default VisitLog;