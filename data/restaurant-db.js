const restaurants = [
  {name: '45th Ave Seafood', type: 'Seafood', done: true, _id: 234789},
  {name: 'Atl Fine Dining', type: 'Steakhouse', done: false, _id: 987123},
  {name: 'Best Brunch', type: 'Steakhouse', done: true, _id: 456726}

]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, restaurants)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const restaurant = restaurants.find(restaurant => restaurant._id === parseInt(id))
    if (!restaurant) throw new Error ('No restaurant was found')
    return callback(null, restaurant)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(restaurant, callback) {
  restaurant._id =Date.now() % 1000000
  restaurant.done = false
  restaurants.push(restaurant)
  return callback(null, restaurant)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = restaurants.findIndex(restaurant => restaurant._id == parseInt(id))
    const deletedRestaurant = restaurants.splice(idx, 1)
    if (!deletedRestaurant.length ) throw new Error ('No Restaurant was deleted')
    return callback(null, deletedRestaurant[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete
}