
import {
    GET_PREFERENCES_SUCCESS,
    getPreferencesSuccess,
    GET_PREFERENCES_ERROR,
    getPreferencesError,
    POST_PREFERENCES_SUCCESS,
    postPreferencesSuccess,
    POST_PREFERENCES_ERROR,
    postPreferencesError,
    PUT_PREFERENCES_SUCCESS,
    putPreferencesSuccess,
    PUT_PREFERENCES_ERROR,
    putPreferencesError
} from './preferences';

describe('getPreferencesSuccess', () => {
    it('Should return the action', () => {
        const data = 'Get preferences';
        const action = getPreferencesSuccess(data);
        expect(action.type).toEqual(GET_PREFERENCES_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('getPreferencesError', () => {
    it('Should return the action', () => {
        const error = 'Error';
        const action = getPreferencesError(error);
        expect(action.type).toEqual(GET_PREFERENCES_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('postPreferencesSuccess', () => {
    it('Should return the action', () => {
        const data = 'Post preferences';
        const action = postPreferencesSuccess(data);
        expect(action.type).toEqual(POST_PREFERENCES_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('postPreferencesError', () => {
    it('Should return the action', () => {
        const error = 'Error';
        const action = postPreferencesError(error);
        expect(action.type).toEqual(POST_PREFERENCES_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('putPreferencesSuccess', () => {
    it('Should return the action', () => {
        const data = 'Update preferences';
        const action = putPreferencesSuccess(data);
        expect(action.type).toEqual(PUT_PREFERENCES_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('putPreferencesError', () => {
    it('Should return the action', () => {
        const error = 'Error';
        const action = putPreferencesError(error);
        expect(action.type).toEqual(PUT_PREFERENCES_ERROR);
        expect(action.error).toEqual(error);
    });
});