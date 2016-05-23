import {RestStore} from './RestStore.js';

class Light extends RestStore {
	constructor() {
		super('f8999951-db21-4245-a24c-900dc5939e92', 'luminosity', 2048);
	}
}

export default Light