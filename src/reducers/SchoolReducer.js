import {
  FAIL,
  FETCHING_SCHOOLS,
  FETCHED_SCHOOLS
} from '../actions/index';

const initialStudentState = {
  schools: [],
  fetching: false,
  fetched: false,
  error: null
}

export const SchoolReducer = (state = initialStudentState, action) => {
  switch(action.type) {
    case FETCHING_SCHOOLS:
      return{
        ...state,
        fetching: true,
        fetched: false,
        error: null
      }
    case FETCHED_SCHOOLS:
      return{
        ...state,
        fetching: false,
        fetched: true,
        schools: action.payload,
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