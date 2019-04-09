import React, {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {Elements, StripeProvider} from 'react-stripe-elements';
import StripeComponent from '../Stripe/StripeComponent';

class StudentRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: this.props.student
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

  handleOpen = (e, student) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      open: false,
    });
  };

  updateDues = update => {
    this.setState({
      student: update
    })
  }


  render(){
    return(
    <>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
      >
        <StripeProvider apiKey="pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb">
          <div className="example" style={{width: '400px', height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Elements>
              <StripeComponent student={this.state.student} userID={this.props.userID} handleClose={this.handleClose} updateDues={this.updateDues}/>
            </Elements>
          </div>
        </StripeProvider>       
      </Dialog>
      <TableRow key={this.state.student.studentID}>
        <TableCell style={{padding: '0px', width: '15%'}}>{this.state.student.first_name} {this.state.student.last_name}</TableCell>
        {/* <TableCell style={{padding: '0px', width: '10%'}}>{student.enrollment_status}</TableCell> */}
        <TableCell style={{padding: '0px', width: '5%'}}>{this.state.student.age}</TableCell>
        <TableCell style={{padding: '0px', width: '10%'}}>{this.yOrN(this.state.student.has_insurance)}</TableCell>
        <TableCell style={{padding: '0px', width: '10%'}}>{this.yOrN(this.state.student.has_birthcert)}</TableCell>
        <TableCell style={{padding: '0px', width: '15%'}}>{this.state.student.contact_first_name} {this.state.student.contact_last_name}</TableCell>
        <TableCell style={{padding: '0px', width: '15%'}}>${this.state.student.dues}</TableCell>
        <TableCell style={{padding: '0px', width: '10%'}} onClick={e => this.handleOpen(e, this.state.student)}>
          <Button type='submit' color='primary' variant="outlined">donate</Button>
        </TableCell>
      </TableRow>
    </>
    )
  }
}

export default StudentRow;