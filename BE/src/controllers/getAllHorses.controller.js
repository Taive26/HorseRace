const db = require('./../db')
const horses = db.horses

module.exports = async function (req, res) {
  try {
    let filter = {}
    filter = req.query
    if (req.query.name === 'true') {
      filter.name = { $exists: true }
    }

    console.log(filter)

    const allHorses = await horses.find(filter)
    res.status(200).json({ allHorses })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}