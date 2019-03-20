import React from 'react';

const Card = props => {
  return(
    <div className='onboardingCard' key={props.id}>
        <image src={props.icon} alt={props.iconDescription} />
        <p>I am a {props.title}</p>
        <p>{props.subnames}</p>
    </div>
  )
}

export default Card;