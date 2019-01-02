export function normalizeGenderResponse(target) {
	if (target.toLowerCase() === 'm') {
		return 'Male';
	} else if (target.toLowerCase() === 'f') {
		return 'Female';
	} else {
		return 'Error';
	}
}

export function normalizeSizeResponse(target) {
	if (target.toLowerCase() === 's') {
		return 'Small';
	} else if (target.toLowerCase() === 'm') {
		return 'Medium';
	} else if (target.toLowerCase() === 'l') {
		return 'Large';
	} else if (target.toLowerCase() === 'xl') {
		return ('Extra Large');
	} else {
		return 'Error';
	}
}