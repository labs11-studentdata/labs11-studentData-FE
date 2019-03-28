import axios from 'axios';
//export actions here as you write them

// axios.defaults.withCredentials = true;

const baseURL = process.env.REACT_APP_BE_URL;
// const baseURL = 'http://localhost:9000';

export const FETCHING_STUDENTS = 'FETCHING_STUDENTS';
export const FETCHED_STUDENTS = 'FETCHED_STUDENTS';
export const FETCHING_VISITS = 'FETCHING_VISITS';
export const FETCHED_VISITS = 'FETCHED_VISITS';
export const FETCHING_SCHOOLS = 'FETCHING_SCHOOLS';
export const FETCHED_SCHOOLS = 'FETCHED_SCHOOLS';
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

  axios.get(`${baseURL}/api/social_worker_visits`)
    .then(res => dispatch({type: FETCHED_VISITS, payload: res.data}))
    .catch(err => dispatch({type: FAIL, payload: err}))
}

//gets all schools
export const getSchools = () => dispatch => {
  dispatch({type: FETCHING_SCHOOLS});

  axios.get(`${baseURL}/api/schools`)
    .then(res => dispatch({type: FETCHED_SCHOOLS, payload: res.data}))
    .catch(err => dispatch({type: FAIL, payload: err}))
}