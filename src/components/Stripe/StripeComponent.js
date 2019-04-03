import React, {Component} from 'react';
import {CardElement, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import {Paper} from '@material-ui/core/Paper';
import StripeCheckout from 'react-stripe-checkout';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {makeDonation} from '../../actions/index';

class StripeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      amount: '',
      key: 'pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb',
      student: this.props.student,
      username: 'garry'
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let token = await this.props.stripe.createToken({name: this.state.username});
    await console.log(token);
    await this.props.makeDonation({token: token.token, amount: Number(this.state.amount)})
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
        <div className="checkout">
          <p>Sponsoring {this.state.student.first_name}</p>
          <TextField
            required
            onChange={this.handleChange}
            value={this.state.amount}
            name="amount"
            label="Amount"
            style={{width: '50%'}}
          />
          <CardNumberElement />
          <CardExpiryElement/>
          <CardCVCElement />
          <button onClick={this.handleSubmit}>Send</button>
        </div>
      );
    // return (
    //   <div className='stripe-donation-container' style={{display: 'flex', alignItems: 'center'}}>
    //     <TextField
    //     required
    //     onChange={this.handleChange}
    //     value={this.state.amount}
    //     name="amount"
    //     label="Amount"
    //     style={{width: '50%'}}
    //     />

    //     <StripeCheckout
    //       allowRememberMe={true}
    //       amount={this.state.amount * 100}
    //       closed={this.handleClose}
    //       description={`Sponsor ${this.state.student.first_name}`}
    //       image="https://stripe.com/img/documentation/checkout/marketplace.png"
    //       label="Donate"
    //       locale="auto"
    //       name="SchoolMe"
    //       opened={this.handleOpen}
    //       panelLabel={`Donate`}
    //       // shippingAddress
    //       stripeKey={this.state.key}
    //       token={this.onToken}
    //     />
    //   </div>
    // )
  }
}

const mapStateToProps = state => {
  return{
    paying: state.stripe.paying,
    paid: state.stripe.paid,
    id: state.stripe.id,
    error: state.stripe.error,
  }
}

// export default connect(mapStateToProps, {makeDonation})(StripeComponent);
export default connect(mapStateToProps, {makeDonation})(injectStripe(StripeComponent));