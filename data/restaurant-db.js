const restaurants = [
  {name: '45th Ave Seafood', type: 'Seafood', done: true, _id: 234789},
  {name: 'Atl Fine Dining', type: 'Steakhouse', done: false, _id: 987123},
  {name: 'Best Brunch', type: 'steakhouse', done: false, _id: 456726}

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

export { 
	find
}