/* import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

function DeleteStudent(...props) {

    const deleteStudent = (e, props) => {

        console.log("ID: ", this.props.id)

        e.preventDefault();
    
        axios.delete(process.env.REACT_APP_BE_URL + `/api/students/${this.props.id}`)
            .then(response => {
                console.log("server response", response.data);
            })
            .catch(e => {

            console.log("server error:", e.message);

            })


    }
    
    return (

        <Button onClick={deleteStudent}>Delete Student</Button>

    );
}

export default DeleteStudent; */