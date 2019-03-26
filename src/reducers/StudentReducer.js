import {
  FAIL,
  FETCHING_STUDENTS,
  FETCHED_STUDENTS
} from '../actions/index';

const initialStudentState = {
  students: [],
  fetching: false,
  fetched: false,
  error: null
}

export const StudentReducer = (state = initialStudentState, action) => {
  switch(action.type) {
    case FETCHING_STUDENTS:
      return{
        ...state,
        fetching: true,
        fetched: false,
        error: null
      }
    case FETCHED_STUDENTS:
      return{
        ...state,
        fetching: false,
        fetched: true,
        students: action.payload,
        error: null
      }
    case FAIL:
      return{
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload
      }
    default:
      return state;
  }
}