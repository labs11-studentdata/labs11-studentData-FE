import React, {Component} from 'react';
import {CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {makeDonation, updateStudent} from '../../actions/index';
import Button from '@material-ui/core/Button';




class StripeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      amount: 0,
      key: 'pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb',
      student: this.props.student,
      username: 'get from state later',
      buttonText: 'Send Donation',
      success: null,
    };
  }

  // setGreen = () => {
  //   if(this.props.paid === true){
  //     this.setState({
  //       ...this.state,
  //       buttonText: 'Donation Sent',
  //       complete: true,
  //       success: {color: 'green'}
  //     }
  //   )}
  // }

  handleSubmit = async (e) => {
    e.preventDefault();
    let updatedDonation = this.state.student.dues - this.state.amount;
    let donation = {
      userID: Number(this.props.userID),
      studentID: this.state.student.studentID,
      schoolID: this.state.student.schoolID,
      donation_total: Number(this.state.amount),
    }
    // console.log(donation);
    this.setState(prevState => ({
      ...this.state,
      student: {
        ...prevState.student,
        dues: updatedDonation
      }
    }));
    let token = await this.props.stripe.createToken({name: this.state.username});
    await this.props.makeDonation(
      {token: token.token, amount: Number(this.state.amount)},
      this.state.student.studentID,
      this.state.student,
      donation
    );
    await this.props.updateDues(this.state.student);
    await this.props.handleClose();
  }



  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
        <div className="checkout" style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', paddingBottom: '20px', alignItems: 'center'}}>
            <div style={{display: 'flex', justifyContent: 'center', minWidth: '100%', padding: '0px 20px 0px 0px'}}><h3>Sponsoring {this.state.student.first_name}</h3></div>
            {/* <img src={this.state.student.photo_url} /> */}
            <Button color='primary' variant='outlined' style={{padding: '5px 15px', minWidth: '20px', color: 'red', margin: '10px'}} onClick={this.props.handleClose}>X</Button>
          </div>
          <TextField
            required
            onChange={this.handleChange}
            value={this.state.amount}
            name="amount"
            label="Amount"
            style={{width: '50%'}}
          />
          <p>Credit Card Number</p>
          <CardNumberElement/>
          <p>Expiration Date</p>
          <CardExpiryElement/>
          <p>CVC Number</p>
          <CardCVCElement />
          <Button type='submit' color='primary' variant="outlined" onClick={this.handleSubmit} style={{marginTop: '10px'}}>{this.state.buttonText}</Button>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return{
    paying: state.stripe.paying,
    paid: state.stripe.paid,
    id: state.stripe.id,
    error: state.stripe.error,
    updatingStudent: state.students.updating,
    updatedStudent: state.students.updated
  }
}

export default connect(mapStateToProps, {makeDonation, updateStudent})(injectStripe(StripeComponent));