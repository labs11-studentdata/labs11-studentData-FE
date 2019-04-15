import React from 'react';
import GHicon from '../../imgs/GitHub-Icon.png'
import LIicon from '../../imgs/LinkedIn-Icon.png'


const PromoCard = props => {
    return (
        <div className="promo-card">
            <img className="main" src={props.src} alt={props.alt} />
            <h5>{props.name}</h5>
            <div className="link">
                <img className="icon" src={GHicon} alt="GitHub Logo" />
                <a href={props.ghLink} target="_blank">{props.gh}</a>
            </div>
            <div className="link">
                <img className="icon" src={LIicon} alt="LinkedIn Logo" />
                <a href={props.liLink} target="_blank">{props.name}</a>
            </div>
        </div>
    );
  }
  
  export default PromoCard;