import React from 'react';
import GHicon from '../../imgs/GitHub-Icon.png'
import LIicon from '../../imgs/LinkedIn-Icon.png'


const PromoCard = props => {
    return (
        <div>
            <img src={props.src} alt={props.alt} />
            <h5>{props.name}</h5>
            <img src={GHicon} alt="GitHub Logo" />
            <span>{props.gh}</span>
            <img src={LIicon} alt="LinkedIn Logo" />
            <span>{props.li}</span>
        </div>
    );
  }
  
  export default PromoCard;