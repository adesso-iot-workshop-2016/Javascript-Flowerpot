import {RestStore} from './RestStore.js';

class Temperature extends RestStore {
	constructor() {
		super('ede55c22-6d9d-44ce-b1a5-3c58f03c788c', 'temperature', 1);
	}
}

export default Temperature
