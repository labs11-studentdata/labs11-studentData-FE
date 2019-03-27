export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = token => {
    window.location.href = '/'
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