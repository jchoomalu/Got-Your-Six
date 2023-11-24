import {crudControllers} from './crud-controller.js'

import Resources from '../models/resources.model.js'

//forward to crud controller to handle requests
export default crudControllers(Resources)