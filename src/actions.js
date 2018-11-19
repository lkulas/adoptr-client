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