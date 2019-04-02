import React, {Component} from 'react';
import {CardElement, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import {makeDonation} from '../../actions/index';
import {Paper} from '@material-ui/core/Paper';
import StripeCheckout from 'react-stripe-checkout';
import TextField from '@material-ui/core/TextField';

class StripeComponent extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      complete: false,
      amount: '',
      key: 'pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb',
    };
  }

  async submit(e) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    makeDonation(token.id);
    this.setState({
      complete: true
    })
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log('pow');
  };

  render() {
    // return (
    //     <div className="checkout">
    //       <p>Would you like to complete the donation?</p>
    //       <CardElement />
    //       <button onClick={this.submit}>Send</button>
    //     </div>
    // );
    return (
      <>
      <TextField
      required
      onChange={this.handleChange}
      value={this.state.amount}
      name="amount"
      label="Donation Amount"
      fullWidth />

      <StripeCheckout
        allowRememberMe={false}
        amount={this.state.amount * 100}
        billingAddress
        closed={this.handleClose}
        description={`Sponsor a student`}
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        label="Pay with 💳"
        locale="auto"
        name="SchoolMe"
        opened={this.handleOpen}
        panelLabel={`Donate`}
        // shippingAddress
        stripeKey={this.state.key}
        token={this.handleToken}
        zipCode
      />
      </>
    )
  }
}

export default injectStripe(StripeComponent);