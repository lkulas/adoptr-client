import {
    GET_ADOPTR_SUCCESS,
    GET_ADOPTR_ERROR,
    POST_ADOPTR_SUCCESS,
    POST_ADOPTR_ERROR,
    DELETE_ADOPTR_SUCCESS,
    DELETE_ADOPTR_ERROR,
    UPDATE_CURRENT_PET_SUCCESS,
    UPDATE_CURRENT_PET_ERROR
} from '../actions/adoptr';

const initialState = {
    username: null,
    currentPet: {
        animal: null,
        name: null,
        age: null,
        size: null,
        animalId: null,
        breed: null,
        sex: null,
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
        description: null
    },
    savedPets: [],
    error: null
}

export default function reducer(state = initialState, action) {
    if (action.type === GET_ADOPTR_SUCCESS) {
        return Object.assign({}, state, {
            savedPets: action.savedPets,
            error: null
        });
    } else if (action.type === GET_ADOPTR_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === POST_ADOPTR_SUCCESS) {
        return Object.assign({}, state, {
            savedPets: action.savedPets,
            error: null
        })
        .then(window.location.reload(true));
    } else if (action.type === POST_ADOPTR_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === DELETE_ADOPTR_SUCCESS) {
        return Object.assign({}, state, {
            savedPets: action.savedPets,
            error: null
        });
    } else if (action.type === DELETE_ADOPTR_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === UPDATE_CURRENT_PET_SUCCESS) {
        return Object.assign({}, state, {
            currentPet: action.data,
            error: null
        });
    } else if (action.type === UPDATE_CURRENT_PET_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
