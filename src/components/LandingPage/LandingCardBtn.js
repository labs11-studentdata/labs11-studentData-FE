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
            {/* <div class="button" onClick={props.btnHandler}>{props.btnText}</div> */}
            {/* Switched to href for presentation */}
            <a href={`${process.env.REACT_APP_FE_ROOT}/login`}>
            <div class="button" >{props.btnText}</div>
            </a>
        </div>
    );
  }
  
  export default LandingCardBtn;