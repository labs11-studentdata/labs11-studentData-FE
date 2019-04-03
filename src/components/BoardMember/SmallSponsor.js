import React from 'react';
// import PaymentComponent from '../Payment/PaymentComponent';
// import Paper from '@material-ui/core/Paper';
import {Elements, StripeProvider} from 'react-stripe-elements';
import StripeComponent from '../Stripe/StripeComponent';

const SmallSponsor = props => {
  if (props.student !== null){
    return(
      <StripeProvider apiKey="pk_test_arXBQTpudOCQ9XCjo20KlKbh00piO3nLbb">
        <div className="example">
          <h1>Sponsoring {props.student.first_name}</h1>
          <Elements>
            <StripeComponent />
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

export default SmallSponsor;