import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const VisitList = props => {
  return(
    <Paper className='visit-list-container'>
      <Table className='visit-list'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>School</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{ overflow: 'auto', height: '250px' }}>
          {props.visits.map(visit => {
            return(
              <TableRow>
                <TableCell>{visit.date}</TableCell>
                <TableCell>{visit.school}</TableCell>
                <TableCell>{visit.notes}</TableCell>                
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default VisitList;