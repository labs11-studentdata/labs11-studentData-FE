import store from '../index';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REG_SELECTED = 'REG_SELECTED';
export const LOG_SELECTED = 'LOG_SELECTED';


export const loginUser = token => {
    const user_permissions = store.getState().login.user.user_permissions
    const user_id = store.getState().login.user.user_id
    if(user_permissions === '') {
        window.location.href = '/onboarding'
    } else if (user_permissions === 'admin') {
        window.location.href = '/admin'
    } else if (user_permissions === 'sponsor') {
        window.location.href = '/sponsor'
    } else if (user_permissions === 'social worker') {
        window.location.href = '/social'
    }
    return {
        type: LOGIN_USER,
        payload: token,
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
