import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {makeDonation} from '../../actions/index';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      complete: false
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

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the donation?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);