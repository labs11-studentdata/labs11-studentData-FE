import {
  FAIL,
  PAYING,
  PAID
} from '../actions/index';

const initialStripeState = {
  id: '',
  paying: false,
  paid: false,
  error: null,
  fail: false
}

export const StripeReducer = (state = initialStripeState, action) => {
  switch(action.type) {
    case PAYING:
      return{
        ...state,
        paying: true,
        paid: false,
        error: null,
        fail: false
      }
    case PAID:
      return{
        ...state,
        paying: false,
        paid: true,
        id: action.payload.id,
        error: null,
        fail: false
      }
    case FAIL:
      return{
        ...state,
        paying: false,
        paid: false,
        error: action.payload,
        fail: true
      }
    default:
      return state;
  }
}
