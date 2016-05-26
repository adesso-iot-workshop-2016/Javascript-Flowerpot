import {RestStore} from './RestStore.js';

class Light extends RestStore {
	constructor() {
		super('e470d7fb-59fb-454a-8b90-e755dbb413a5', 'luminosity', 2048);
	}
}

export default Light
