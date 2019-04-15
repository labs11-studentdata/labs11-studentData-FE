import React from 'react';

const RoleCard = props => {
  
    return (
        <div className="role-card">
            <img src={props.src} alt={props.alt}/>
            <h3>{props.role}</h3>
            <p>{props.description}</p>
        </div>
    );
  }
  
  export default RoleCard;