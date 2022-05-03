const db = require('../db');
const race = db.races;

module.exports = async function (req, res) {
  try {
    await race.create(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


