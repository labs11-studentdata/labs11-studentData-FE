import {
    LOGIN_USER
} from '../actions/login'

const initialState = {
    token: ''
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: {
            localStorage.setItem('jwt', action.payload)
            return{
                ...state,
                token: action.payload
            }
        }
        default: 
            return state;
    }
} 