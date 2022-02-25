import { Router } from 'express'
import * as restaurantsCtrl from '../controllers/restaurants.js'
import { app } from '../server.js'
const router = Router()



router.get('/', restaurantsCtrl.index)



export {
  router
}
