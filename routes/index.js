import { Router } from 'express'
const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Turtles are cool' })
})

export { 
  router
}
