export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REG_SELECTED = 'REG_SELECTED';
export const LOG_SELECTED = 'LOG_SELECTED';



export const loginUser = token => {
    // window.location.href = '/'
    return {
        type: LOGIN_USER,
        payload: token
    }
}

export const logoutUser = () => {
    localStorage.removeItem('jwt')
    window.location.href = '/login'
    return {
        type: LOGOUT_USER
    }
}

export const regSelected = () => {
    return {
        type: REG_SELECTED
    }
}

export const logSelected = () => {
    return {
        type: LOG_SELECTED
    }
}
