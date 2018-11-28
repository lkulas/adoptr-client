
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const UPDATE_PREFERENCES = 'UPDATE_PREFERENCES';
export const updatePreferences = preferences => ({
	type: UPDATE_PREFERENCES,
	preferences
});

export const ADD_MATCH = 'ADD_MATCH';
export const addMatch = match => ({
	type: ADD_MATCH,
	match
});

export const DELETE_MATCH = 'DELETE_MATCH';
export const deleteMatch = match => ({
	type: DELETE_MATCH,
	match
});

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_PROTECTED_DATA_SUCCESS,
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
