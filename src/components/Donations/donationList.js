import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DonationList = props => {
  return(
    <Paper className='donation-list-container'>
      <Table className='donation-list'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>School</TableCell>
            <TableCell>Student</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Donated By</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{ overflow: 'auto', height: '250px' }}>
          {props.donations.map(donation => {
            return(
              <TableRow>
                <TableCell>{donation.date}</TableCell>
                <TableCell>{donation.school}</TableCell>
                <TableCell>{donation.student}</TableCell>                
                <TableCell>{donation.amount}</TableCell>                
                <TableCell>{donation.user}</TableCell>                
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default DonationList;