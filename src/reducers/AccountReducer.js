import { UPDATE_ACCOUNT_START, UPDATE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT_FAIL } from '../actions/account';

const initialState = {
    error: false,
    updatedUser: {},
    updatingUser: false
}
export const AccountReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_ACCOUNT_START:
            return {
                ...state,
                updatingUser: true
            } 
        case UPDATE_ACCOUNT_SUCCESS: 
            return {
                ...state,
                updatingUser: false,
                updatedUser: action.payload
            }
        case UPDATE_ACCOUNT_FAIL: 
            return {
                ...state,
                updatingUser: false,
                error: true,
            }
        default:
            return state;
    }
}