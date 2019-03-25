import {
  FAIL,
  FETCHING_STUDENTS,
  FETCHED_STUDENTS,
  FETCHING_VISITS,
  FETCHED_VISITS,
} from '../actions/index';

const initialBoardState = {
  students: [],
  visits: [],
  fetching: false,
  fetched: false,
  error: null
}

export const BoardReducer = (state = initialBoardState, action) => {
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
    case FETCHING_VISITS:
      return{
        ...state,
        fetching: true,
        fetched: false,
        error: null
      }
    case FETCHED_VISITS:
      return{
        ...state,
        fetching: false,
        fetched: true,
        visits: action.payload,
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