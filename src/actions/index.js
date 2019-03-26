import axios from 'axios';
//export actions here as you write them

// axios.defaults.withCredentials = true;

const baseURL = process.env.REACT_APP_BE_URL;

export const FETCHING_STUDENTS = 'FETCHING_STUDENTS';
export const FETCHED_STUDENTS = 'FETCHED_STUDENTS';
export const FETCHING_VISITS = 'FETCHING_VISITS';
export const FETCHED_VISITS = 'FETCHED_VISITS';
export const FAIL = 'FAIL';

//gets all students
export const getStudents = () => dispatch => {
  dispatch({type: FETCHING_STUDENTS});

  axios.get(`${baseURL}/api/students`)
    .then(res => dispatch({type: FETCHED_STUDENTS, payload: res.data}))
    .catch(err => dispatch({type: FAIL, payload: err}))
}

//gets students by school+grade
export const getStudentsByClass = (schoolID, gradeID) => dispatch => {
  dispatch({type: FETCHING_STUDENTS});

  axios.get(`${baseURL}/api/school/${schoolID}/students/${gradeID}`)
    .then(res => dispatch({type: FETCHED_STUDENTS, payload: res.data}))
    .catch(err => dispatch({type: FAIL, payload: err}))
}

//gets all social worker visits, no matching endpoint yet
export const getVisits = () => dispatch => {
  dispatch({type: FETCHING_VISITS});

  axios.get(`${baseURL}/api/visits`)
    .then(res => dispatch({type: FETCHED_VISITS, payload: res.data}))
    .catch(err => dispatch({type: FAIL, payload: err}))
}