import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const VisitListByUser = props => {
  return(
    <Paper className='visit-list-container'>
      <Table className='visit-list'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell className="tag-2" >School</TableCell>
            <Button variant="outlined" className="add-visit-btn" onClick={props.openAdd}>
            Add Visit
          </Button>
          </TableRow>
        </TableHead>

        <TableBody style={{ overflow: 'auto', height: '250px' }}>
          {props.visits.map(visit => {
            return(
              <TableRow onClick={props.visitOnClick(visit)}>
                <TableCell>{visit.visit_date}</TableCell>
                <TableCell>{visit.school}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default VisitListByUser;