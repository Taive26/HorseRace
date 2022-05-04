const db = require('./../db')
const races = db.races

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    if (req.query.date === 'true') {
      filter.date = { $exists: true }
    }

    console.log(filter)

    const allRaces = await races.find(filter)
    res.status(200).json({ allRaces })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}