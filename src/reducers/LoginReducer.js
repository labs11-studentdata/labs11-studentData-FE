import {
    LOGIN_USER,
    LOGOUT_USER,
    REG_SELECTED,
    LOG_SELECTED,
    UPDATE_LOGIN_INFO
} from '../actions/login'
import queryString from 'query-string';

const initialState = {
    token: '',
    loggedIn: false,
    isRegistering: false,
    user: {}
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: {
            localStorage.setItem('jwt', action.payload);
            const user = queryString.parse(action.payload);
            if (user.user_permissions) console.log(user.user_permissions.replace(/\s/g, '').toLowerCase())
       
            return{
                ...state,
                token: action.payload,
                loggedIn: true,
                user: user
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
        case UPDATE_LOGIN_INFO: {
            return{
                ...state,
                user: {
                    ...state.user,
                    schoolID: action.payload
                }
            }
        }
        default: 
            return state;
    }
} 