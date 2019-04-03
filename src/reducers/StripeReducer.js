import {
  FAIL,
  PAYING,
  PAID
} from '../actions/index';

const initialStripeState = {
  id: '',
  paying: false,
  paid: false,
  error: null
}

export const StripeReducer = (state = initialStripeState, action) => {
  switch(action.type) {
    case PAYING:
      return{
        ...state,
        paying: true,
        paid: false,
        error: null
      }
    case PAID:
      return{
        ...state,
        paying: false,
        paid: true,
        id: action.payload.id,
        error: null
      }
    case FAIL:
      return{
        ...state,
        paying: false,
        paid: false,
        error: action.payload
      }
    default:
      return state;
  }
}
