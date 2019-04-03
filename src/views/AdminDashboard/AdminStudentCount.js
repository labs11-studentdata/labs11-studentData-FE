import React from 'react';

function AdminStudentCount(props) {
    return (
        <div className='adminStudentCount'>
            <h3>{props.students.length}</h3>
            <p>students</p>
        </div>
    )
}

export default AdminStudentCount;