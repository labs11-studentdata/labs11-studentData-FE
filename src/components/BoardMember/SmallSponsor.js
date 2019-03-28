import React from 'react';
import PaymentComponent from '../Payment/PaymentComponent';
import Paper from '@material-ui/core/Paper';

const SmallSponsor = props => {
  if (props.student !== null){
    return(
      <Paper>
        <div >
          <p className='sponsoring'>Thank you! Sponsoring {`${props.student.first_name}`}</p>
          <div className='container'>
          <PaymentComponent selectedStudent={props.student}/>
          </div>
        </div>
      </Paper>
    )
  }
}

export default SmallSponsor;