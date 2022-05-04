const express = require('express')
const router = express.Router()

const {  getTasks, addRace, addHorse, addResult, authorsList, getAllHorses } = require('./controllers')


router.get('/tasks', getTasks)
router.get('/authorsList', authorsList)
router.get('/horses', getAllHorses)
router.post('/addRace', addRace)
router.post('/addHorse', addHorse)
router.post('/addResult', addResult)

module.exports = router
