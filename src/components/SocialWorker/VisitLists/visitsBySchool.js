import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const VisitListBySchool = props => {
  return(
    <Paper className='visit-list-container'>
      <Table className='visit-list'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Notes</TableCell>
            <TableCell>Social Worker</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{ overflow: 'auto', height: '200px' }}>
          {props.visits.length > 0 && props.visits.map(visit => {
            return(
              <TableRow className='visitListRow'>
                <TableCell>{moment(visit.visit_date).startOf('day').fromNow()}</TableCell>
                <TableCell>{visit.notes}</TableCell>
                <TableCell>{`${visit.first_name} ${visit.last_name}`}</TableCell>                

              </TableRow>
            )
          })}
          {props.visits.length === 0 && props.visits.map(visit => {
            return(
              <TableRow className='visitListRow'>
                <TableCell></TableCell>
                <TableCell>No recent notes</TableCell>
                <TableCell></TableCell>                

              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default VisitListBySchool;