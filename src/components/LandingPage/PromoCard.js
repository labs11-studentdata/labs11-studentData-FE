import React from 'react';
import GHicon from '../../imgs/GitHub-Icon.png'
import LIicon from '../../imgs/LinkedIn-Icon.png'


const PromoCard = props => {
    return (
        <div className="promo-card">
            <img className="main" src={props.src} alt={props.alt} />
            <h5>{props.name}</h5>
            <div className="link" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <a href={props.ghLink} target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={GHicon} alt="GitHub Logo" style={{margin: `8px`}}/>
                </a>
                <a href={props.liLink} target="_blank" rel="noopener noreferrer">
                    <img className="icon" src={LIicon} alt="LinkedIn Logo" style={{margin: `8px`}}/>
                </a>
            </div>
        </div>
    );
  }
  
  export default PromoCard;