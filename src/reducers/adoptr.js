import {UPDATE_PREFERENCES, ADD_MATCH, DELETE_MATCH} from '../actions/adoptr';

const initialState = {
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
	    	'description': `This handsome 100% Boarder Collie is Marshall, a super happy, healthy & pleasant tempered boy. Marshall is about one-year old, and a total love. While we don't think breed is everything, it does influence who he is.  He is very energetic, SUPER intelligent, young adult neutered male and bored silly in the shelter.  He needs a job, boundaries, lots of exercise, engagement, and most especially, adopters who know his needs and can provide for them.  He is probably not the right dog for an apartment dweller or someone who is away lots.  He may be pushy with smaller children, after all his job is to herd!!  He also wants very much to be loved ?\n\n\n\nCome by to visit, or contact LvnCoHS@live.com for application.  If the dog is in foster care, we'll need to review an application prior to scheduling a meeting.  Standard adoption fee for dogs is $125.  Pets in our care are sterilized, vaccinated, microchipped and parasite-free! \n\nLCHS, Inc. is the ONLY organization working to build and operate a no-kill pet animal shelter to serve all Leavenworth County residents.`
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
    	'description': `You can fill out an adoption application online on our official website.\n\nHi my name is Jelli - I'm a really really sweet dog, independent yet affectionate and love to cuddle with my humans. I love to play with other dogs, fetch ball, follow the dogs or people around. Not sure how I would react to cats yet. Need a home that's properly and securely fenced. I don't jump on people. Love to go for walks.\nI'm 3 yrs old, up to date on shots, dewormed, very social with all dogs, I'm not aggressive and more of submissive type. I Sleep excellent thru the night on my bed next to my foster's mom, in kid's bed or in my crate. I am crate trained and stay in a crate at night or when my foster family leaves. My previous foster said I don't like crates and can get out but when I am crated I am in the same room as my other dog friends and am ok being in the crate either at night or when my foster family is gone\n\n. I'm potty trained. I'm looking for a serious, loving , and committed family that will love me forever. Will you be that one?\n\nPlease contact\napp@aarfhouston.org\nfor more information about this dog.\n\nYou can apply online by clicking on\n\nApplication\n\n. Once your application is approved, we will schedule a meet and greet at one of our adoption events.\n\nThank you for considering a rescue!\n\nThe adoption fee includes vaccinations, Bordetella, de-worming, rabies, spay/neuter and microchip. There is a an additional $12.99 fee for Home Again for a lifetime registration of the microchip.\n\nIt is against the law in the State of Texas for a rescue not to be sterilized so we have to make sure it gets completed and that we have record of it.\n\nNOTE: In our bios, we provide information based on our volunteer's experience with a particular dog; such as temperament, training, and ability to get along with others.\n\nAARF is a 501(c)3 Non Profit, all breed, no kill organization. Our group is always in need of\n\ndonations\n\nin order to continue to give the needed medical care to our rescues. Adoption fees do not begin to cover all of the medical costs. Any\n\ndonation\n\n, no matter how small is a big help and is greatly appreciated. Please help us to continue to help them. Thank you.\n\n11/18/18 12:56 PM`
    },
};

export default function reducer(state = initialState, action) {
    return state;
};

