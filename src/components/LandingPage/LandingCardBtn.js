import React from 'react';

const LandingCardBtn = props => {
  
    return (
        <div className={props.class}>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.text}
            </p>
            <div class="button" onClick={props.btnHandler}>{props.btnText}</div>
        </div>
    );
  }
  
  export default LandingCardBtn;