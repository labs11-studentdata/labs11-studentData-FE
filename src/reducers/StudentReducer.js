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
  updated: false,
  error: null,
  fail: false
}

export const StudentReducer = (state = initialStudentState, action) => {
  switch(action.type) {
    case FETCHING_STUDENTS:
      return{
        ...state,
        fetching: true,
        fetched: false,
        error: null,
        fail: false
      }
    case FETCHED_STUDENTS:
      return{
        ...state,
        fetching: false,
        fetched: true,
        students: action.payload,
        error: null,
        fail: false
      }
    case UPDATING_STUDENT:
      return{
        ...state,
        updating: true,
        updated: false,
        fail: false
      }
    case UPDATED_STUDENT:
      return{
        ...state,
        updating: false,
        updated: true,
        fail: false
      }
    case FAIL:
      return{
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
        fail: true
      }
    default:
      return state;
  }
}