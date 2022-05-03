const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

module.exports = {
    horses: require('./models/horse.model'),
    races: require('./models/race.model'),
    results: require('./models/result.model'),
}
