
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const GET_PREFERENCES_SUCCESS = 'GET_PREFERENCES_SUCCESS';
export const getPreferencesSuccess = data => ({
    type: GET_PREFERENCES_SUCCESS,
    data
});

export const GET_PREFERENCES_ERROR = 'GET_PREFERENCES_ERROR';
export const getPreferencesError = error => ({
    type: GET_PREFERENCES_ERROR,
    error
});

export const POST_PREFERENCES_SUCCESS = 'POST_PREFERENCES_SUCCESS';
export const postPreferencesSuccess = data => ({
    type: POST_PREFERENCES_SUCCESS,
    data
});

export const POST_PREFERENCES_ERROR = 'POST_PREFERENCES_ERROR';
export const postPreferencesError = error => ({
    type: POST_PREFERENCES_ERROR,
    error
});

export const PUT_PREFERENCES_SUCCESS = 'PUT_PREFERENCES_SUCCESS';
export const putPreferencesSuccess = data => ({
    type: PUT_PREFERENCES_SUCCESS,
    data
});

export const PUT_PREFERENCES_ERROR = 'PUT_PREFERENCES_ERROR';
export const putPreferencesError = error => ({
    type: PUT_PREFERENCES_ERROR,
    error
});

export const getPreferences = () => (dispatch, getState) => {
    const username = getState().auth.currentUser.username;
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/preferences/${username}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getPreferencesSuccess(data)))
    .catch(err => dispatch(getPreferencesError(err)));
}

export const postPreferences = (preferences) => (dispatch, getState) => {
    const username = getState().auth.currentUser.username;
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/preferences`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(preferences)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(postPreferencesSuccess(data)))
    .catch(err => dispatch(postPreferencesError(err)));
}

export const putPreferences = (id, preferences) => (dispatch, getState) => {
    const username = getState().auth.currentUser.username;
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/preferences/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(preferences)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(putPreferencesSuccess(data)))
    .catch(err => dispatch(putPreferencesError(err)));
}