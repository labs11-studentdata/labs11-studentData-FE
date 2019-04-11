import React from 'react';
import Button from '@material-ui/core/Button';

const LandingCardBtn = props => {
  
    return (
        <div className={props.class}>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.text}
            </p>
            {/* <div class="button" onClick={props.btnHandler}>{props.btnText}</div> */}
            {/* Switched to href for presentation */}
            <Button
            variant="contained"
            size="large"
            color="primary"
            href={`${process.env.REACT_APP_FE_ROOT}/login`}
>
            Register Now
          </Button>
        </div>
    );
  }
  
  export default LandingCardBtn;