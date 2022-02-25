import * as restaurantDB from '../data/restaurant-db.js'


function index(req, res) {
  restaurantDB.find({}, function(error, restaurants) {
    res.render('restaurants/index', {
      restaurants: restaurants,
      error: error
      
    })
  })
}

export {
  index
}