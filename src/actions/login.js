export const LOGIN_USER = 'LOGIN_USER'

export const loginUser = token => {
    window.location.href = '/'
    return {
        type: LOGIN_USER,
        payload: token
    }
}