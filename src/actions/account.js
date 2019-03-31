import axios from 'axios';
export const UPDATE_ACCOUNT_START = 'UPDATE_ACCOUNT_START';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAIL = 'UPDATE_ACCOUNT_FAILURE';


export const updateAccount = (user_id, updates) => dispatch => {
    dispatch({ type: UPDATE_ACCOUNT_START });
    axios.put(`/api/users/${user_id}`, updates)
        .then(res => {
            console.log(res)
            dispatch({ type: UPDATE_ACCOUNT_SUCCESS, payload: res.data.updatedUser })})
        .catch(err => dispatch({ type: UPDATE_ACCOUNT_FAIL, payload: err}))
}