const express = require('express')
const router = express.Router()

const {  getTasks, addRace, addHorse, addResult, authorsList } = require('./controllers')


router.get('/tasks', getTasks)
router.get('/authorsList', authorsList)
router.post('/addRace', addRace)
router.post('/addHorse', addHorse)
router.post('/addResult', addResult)

module.exports = router
