const Activity = require('../models/Activity');
exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ dateTime: 1 });
    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}; 