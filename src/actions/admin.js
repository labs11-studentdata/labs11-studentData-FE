import axios from 'axios';

export const FETCHING_ADMIN_STUDENTS_START = 'FETCHING_ADMIN_STUDENTS_START';
export const FETCHING_ADMIN_STUDENTS_SUCCESS = 'FETCHING_ADMIN_STUDENTS_SUCCESS';
export const FETCHING_ADMIN_STUDENTS_FAILURE = 'FETCHING_ADMIN_STUDENTS_FAILURE';

const baseURL = process.env.REACT_APP_BE_URL;


export const getAdminStudents = user_id => dispatch => {
    dispatch({ type: FETCHING_ADMIN_STUDENTS_START })
        axios.get(`${baseURL}/api/users/${user_id}/students`)
        .then(res => {
            console.log(res)
            dispatch({ type: FETCHING_ADMIN_STUDENTS_SUCCESS, payload: res.data.students})
        })
        .catch(error => dispatch({ type: FETCHING_ADMIN_STUDENTS_FAILURE, payload: error}))    
}
