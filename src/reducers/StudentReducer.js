import {
  FAIL,
  FETCHING_STUDENTS,
  FETCHED_STUDENTS,
  UPDATING_STUDENT,
  UPDATED_STUDENT
} from '../actions/index';

const initialStudentState = {
  students: [],
  fetching: false,
  fetched: false,
  updating: false,
  updated: true,
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
    case UPDATING_STUDENT:
      return{
        ...state,
        updating: true,
        updated: false
      }
    case UPDATED_STUDENT:
      return{
        ...state,
        updating: false,
        updated: true
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