const db = require('../db');
const result = db.results;

module.exports = async function (req, res) {
  try {
    await result.create(req.body);
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};