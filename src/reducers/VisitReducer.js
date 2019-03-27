import {
  FAIL,
  FETCHING_VISITS,
  FETCHED_VISITS
} from '../actions/index';

const initialVisitState = {
  visits: [],
  fetching: false,
  fetched: false,
  error: null
}

export const VisitReducer = (state = initialVisitState, action) => {
  switch(action.type) {
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
        vitits: action.payload,
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