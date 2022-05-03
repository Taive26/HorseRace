const db = require('../db');
const horse = db.horses;

module.exports = async function (req, res) {
  try {
    await horse.create(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};