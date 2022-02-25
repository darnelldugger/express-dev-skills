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


function create(req, res) {
  console.log(req.body)
  restaurantDB.create(req.body, function(error, restaurant) {
    res.redirect('/restaurants')
  })
}

function deleteRestaurant(req, res) {
  restaurantDB.findByIdAndDelete(req.params.id, function(error, restaurant) {
    res.redirect('/restaurants')
  })
}


export {
  index,
  show,
  newRestaurant as new,
  create,
  deleteRestaurant as delete,
}