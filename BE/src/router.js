const express = require('express')
const router = express.Router()

const {  addRace, addHorse, addResult, getAllHorses, getAllRaces } = require('./controllers')


router.get('/horses', getAllHorses)
router.get('/races', getAllRaces)
router.post('/addRace', addRace)
router.post('/addHorse', addHorse)
router.post('/addResult', addResult)

module.exports = router
