export function normalizeGender(targetPet) {
	if (targetPet === 'M') {
		return 'Male';
	} else {
		return 'Female';
	}
};

export function normalizeSize(targetPet) {
	if (targetPet === 'S') {
		return 'Small';
	} else if (targetPet === 'M') {
		return 'Medium';
	} else if (targetPet === 'L') {
		return 'Large';
	} else {
		return 'Extra large'
	}
};

export function normalizeHealth(targetPet) {
	if (targetPet === 'altered') {
		return 'Spayed/neutered'
	};
	if (targetPet === 'hasShots') {
		return 'Vaccinations up to date'
	};
};