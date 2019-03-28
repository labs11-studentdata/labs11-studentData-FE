import {
    LOGIN_USER,
    LOGOUT_USER,
    REG_SELECTED,
    LOG_SELECTED
} from '../actions/login'

const initialState = {
    token: '',
    loggedIn: false,
    isRegistering: false
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: {
            localStorage.setItem('jwt', action.payload)
            return{
                ...state,
                token: action.payload,
                loggedIn: true
            }
        }
        case LOGOUT_USER: {
            return{
                ...state,
                loggedIn: false
            }
        }
        case REG_SELECTED: {
            return{
                ...state,
                isRegistering: true
            }
        }
        case LOG_SELECTED: {
            return{
                ...state,
                isRegistering: false
            }
        }
        default: 
            return state;
    }
} 