import Water from './store/Water.js'
import Light from './store/Light.js'

export default {
    debug: true,
    mocked: false,
    datastores: {
        Water: Water.data,
        Light: Light.data,
    },
}
