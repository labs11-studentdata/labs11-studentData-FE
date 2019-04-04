import React, {Component} from 'react';
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
import {Elements, StripeProvider} from 'react-stripe-elements';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';



class StudentTable extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  yOrN = val => {
    if(val === 1){
      return 'Y'
    }
    else {
      return 'N'
    }
  }

  
  render(){
    return(
      <Paper className='student-table-container' style={{ overflowY: 'scroll', maxHeight: '300px', width: 'auto'}}>

        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
        >
          
            <StripeProvider apiKey="pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb">
              <div className="example" style={{width: '400px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Elements>
                  <StripeComponent student={this.props.student} user_id={this.props.user_id}/>
                </Elements>
              </div>
            </StripeProvider>
               
        </Dialog>

        <Table className='student-table' deselectOnClickaway={false} style={{ tableLayout: 'auto', padding: 'none' }}>
          <TableHead>

            <TableRow>
              <TableCell style={{padding: '0px', width: '15%'}}>Name</TableCell>
              {/* <TableCell style={{padding: '0px', width: '10%'}}>Status</TableCell> */}
              <TableCell style={{padding: '0px', width: '5%'}}>Age</TableCell>
              <TableCell style={{padding: '0px', width: '10%'}}>Insurance</TableCell>
              <TableCell style={{padding: '0px', width: '10%'}}>Birth Cert</TableCell>
              <TableCell style={{padding: '0px', width: '15%'}}>Contact</TableCell>
              <TableCell style={{padding: '0px', width: '15%'}}>Dues</TableCell>
              <TableCell style={{padding: '0px', width: '10%'}}>Donate</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{ overflowY: 'scroll', maxHeight: '500px'}}>
            {this.props.students.map(student => {

              return(
                <TableRow key={student.student_id}>
                  <TableCell style={{padding: '0px', width: '15%'}}>{student.first_name} {student.last_name}</TableCell>
                  {/* <TableCell style={{padding: '0px', width: '10%'}}>{student.enrollment_status}</TableCell> */}
                  <TableCell style={{padding: '0px', width: '5%'}}>{student.age}</TableCell>
                  <TableCell style={{padding: '0px', width: '10%'}}>{this.yOrN(student.has_insurance)}</TableCell>
                  <TableCell style={{padding: '0px', width: '10%'}}>{this.yOrN(student.has_birthcert)}</TableCell>
                  <TableCell style={{padding: '0px', width: '15%'}}>{student.contact_first_name} {student.contact_last_name}</TableCell>
                  <TableCell style={{padding: '0px', width: '15%'}}>${student.dues}</TableCell>
                  <TableCell style={{padding: '0px', width: '10%'}} onClick={e => this.props.handleOpen(e, student)}><Button type='submit' color='primary' variant="outlined">donate</Button></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}



export default StudentTable;