import {
    UPDATE_PREFERENCES, 
    ADD_MATCH, 
    DELETE_MATCH,
    FETCH_PROTECTED_DATA_SUCCESS, 
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/adoptr';

const initialState = {
    'data': '',
    'error': null,
    'savedMatches': [
	    {
	    	'animal': 'Dog',
	    	'name': 'Marshall',
	    	'age': 'Adult',
	    	'size': 'M',
	    	'id': '43081118',
	    	'breeds': ['Border Collie'],
	    	'sex': 'M',
	    	'options': ['altered', 'hasShots', 'housetrained'],
	    	'contact': {
	    		'phone': '(913) 250-0506',
	    		'state': 'KS',
	    		'address2': '',
	    		'email': 'LvnCoHS@live.com',
	    		'city': 'Lansing',
	    		'zip': '66043',
	    		'address1': '1205 REAR N. Main Street'
	    	},
	    	'photo': 'http://photos.petfinder.com/photos/pets/43081118/1/?bust=1540219603&width=500&-x.jpg',
	    	'description': 'Sample description'
	    },
        {
            'animal': 'Dog',
            'name': 'Marshall',
            'age': 'Adult',
            'size': 'M',
            'id': '43081118',
            'breeds': ['Border Collie'],
            'sex': 'M',
            'options': ['altered', 'hasShots', 'housetrained'],
            'contact': {
                'phone': '(913) 250-0506',
                'state': 'KS',
                'address2': '',
                'email': 'LvnCoHS@live.com',
                'city': 'Lansing',
                'zip': '66043',
                'address1': '1205 REAR N. Main Street'
            },
            'photo': 'http://photos.petfinder.com/photos/pets/43081118/1/?bust=1540219603&width=500&-x.jpg',
            'description': 'Sample description'
        },
        {
            'animal': 'Dog',
            'name': 'Marshall',
            'age': 'Adult',
            'size': 'M',
            'id': '43081118',
            'breeds': ['Border Collie'],
            'sex': 'M',
            'options': ['altered', 'hasShots', 'housetrained'],
            'contact': {
                'phone': '(913) 250-0506',
                'state': 'KS',
                'address2': '',
                'email': 'LvnCoHS@live.com',
                'city': 'Lansing',
                'zip': '66043',
                'address1': '1205 REAR N. Main Street'
            },
            'photo': 'http://photos.petfinder.com/photos/pets/43081118/1/?bust=1540219603&width=500&-x.jpg',
            'description': 'Sample description'
        }
    ],
    'preferences': {
    	'animal': ['Dog'],
    	'age': ['Baby', 'Young', 'Adult'],
    	'size': ['S', 'M', 'L'],
    	'sex': ['M', 'F'],
    	'goodWith': ['dogs'],
    	'care': ['housetrained'],
    	'radius': 10
    },
    'match': {
    	'animal': 'Dog',
    	'name': 'Jelli',
    	'age': 'Adult',
    	'size': 'M',
    	'id': '38320919',
    	'breeds': ['Shepherd', 'Labrador Retriever'],
    	'sex': 'F',
    	'options': ['altered', 'hasShots', 'housetrained', 'specialNeeds'],
    	'contact': {
    		'phone': '832-539-4004',
    		'state': 'TX',
    		'address2': '',
    		'email': 'info@aarfhouston.org',
    		'city': 'Houston',
    		'zip': '77205',
    		'address1': 'P. O. Box 62736'
    	},
    	'photo': 'http://photos.petfinder.com/photos/pets/38320919/1/?bust=1496860305&width=500&-x.jpg',
    	'description': 'Sample description'
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
