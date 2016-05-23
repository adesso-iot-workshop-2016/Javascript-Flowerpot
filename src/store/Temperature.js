import {RestStore} from './RestStore.js';

class Temperature extends RestStore {
	constructor() {
		super('299d33dc-01d7-4b8d-8e48-89204d135075', 'temperature', 1);
	}
}

export default Temperature