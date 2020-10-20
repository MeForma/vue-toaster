import Toaster from './Toaster.vue'
import Api from './api.js'
import Positions from './defaults/positions.js'

const Plugin = (app, options = {}) => {
  let methods = Api(options)
  app.$toast = methods
  app.config.globalProperties.$toast = methods
}

Toaster.install = Plugin

export default Toaster
export { Toaster, Positions }
