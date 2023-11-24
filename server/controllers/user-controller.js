import {crudControllers} from './crud-controller.js'

import User from '../models/users.model.js'

//forward to crud controller to handle requests
export default crudControllers(User)