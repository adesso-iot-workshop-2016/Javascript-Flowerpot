import Water from './store/Water.js'
import Light from './store/Light.js'
import Temperature from './store/Temperature.js'

export default {
    debug: true,
    mocked: false,
    datastores: {
        Water: new Water(),
        Light: new Light(),
        Temperature: new Temperature(),
    },
}
