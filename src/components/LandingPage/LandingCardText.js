import React from 'react';

const LandingCardText = props => {
  
    return (
        <div className={props.class}>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.text}
            </p>
        </div>
    );
  }
  
  export default LandingCardText;