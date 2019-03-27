import {
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/login'

const initialState = {
    token: '',
    loggedIn: false
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
        default: 
            return state;
    }
} 