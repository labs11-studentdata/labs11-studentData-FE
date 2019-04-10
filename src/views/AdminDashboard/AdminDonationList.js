import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'

function AdminDonationList(props) {
    return (
      <Paper className='donation-list-container'>
        <Table className='donation-list'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Donated By</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Student</TableCell>
              <TableCell>Remaining Dues</TableCell>
            </TableRow>
          </TableHead>
  
          <TableBody style={{ overflow: 'auto', height: '250px' }}>
            {props.donations.map(donation => {
              return(
                <TableRow>
                  <TableCell>{moment(donation.created_at).startOf('day').fromNow()}</TableCell>
                  <TableCell>{`${donation.donor_first} ${donation.donor_last}`}</TableCell> 
                  <TableCell>{donation.donation_total}</TableCell>                
                  <TableCell>{`${donation.student_first} ${donation.student_last}`}</TableCell>  
                  <TableCell>{donation.dues}</TableCell>                
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
}

export default AdminDonationList;