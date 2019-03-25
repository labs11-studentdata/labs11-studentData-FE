import React from 'react';

const StudentCounter = props => {
  const total = props.students.length;
  return(
    <div>
      <h2>{total}</h2>
      <p>Total Students</p>
    </div>
  )
}

export default StudentCounter;