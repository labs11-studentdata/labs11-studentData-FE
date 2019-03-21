import React from 'react';

const VisitLog = props => {
  return(
    <div>
      <h2>Visit log</h2>
      <div>
        {props.visits.map(visit => {
          return (
            <div className='visit'>
              <p>Visit {visit.id}</p>
              <p>{props.date}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VisitLog;