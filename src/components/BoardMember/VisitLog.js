import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const VisitLog = props => {
  return(
    <Paper className='student-table-container' style={{ overflowY: 'scroll', maxHeight: '200px', width: '300px'}}>
      <Table>
        <TableHead>Visit log</TableHead>
        <TableBody>
          {props.visits.map(visit => {
            return (
              <TableRow className='visit' key={visit.visitID}>
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