
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const GET_ADOPTR_SUCCESS = 'GET_ADOPTR_SUCCESS';
export const getAdoptrSuccess = data => ({
    type: GET_ADOPTR_SUCCESS,
    data
});

export const GET_ADOPTR_ERROR = 'GET_ADOPTR_ERROR';
export const getAdoptrError = error => ({
    type: GET_ADOPTR_ERROR,
    error
});

export const POST_ADOPTR_SUCCESS = 'POST_ADOPTR_SUCCESS';
export const postAdoptrSuccess = data => ({
    type: POST_ADOPTR_SUCCESS,
    data
});

export const POST_ADOPTR_ERROR = 'POST_ADOPTR_ERROR';
export const postAdoptrError = error => ({
    type: POST_ADOPTR_ERROR,
    error
});

export const DELETE_ADOPTR_SUCCESS = 'DELETE_ADOPTR_SUCCESS';
export const deleteAdoptrSuccess = data => ({
    type: DELETE_ADOPTR_SUCCESS,
    data
});

export const DELETE_ADOPTR_ERROR = 'DELETE_ADOPTR_ERROR';
export const deleteAdoptrError = error => ({
    type: DELETE_ADOPTR_ERROR,
    error
});

export const UPDATE_CURRENT_PET_SUCCESS = 'UPDATE_CURRENT_PET_SUCCESS';
export const updateCurrentPetSuccess = data => ({
    type: UPDATE_CURRENT_PET_SUCCESS,
    data
});

export const UPDATE_CURRENT_PET_ERROR = 'UPDATE_CURRENT_PET_ERROR';
export const updateCurrentPetError = error => ({
    type: UPDATE_CURRENT_PET_ERROR,
    error
});

export const getAdoptr = () => (dispatch, getState) => {
    const username = localStorage.getItem('username');
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/adoptr/${username}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getAdoptrSuccess(data)))
    .catch(err => dispatch(getAdoptrError(err)));
}

export const postAdoptr = (pet) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/adoptr`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        },
        body: JSON.stringify(pet)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(postAdoptrSuccess(data)))
    .catch(err => dispatch(postAdoptrError(err)));
}

export const deleteAdoptr = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/adoptr/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-type": "application/json"
        }
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(deleteAdoptrSuccess(data)))
    .catch(err => dispatch(deleteAdoptrError(err)));
}

export const updateCurrentPet = (pet) => (dispatch, getState) => {
    dispatch(updateCurrentPetSuccess(pet));
}