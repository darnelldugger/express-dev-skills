import * as restaurantDB from '../data/restaurant-db.js'


function index(req, res) {
  restaurantDB.find({}, function(error, restaurants) {
    res.render('restaurants/index', {
      restaurants: restaurants,
      error: error,
      time: req.time,
    })
  })
}

function show(req, res) {
  restaurantDB.findById(req.params.id, function(error, restaurant) {
    res.render('restaurants/show', {
      restaurants: restaurant,
      error: error,
    })
  })
}

function newRestaurant(req, res) {
  res.render('restaurants/new')
}


export {
  index,
  show,
  newRestaurant as new,
}