import React from 'react';

const StudentCounter = props => {

  return(
    <div>
      <h2>{props.total}</h2>
      <p>Total Students</p>
    </div>
  )
}

export default StudentCounter;