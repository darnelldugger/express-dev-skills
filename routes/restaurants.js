import { Router } from 'express'
import * as restaurantDb from '../data/restaurant-db.js'
const router = Router()



router.get('/', function(req, res) {
  restaurantDb.find({}, function(error, restaurants) {
    res.render('restaurants/index', {
      restaurants: restaurants,
      error: error
      
    })
  })
})

export {
  router
}
