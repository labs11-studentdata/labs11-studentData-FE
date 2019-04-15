import axios from 'axios';

export const FETCHING_ADMIN_STUDENTS_START = 'FETCHING_ADMIN_STUDENTS_START';
export const FETCHING_ADMIN_STUDENTS_SUCCESS = 'FETCHING_ADMIN_STUDENTS_SUCCESS';
export const FETCHING_ADMIN_STUDENTS_FAILURE = 'FETCHING_ADMIN_STUDENTS_FAILURE';


const baseURL = process.env.REACT_APP_BE_URL;


export const getAdminStudents = user_id => dispatch => {
    dispatch({ type: FETCHING_ADMIN_STUDENTS_START })
        axios.get(`${baseURL}/api/users/${user_id}/students`)
        
        .then(res => {
            dispatch({ type: FETCHING_ADMIN_STUDENTS_SUCCESS, payload: res.data.students})
            

        })
        .catch(error => dispatch({ type: FETCHING_ADMIN_STUDENTS_FAILURE, payload: error}))    
}


export const FETCHING_SCHOOL_VISITS_START = 'FETCHING_SCHOOL_VISITS_START';
export const FETCHING_SCHOOL_VISITS_SUCCESS = 'FETCHING_SCHOOL_VISITS_SUCCESS';
export const FETCHING_SCHOOL_VISITS_FAILURE= 'FETCHING_SCHOOL_VISITS_FAILURE';

export const getSchoolVisits = school_id => dispatch => {
    dispatch({type: FETCHING_SCHOOL_VISITS_START})
        axios.get(`${baseURL}/api/social_worker_visits/school/${school_id}`)
            .then(res => {
                dispatch({type: FETCHING_SCHOOL_VISITS_SUCCESS, payload: res.data.schoolVisits})
            })
            .catch(error => dispatch({type: FETCHING_SCHOOL_VISITS_SUCCESS, payload: error}))
}



export const ADD_STUDENT_START = 'ADD_STUDENT_START';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';

export const addStudent = student => dispatch => {
    dispatch({type: ADD_STUDENT_START})
        axios.post(`${baseURL}/api/students`, student)
            .then(res => {
                dispatch({ type: ADD_STUDENT_SUCCESS, payload: res})
                dispatch({ type: FETCHING_ADMIN_STUDENTS_SUCCESS, payload: res.data.students})
            })
            .catch(error => console.log(error))
}
