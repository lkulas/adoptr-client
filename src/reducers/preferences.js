import {
    GET_PREFERENCES_SUCCESS,
    GET_PREFERENCES_ERROR,
    POST_PREFERENCES_SUCCESS,
    POST_PREFERENCES_ERROR,
    PUT_PREFERENCES_SUCCESS,
    PUT_PREFERENCES_ERROR
} from '../actions/preferences';

const initialState = {
    pet: {
        dog: false,
        cat: false,
        puppyOrKitten: false,
        young: false,
        adult: false,
        senior: false,
        small: false,
        medium: false,
        large: false,
        extraLarge: false,
        male: false,
        female: false,
        children: false,
        dogs: false,
        cats: false,
        altered: false,
        hasShots: false,
        housetrained: false
    }
}

export default function reducer(state = initialState, action) {
    if (action.type === GET_PREFERENCES_SUCCESS) {
        return Object.assign({}, state, {
            pet: action.data,
            error: null
        });
    } else if (action.type === GET_PREFERENCES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === POST_PREFERENCES_SUCCESS) {
        return Object.assign({}, state, {
            pet: action.data,
            error: null
        });
    } else if (action.type === POST_PREFERENCES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === PUT_PREFERENCES_SUCCESS) {
        return Object.assign({}, state, {
            pet: action.data,
            error: null
        });
    } else if (action.type === PUT_PREFERENCES_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
