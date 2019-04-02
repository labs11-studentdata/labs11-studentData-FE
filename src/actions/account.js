import axios from 'axios';
export const UPDATE_ACCOUNT_START = 'UPDATE_ACCOUNT_START';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAIL = 'UPDATE_ACCOUNT_FAILURE';

const baseURL = process.env.REACT_APP_BE_URL;
export const updateAccount = (user_id, updates) => dispatch => {
    console.log(updates)
    dispatch({ type: UPDATE_ACCOUNT_START });
    axios.put(`${baseURL}/api/users/${user_id}`, updates)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: res.data.updatedUser })
            window.location.href = `${res.data.updatedUser.user_permissions.replace(/\s/g, '').toLowerCase()}dashboard`
        })
        .catch(err => dispatch({ type: UPDATE_ACCOUNT_FAIL, payload: err}))
}