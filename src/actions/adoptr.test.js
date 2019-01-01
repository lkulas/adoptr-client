
import {
    GET_ADOPTR_SUCCESS,
    getAdoptrSuccess,
    GET_ADOPTR_ERROR,
    getAdoptrError,
    POST_ADOPTR_SUCCESS,
    postAdoptrSuccess,
    POST_ADOPTR_ERROR,
    postAdoptrError,
    DELETE_ADOPTR_SUCCESS,
    deleteAdoptrSuccess,
    DELETE_ADOPTR_ERROR,
    deleteAdoptrError
} from './adoptr';

describe('getAdoptrSuccess', () => {
    it('Should return the action', () => {
        const data = 'Get pets';
        const action = getAdoptrSuccess(data);
        expect(action.type).toEqual(GET_ADOPTR_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('getAdoptrError', () => {
    it('Should return the action', () => {
        const error = 'Error';
        const action = getAdoptrError(error);
        expect(action.type).toEqual(GET_ADOPTR_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('postAdoptrSuccess', () => {
    it('Should return the action', () => {
        const data = 'Post pet';
        const action = postAdoptrSuccess(data);
        expect(action.type).toEqual(POST_ADOPTR_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('postAdoptrError', () => {
    it('Should return the action', () => {
        const error = 'Error';
        const action = postAdoptrError(error);
        expect(action.type).toEqual(POST_ADOPTR_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('deleteAdoptrSuccess', () => {
    it('Should return the action', () => {
        const data = 'Delete pet';
        const action = deleteAdoptrSuccess(data);
        expect(action.type).toEqual(DELETE_ADOPTR_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('deleteAdoptrError', () => {
    it('Should return the action', () => {
        const error = 'Error';
        const action = deleteAdoptrError(error);
        expect(action.type).toEqual(DELETE_ADOPTR_ERROR);
        expect(action.error).toEqual(error);
    });
});