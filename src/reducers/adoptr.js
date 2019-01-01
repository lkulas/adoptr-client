import {
    GET_ADOPTR_SUCCESS,
    GET_ADOPTR_ERROR,
    POST_ADOPTR_SUCCESS,
    POST_ADOPTR_ERROR,
    DELETE_ADOPTR_SUCCESS,
    DELETE_ADOPTR_ERROR
} from '../actions/adoptr';

const initialState = {
    username: null,
    animal: null,
    name: null,
    age: null,
    size: null,
    animalId: null,
    breed: null,
    sex: null,
    altered: null,
    hasShots: null,
    housetrained: null,
    goodWith: {
        children: null,
        dogs: null,
        cats: null
    },
    contact: {
        phone: null,
        email: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip: null
    },
    photo: null,
    description: null,
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === GET_ADOPTR_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === GET_ADOPTR_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === POST_ADOPTR_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === POST_ADOPTR_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === DELETE_ADOPTR_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === DELETE_ADOPTR_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
