import {
    UPDATE_PREFERENCES, 
    ADD_MATCH, 
    DELETE_MATCH,
    FETCH_PROTECTED_DATA_SUCCESS, 
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/adoptr';

const initialState = {
    data: '',
    error: null,
    savedMatches: [
	    {
	    	animal: 'Dog',
	    	name: 'Marshall',
	    	age: 'Adult',
	    	size: 'M',
	    	id: '43081118',
	    	breeds: ['Border Collie'],
	    	sex: 'M',
	    	options: ['altered', 'hasShots', 'housetrained'],
	    	contact: {
	    		phone: '(913) 250-0506',
	    		state: 'KS',
	    		address2: '',
	    		email: 'LvnCoHS@live.com',
	    		city: 'Lansing',
	    		zip: '66043',
	    		address1: '1205 REAR N. Main Street'
	    	},
	    	photo: 'http://photos.petfinder.com/photos/pets/43081118/1/?bust=1540219603&width=500&-x.jpg',
	    	description: 'Sample description'
	    },
        {
            animal: 'Dog',
            name: 'Rufus',
            age: 'Young',
            size: 'L',
            id: '38308734',
            breeds: ['Boxer'],
            sex: 'M',
            options: ['altered', 'hasShots'],
            contact: {
                phone: '510-255-1825',
                state: 'CA',
                address2: '',
                email: 'pf@westcoastboxerrescue.org',
                city: 'Alameda',
                zip: '94501',
                address1: ''
            },
            photo: 'http://photos.petfinder.com/photos/pets/38308734/1/?bust=1496817083&width=500&-x.jpg',
            description: 'Sample description'
        },
        {
            animal: 'Dog',
            name: 'Annie',
            age: 'Adult',
            size: 'F',
            id: '30433885',
            breeds: ['Labrador Retriever', 'Border Collie'],
            sex: 'M',
            options: ['altered', 'hasShots', 'housetrained'],
            contact: {
                phone: '806 997-2169',
                state: 'TX',
                address2: '',
                email: 'jstapws@yahoo.com',
                city: 'Anton',
                zip: '79313',
                address1: '1205 REAR N. Main Street'
            },
            photo: 'http://photos.petfinder.com/photos/pets/30433885/1/?bust=1428274348&width=500&-x.jpg',
            description: 'Sample description'
        },
        {
            animal: 'Dog',
            name: 'Layla',
            age: 'Adult',
            size: 'F',
            id: '42992512',
            breeds: ['Chihuahua', 'Dachshund'],
            sex: 'S',
            options: ['altered', 'hasShots', 'housetrained'],
            contact: {
                phone: '541-510-4775',
                state: 'OR',
                address2: '',
                email: 'wigglytailsdogrescue@yahoo.com',
                city: 'Eugene',
                zip: '97404',
                address1: '1205 REAR N. Main Street'
            },
            photo: 'http://photos.petfinder.com/photos/pets/42992512/1/?bust=1539278328&width=500&-x.jpg',
            description: 'Sample description'
        }
    ],
    preferences: {
        animal: [
            {name: 'Dog', label: 'Dog', checked: true},
            {name: 'Cat', label: 'Cat', checked: false}
        ],
        age: [
            {name: 'Puppy or kitten', label: 'Puppy or Kitten', checked: true},
            {name: 'Young', label: 'Young', checked: false},
            {name: 'Adult', label: 'Adult', checked: false},
            {name: 'Senior', label: 'Senior', checked: false}
        ],
        size: [
            {name: 'Small', label: 'Small', checked: true},
            {name: 'Medium', label: 'Medium', checked: true},
            {name: 'Large', label: 'Large', checked: false},
            {name: 'Extra large', label: 'Extra Large', checked: false},
        ],
        gender: [
            {name: 'Male', label: 'Male', checked: true},
            {name: 'Female', label: 'Female', checked: true}
        ],
        goodWith: [
            {name: 'Children', label: 'Children', checked: false},
            {name: 'Dogs', label: 'Dogs', checked: true},
            {name: 'Cats', label: 'Cats', checked: false}
        ],
        care: [
            {name: 'Housetrained', label: 'Housetrained', checked: true},
            {name: 'Special needs', label: 'Special needs', checked: false},
        ]
    },
    match: {
    	animal: 'Dog',
    	name: 'Jelli',
    	age: 'Adult',
    	size: 'M',
    	id: '38320919',
    	breeds: ['Shepherd', 'Labrador Retriever'],
    	sex: 'F',
    	options: ['altered', 'hasShots', 'housetrained', 'specialNeeds'],
    	contact: {
    		phone: '832-539-4004',
    		state: 'TX',
    		address2: '',
    		email: 'info@aarfhouston.org',
    		city: 'Houston',
    		zip: '77205',
    		address1: 'P. O. Box 62736'
    	},
    	photo: 'http://photos.petfinder.com/photos/pets/38320919/1/?bust=1496860305&width=500&-x.jpg',
    	description: 'Sample description'
    },
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
};
